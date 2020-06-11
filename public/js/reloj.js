$(document).ready(function(){
    setInterval(()=>{
        var reloj=moment().format("hh:mm:ss");
        document.querySelector('.reloj').innerHTML=reloj;
    },1000);
})