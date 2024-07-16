let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let ampm = document.querySelector(".ampm");
function updatetime(){
    let hours=new Date().getHours();
    let minutes=new Date().getMinutes();
    let seconds=new Date().getSeconds();


    if(hours<=12){

        
        ampm.textContent="AM";
    }
    else{
        hours = hours % 12 || 12;
        
        ampm.textContent="PM";
    
    }
    hour.textContent = hours<10?"0"+hours:hours;
    minute.textContent = minutes<10?"0"+minutes:minutes;
    second.textContent = seconds<10?"0"+seconds:seconds;
}


setInterval(updatetime,1000)
updatetime();


let dark = document.querySelector(".dark");
let light = document.querySelector(".light");
dark.addEventListener("click",()=>{
    document.documentElement.style.setProperty('--bgcolor', 'black');
    document.documentElement.style.setProperty('--textcolor', 'white');
    document.documentElement.style.setProperty('--addcolor', 'gray');
    dark.style.display ="none"
    light.style.display ="block"
})
light.addEventListener("click",()=>{
    document.documentElement.style.setProperty('--bgcolor', 'white');
    document.documentElement.style.setProperty('--textcolor', 'black');
    document.documentElement.style.setProperty('--addcolor', 'gray');
    dark.style.display ="block"
    light.style.display ="none"
})