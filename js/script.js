let btn = document.getElementById('burger');
let menu = document.getElementById('menu')

btn.addEventListener('click',()=>{
    menu.classList.toggle('show');
    console.log('click!');
})