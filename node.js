const panels=document.querySelectorAll('.icon')

const front=document.querySelector('.front-page')
const bar=document.querySelector('.nav-bar')
const icon1=document.querySelector('.icon1')
icon1.addEventListener('click',function(){
    bar.classList.add('change')
    front.classList.add('change')
    panels.forEach(panel=>{
        panel.classList.add('change');
    })
})
const icon2=document.querySelector('.icon2')
icon2.addEventListener('click',function(){
    bar.classList.remove('change')
    front.classList.remove('change')
    panels.forEach(panel=>{
        panel.classList.remove('change');
    })
})