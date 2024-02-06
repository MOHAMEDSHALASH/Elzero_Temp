// HIDE AND SHOW OTHER LINKS
document.querySelector('#other').addEventListener("click",()=>{
    document.querySelector('.other-links').classList.toggle("other-links-show")
})
document.querySelector('#main').addEventListener("click",()=>{
    document.querySelector('.other-links').classList.remove("other-links-show")
})
// HIDE AND SHOW BAR
document.querySelector('.bar').addEventListener("click",()=>{
    document.querySelector('.bar-menu').classList.toggle('bar-menu-show');
    document.querySelector('.close1').classList.toggle('close-show')
    document.querySelector('.bar').style.display="none"
})
document.querySelector('.close1').addEventListener("click",()=>{
    document.querySelector('.bar-menu').classList.toggle('bar-menu-show');
    document.querySelector('.close1').classList.toggle('close-show')
    document.querySelector('.bar').style.display=""
})
// ARROW UP
document.getElementById('up');
let mo=document.querySelectorAll('.articles-boxes section');
let mo2=document.querySelectorAll('.features-boxes section');
document.getElementById('head');
document.getElementById('gallery');
let skills=document.getElementById('skills')
let progress =document.querySelectorAll('.progress-row .line')
// --------------------
window.onscroll=function(){
    if(window.scrollY >= head.offsetTop + 170){
        up.style.display="block"
        mo.forEach(element => {
            element.style.animation="articles 2s linear 1 forwards "
        });
    }
    else{
        up.style.display="none"
        mo.forEach(element => {
            element.style.animation=""
        });
    }
// WHEN SCROLLLLLLLLLLLLLLLLLLLLL
    if(window.scrollY >= features.offsetTop - 700){
        mo2.forEach(element => {
            element.style.animation=" features 1s linear 1 forwards "
        });
    }
    else{
        mo2.forEach(element => {
            element.style.animation=""
        });
    }
    if(window.scrollY >= skills.offsetTop - 500){
        progress.forEach(element => {
            element.style.width= element.dataset.width;
        });
    }
    else{
        progress.forEach(element => {
            element.style.width= "0%";
        });
    }
}
// CLOCK IN EVENT PAGE
let day = document.getElementById('days');
let hour = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let date = document.getElementById('date');
const clock=setInterval(()=>{
let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
let d=new Date().getDay();
// HOUR
    if(h > 12 ){
        h=h-12;
    }
    hour.innerHTML=h;
    if(h <10 ){
        hour.innerHTML=`0${h}`;
    }
// MINUTES
    min.innerHTML=m;
    if(m < 10){
        min.innerHTML=`0${m}`;
    }
// SECONDS
    sec.innerHTML=s;
    if(s < 10){
        sec.innerHTML=`0${s}`;
    }
// DAY
    day.innerHTML=d;
    if(d<10){
        day.innerHTML=`0${d}`;
    }
})
