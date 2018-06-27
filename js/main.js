window.onload = () =>{
const btn = document.getElementById("boton");

btn.addEventListener("click", ()=> {
  let mailAdd = document.getElementById("exampleInputEmail1").value;
  let passwordAdd = document.getElementById("exampleInputPassword1").value;
  if (passwordAdd == Number || passwordAdd.length <= 8  ){
    window.location.href='home.html';
}else{
  return alert("no es una contraseña valida")
  
}
 
})
}
