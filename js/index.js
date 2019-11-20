let minHand = document.getElementById('min');
let hourHand = document.getElementById('hour');
setInterval(()=>{
let currMin = new Date().getMinutes(); let currMinRotation = currMin*6+180;
minHand.style["transform"]=`rotate(${currMinRotation}deg)`; 
},60)
setInterval(()=>{
let currHour = new Date().getHours() % 12 || 12;
let currHourRotation = currHour*30+180;
hourHand.style["transform"]=`rotate(${currHourRotation}deg)`;  
},3600)