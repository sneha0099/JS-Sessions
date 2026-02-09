const fetchData = async (url) => {
    try {
        const res = await fetch(url);

        if(!res.ok){
            throw new Error ('error while fetching')
        }

        const jsonData = await res.json();

        return jsonData;        
    } catch (error) {
    console.error(error);
    throw error;
    }
}

// function SaveToLocalStorage(cartItems){
//     localStorage.setItem('Data', JSON.stringify(cartItems));
// }

const initializeCart = () => {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem(
      "cart",
      JSON.stringify({products: []})
    );
  }
};

const getCart = () =>
  structuredClone(
    JSON.parse(localStorage.getItem("cart"))
  );

const saveCart = (cart) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
};

const clearCart = () => {
  saveCart({products: []});
  renderCart();
}


const addToCart = (product) => {
    const cart = getCart();
    console.log(cart, "cart");
    console.log("p" , product);
    
    

    const existingItem = cart?.products?.find((item)=> item.id === product.id);
    console.log("existing", existingItem);
    

    let updatedProducts;

    if(existingItem){
        updatedProducts = cart?.products?.map((item)=> item.id === product.id ? {...item, quantity: item.quantity+1} : item) 
        console.log("updatedd", updatedProducts);
    }
    else{
        updatedProducts = [...cart?.products, {...product, quantity:1}]
        console.log("updated", updatedProducts);
        
    }

    const updatedCart = {
        ...cart,
        products: updatedProducts 
    }

    saveCart(updatedCart)
    renderCart()
}

const removeFromCart = (productId) => {
    const cart = getCart();

    console.log(cart, "carttt remove");

    
    const updatedProducts = cart?.products?.filter((item)=> item.id!==productId)
    console.log(updatedProducts, "remove updated");
    

    const updatedCart=  {
        ...cart,
        products: updatedProducts
    }

    console.log("updated cart", updatedCart);
    

    saveCart(updatedCart);
        const cart2 = getCart();

    console.log(cart2, "carttt afer aving");
    renderCart()
}

const calculateTotal = () =>{
    const cart = getCart();

    return cart.products.reduce((acc, product)=>{
        acc += product.quantity * product.price;
        return acc;
    },0);
}


let allProducts = [];
let currentProducts = [];

function renderProducts(products) {
  const items = document.getElementById("items");
  items.className = "products-container";

  items.innerHTML = products.map((p, index) => `
    <div class="product-card" data-index="${index}">
      <img src="${p.thumbnail}" class="product-img"/>
      <p class="product-title">${p.title}</p>
      <h4 class="product-price">₹${p.price}</h4>
      ${
        p.stock === 0
          ? `<button disabled class="out-stock">Out of Stock</button>`
          : `<button class="product-button">Add To Cart</button>`
      }
    </div>
  `).join("");
}



const renderCart = () => {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");
  cartItems.className = "products-container"
  const cart = getCart();

  cartItems.innerHTML = cart.products.map(p => `
    <div class="product-card" data-id="${p.id}">
    <img src="${p.thumbnail}" class="product-img"/>
      <p class="product-title">${p.title}</p>
      <p>Qty: ${p.quantity}</p>
      <p class="product-price">₹${p.price}</p>
      <button class="remove-btn">Remove</button>
    </div>
  `).join("");

  total.innerHTML = `
    <h3>Total: ₹${calculateTotal()}</h3>
    <button class="clear-cart-btn">Clear Cart</button>
  `;
};

function setupSearchUI(){
  const searchBar = document.getElementById("search-bar");

  const input = document.createElement("input");
  input.placeholder = "Search products...";
  input.className = "search-input";

  input.addEventListener("input", (e) => {
    filterProducts(e.target.value);
  })

  searchBar.appendChild(input);
}

function filterProducts(searchText)
{
  const query = searchText.toLowerCase().split(" ").join("");
  currentProducts = allProducts.filter(product =>{
    const normalizedTitle = product.title.toLowerCase().split(" ").join("");
    return normalizedTitle.includes(query);
  })

  renderProducts(currentProducts);
}

