canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="http://backgroundcheckall.com/wp-content/uploads/2017/12/disney-cars-race-track-background-2322.jpg";
rover_image="https://im.rediff.com/money/2013/mar/20car-market1.jpg";
rover_x=10;
rover_y=10
rover2_width=100;
rover2_height=90;
rover2_image="https://i.pinimg.com/originals/46/9c/bc/469cbc09b676daec2d59847a32d6c446.jpg";
rover2_x=10;
rover2_y=100;
function add(){
    background_imgTag = new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
     rover2_imgTag = new Image();
    rover2_imgTag.onload=uploadrover;
    rover2_imgTag.src=rover2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");

    }
    if(keyPressed=='40'){
        down();
        console.log("down");
        
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
        
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
        
    }
}