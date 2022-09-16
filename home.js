function getName() {
  let name = localStorage.getItem("username")
  console.log(name);
  document.getElementById('username').innerText=name
// document.addEventListener("DOMContentLoaded", getName())
}

document.getElementById("shareBtn").addEventListener("click",masukanInput)
//"shareBtn" --> id nya si BUTTON untuk submit TWIT 

   
  function masukanInput(e) {
    e.preventDefault()
    let input = document.getElementById("input").value 
    keluarOutput(input)
    document.getElementById("input").value = ""
  }
//input --> id dari kolom input text

  function keluarOutput(value){
    let div = document.createElement("div") //buat div baru 
    let text = document.createTextNode(value) // ngebuat text isinya, hasil dari function masukanInput
    div.appendChild(text) // text masuk ke tengah2 <div></div>
    div.style.border="1px black solid" // --> styling doang
    div.style.margin="10px"
    document.getElementById("keluar").appendChild(div)
  }

  

 document.getElementById("deleteBtn").addEventListener("click",hapus)
 //"deleteBtn" --> id nya si BUTTON untuk delete TWIT 
      
 function hapus(e) {
    e.preventDefault()
   let list = document.getElementById("keluar");
    list.removeChild(list.lastElementChild);
  }
  
