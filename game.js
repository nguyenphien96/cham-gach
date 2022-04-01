let canvas = document.getElementById('game');
let cont = canvas.getContext('2d');

let x = 20, y = 20;
let dx = 5, dy = 2;
let radius = 10;

let padd={
    width:70,
    height:10,
    x:0,
    y: canvas.height -10,
    speed:10,
    isleft:false,
    isright:false,
};

 document.addEventListener('keyup',function(event){
    console.log(event);
    if(event.keyCode ==37){
        padd.isleft=false;
    }else if(event.keyCode==39){
        padd.isright=false;
    }
 });

document.addEventListener('keydown',function(event){
    console.log(event);
    if(event.keyCode ==37){
        padd.isleft=true;
    }else if(event.keyCode==39){
        padd.isright=true;
    }
});

function Ball() {
    cont.beginPath();
    cont.arc(x, y, radius, 0, Math.PI * 2);
    cont.fillstyle = 'green';
    cont.fill();
    cont.closePath();
}

function drawpadd(){
    cont.beginPath();
    cont.rect(padd.x,padd.y,padd.width,padd.height);
    cont.fill();
    cont.closePath();
}

function chayball(){
    if (x < radius || x > canvas.width - radius) {
        dx = -dx;
    }
    if (y < radius || y > canvas.height-radius) {
        dy = -dy;
    }
}

function toado(){
    x += dx;
    y += dy;
}

function draw() {
    cont.clearRect(0, 0, canvas.width, canvas.height);
    Ball();
    drawpadd();
    if(padd.isleft){
        padd.x -=padd.speed;
    }else if(padd.isright){
        padd.x+=padd.speed;
    }

    if(padd.x<0){
        padd.x=0;
    } else if(padd.x>canvas.width-padd.width){
        padd.x=canvas.width-padd.width;
    }
    chayball();
    toado();
    
    requestAnimationFrame(draw);
    }
draw();
