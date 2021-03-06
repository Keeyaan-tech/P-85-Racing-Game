canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 130;
car1_height = 110;

car2_width = 130;
car2_height = 110;

background_image = "raceTrack.jpg";
car1_image = "car1.png";
car2_image = "car2.png";

car1_x = 6;
car1_y = 105;

car2_x = 6; 
car2_y = 350;

function add(){
        background_imgTag = new Image();
        background_imgTag.onload = uploadBackground;
        background_imgTag.src = background_image;
        
        car1_imgTag = new Image();
        car1_imgTag.onload = uploadcar1;
        car1_imgTag.src = car1_image;

        car2_imgTag = new Image();
        car2_imgTag.onload = uploadcar2;
        car2_imgTag.src = car2_image;
}

function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}

function uploadcar1(){
ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
        ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
        }

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '38')
		{
			car1_up();
			console.log("up arrow key");
                }

if(keyPressed == '40')
        {
           car1_down();
	       console.log("down arrow key");
        }

if(keyPressed == '37')
        {
           car1_left();
	       console.log("left arrow key");
        }


if(keyPressed == '39')
        {
           car1_right();
	       console.log("right arrow key");
        }




}




keyPressed = e.keyCode;
console.log(keyPressed);{

if(keyPressed == '81')
        {
           car2_up();
	      console.log("q key");
        }

if(keyPressed == '65')
        {
           car2_down();
	       console.log("a key");
        }

if(keyPressed == '87')
        {
           car2_left();
	       console.log("w key");
        }


if(keyPressed == '83')
        {
           car2_right();
	       console.log("s key");
        }




}


function car1_up() 
{
if(car1_y >=0) 
{
 car1_y = car1_y - 10;
console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
uploadBackground();
uploadcar1();
uploadcar2(); 
}
}

function car1_down() 
{
if(car1_y >=0) 
{
 car1_y = car1_y + 10;
console.log("When down arrow is pressed, x = " + car1_x + " | y = " + car1_y);
uploadBackground();
uploadcar1();
uploadcar2(); 
}
}

function car1_left() 
{
if(car1_y >=0) 
{
 car1_x = car1_x - 10;
console.log("When left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
uploadBackground();
uploadcar1();
uploadcar2(); 
}
}

function car1_right() 
{
if(car1_y >=0) 
{
 car1_x = car1_x + 10;
console.log("When right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
uploadBackground();
uploadcar1();
uploadcar2(); 
}
}

function car2_right() 
{
if(car1_y >=0) 
{
 car1_x = car1_x + 10;
console.log("When s key is pressed, x = " + car1_x + " | y = " + car1_y);
uploadBackground();
uploadcar1();
uploadcar2(); 
}
}

function car2_left() 
{
if(car1_y >=0) 
{
 car1_x = car1_x - 10;
console.log("When w key is pressed, x = " + car1_x + " | y = " + car1_y);
uploadBackground();
uploadcar1();
uploadcar2(); 
}
}

function car2_down() 
{
if(car1_y >=0) 
{
 car1_y = car1_y + 10;
console.log("When a key is pressed, x = " + car1_x + " | y = " + car1_y);
uploadBackground();
uploadcar1();
uploadcar2(); 
}
}

function car2_up() 
{
if(car1_y >=0) 
{
 car1_x = car1_x - 10;
console.log("When q key is pressed, x = " + car1_x + " | y = " + car1_y);
uploadBackground();
uploadcar1();
uploadcar2(); 
}
}