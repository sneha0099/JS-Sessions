        function saveData(){
            const name = document.getElementById("name");
            if(name.value!==""){
                localStorage.setItem("name", name.value.trim());
                sessionStorage.setItem("name", name.value.trim())
            }else{
                alert("enter data")
            }
            
        }
        
        function loadData(){

            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            p1.textContent = localStorage.getItem("name");
            p2.textContent = sessionStorage.getItem("name");

            document.getElementById("result").appendChild(p1);
            document.getElementById("result").appendChild(p2);

        }

        let submit = document.getElementById("submit");
        let load = document.getElementById("load");
        submit.addEventListener("click", saveData)
        load.addEventListener("click", loadData)
