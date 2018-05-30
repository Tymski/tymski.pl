liczbaKropek = 0;
setInterval(()=>{
    kropki.innerHTML = ".".repeat(liczbaKropek++ % 4);
},333)