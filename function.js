// khoi tao cac thong so
let btn1 = document.querySelector('#btn1');
let img = document.querySelector('#img');
let btn2 = document.querySelector('#btn2');

// functions nut bam
btn1.addEventListener('click', ()=>{
    img.src = 'denon1.gif'; 
    firebase.database().ref("thietbi").set({den: 1})
})

btn2.addEventListener('click', ()=>{
    img.src = 'den1.png';
    firebase.database().ref("thietbi").set({den: 0})
})

// khoi tao cac thong so
let btn3 = document.querySelector('#btn3');
let img1 = document.querySelector('#img1');
let btn4 = document.querySelector('#btn4');

// functions nut bam
btn3.addEventListener('click', ()=>{
    img1.src = 'fan_rinning.gif'; 
    firebase.database().ref("thietbi").set({quat: 1})
})

btn4.addEventListener('click', ()=>{
    img1.src = 'fan_off.png';
    firebase.database().ref("thietbi").set({quat: 0})
})

let btn5 = document.querySelector('#btn5');
let img2 = document.querySelector('#img2');
let btn6 = document.querySelector('#btn6');

// functions nut bam
btn5.addEventListener('click', ()=>{
    img2.src = 'callon.gif'; 
    firebase.database().ref("thietbi").set({call: 1})
})

btn6.addEventListener('click', ()=>{
    img2.src = 'call1.png';
    firebase.database().ref("thietbi").set({call: 0})
})