function setupEventListeners() {
  const items = document.getElementById("items");
  items.addEventListener("click", (event) => {
    const button = event.target.closest(".product-button");
    if (!button) return;

    const card = button.closest(".product-card");
    const index = card.dataset.index;

    addToCart(currentProducts[index]);
  });

  const cartItems = document.getElementById("cart-items");
  cartItems.addEventListener("click", (event) => {
    const removeBtn = event.target.closest(".remove-btn");
    if (!removeBtn) return;

    const card = removeBtn.closest(".product-card");
    const productId = Number(card.dataset.id);

    removeFromCart(productId);
  });

  const total = document.getElementById("total");
  total.addEventListener("click", (event) => {
    if (event.target.closest(".clear-cart-btn")) {
      clearCart();
    }
  });
}

const Data = fetchData("https://dummyjson.com/products?limit=10&skip=20&select=title,price,thumbnail,stock");

    Data.then((res)=>{
        const {products} = res; 
        console.log(products, "prod");
        
        initializeCart();
        // renderProducts(products);
        // renderCart();
        allProducts = res.products;
        currentProducts = allProducts;

        setupEventListeners();
        setupSearchUI();
        renderProducts(currentProducts);
        renderCart();
    })
    .catch((error) => {
        console.error("Failed to load products:", error);
    });


// console.log(Data);

// const Data = fetchData(`https://dummyjson.com/carts/1`)
// Data.then((res)=>{
//     console.log(res);
    
// })
// const deepCopiedData = structuredClone(Data);

// SaveToLocalStorage(deepCopiedData);
// initializeCart();

// let cart = structuredClone(
//     json.parse(localStorage.getItem('cart'))
// )
// console.log(cart);

  // products.forEach((product, index) => {
  //   const card = document.createElement("div");
  //   card.className = "product-card";
  //   card.dataset.index = index;

  //   const img = document.createElement("img");
  //   img.src = product.thumbnail;
  //   img.className = "product-img";

  //   const desc = document.createElement("p");
  //   desc.className = "product-title";
  //   desc.textContent = product.title;

  //   const price = document.createElement("h4");
  //   price.className = "product-price";
  //   price.textContent = `₹${product.price}`;

  //   const addButton = document.createElement("button");
  //   addButton.className = "product-button";
  //   addButton.textContent = "Add To cart";

  //   card.append(img, desc, price, addButton);
  //   items.appendChild(card);
  // });

  
// function renderCart(){
//     const cart = getCart();

//     const cartItems = document.getElementById("cart-items")
//     cartItems.className = "products-container"
//     cartItems.innerHTML = "";

//     cart?.products?.forEach((cartItem)=>{
//     const card = document.createElement("div");
//     card.className = "product-card";

//     const img = document.createElement("img");
//     img.src = cartItem.thumbnail;
//     img.className = "product-img";

//     const desc = document.createElement("p");
//     desc.className = "product-title";
//     desc.textContent = cartItem.title;

//     const quantity = document.createElement("p");
//     quantity.className = "product-title"
//     quantity.textContent = `Quantity: ${cartItem.quantity}`

    
//     const price = document.createElement("h4");
//     price.className = "product-price";
//     price.textContent = `₹${cartItem.price}`;

//     const RemoveButton = document.createElement("Button")
//     RemoveButton.className = "product-button"
//     RemoveButton.textContent = "Remove from cart"
//     RemoveButton.addEventListener("click", () => removeFromCart(cartItem))

//     card.append(img,desc,quantity,price,RemoveButton)
//     cartItems.appendChild(card)

//     })

//     const total = document.createElement("h3");
//     total.className = "product-title"
//     total.textContent = `total amount is: ${calculateTotal()}`
//     cartItems.appendChild(total)

// }

// function renderProducts(products) {
//   const items = document.getElementById("items");

//   items.className = "products-container";

//   products.forEach((product) => {
//     const card = document.createElement("div");
//     card.className = "product-card";

//     const img = document.createElement("img");
//     img.src = product.thumbnail;
//     img.className = "product-img";

//     const desc = document.createElement("p");
//     desc.className = "product-title";
//     desc.textContent = product.title;

//     const price = document.createElement("h4");
//     price.className = "product-price";
//     price.textContent = `₹${product.price}`;

//     const addButton = document.createElement("Button")
//     addButton.className = "product-button"
//     addButton.textContent = "Add To cart"

//     card.addEventListener("click", (event) => event.target.className == "product-button" ? AddToCart(product) : null)

//     card.append(img, desc, price, addButton);
//     items.appendChild(card);
//   });
// }
