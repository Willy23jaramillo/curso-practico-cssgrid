const parrafoUsuiaro=document.querySelector(`.usuario`)
const buttonUsuario=document.querySelector(`button`)
const inputUsuario=document.querySelector(`#input`)


buttonUsuario.addEventListener(`click`,saludo)
function saludo(){
parrafoUsuiaro.innerHTML="Hola " + inputUsuario.value +" como estas. te doy la bienvenida a mi blog en el siguiente enlace te dejo mi perfil de Linkedin donde encontraras enlaces de mis maquetaciones ya funcionales "
    
}
