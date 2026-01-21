const payload = {
  name: "Sneha",
  email: "Sneha@gmail.com",
  settings: {
    theme: "light",
  },
};

for (key in payload) {
  console.log(`key is ${payload[key]}`)
  console.log(`-----`)
  console.log(`key is ${key}`)
}

// object.entries(payload) converts object to array to run forEach
Object.entries(payload).forEach(([key, value]) => {
  console.log(key,value);
});

// for(key of payload){
//   console.log(key)
// ;}

// for(key of payload){
//            ^

// TypeError: payload is not iterable

for(const [key,value] of Object.entries(payload)){
  console.log(key,value)
}