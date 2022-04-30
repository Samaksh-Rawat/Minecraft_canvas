var canvas=new fabric.Canvas("myCanvas");
block_imagewidth=30;
block_imageheight=30;
player_x=10;
player_y=10;
var player_object="";
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
   });

}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
block_imageobject=Img;
block_imageobject.scaleToWidth(block_imagewidth);
block_imageobject.scaleToHeight(block_imageheight);
block_imageobject.set({
    top:player_y,
    left:player_x
});
canvas.add(block_imageobject);
   });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80')
    {
        console.log("p & shift");
        block_imagewidth=block_imagewidth+10;
        block_imageheight=block_imageheight+10;
        document.getElementById("current_width").innerHTML=block_imagewidth;
        document.getElementById("current_height").innerHTML=block_imageheight;
        
    }
    if(e.shiftKey==true && keypressed=='77')
    {
        console.log("m & shift");
        block_imagewidth=block_imagewidth-10;
        block_imageheight=block_imageheight-10;
        document.getElementById("current_width").innerHTML=block_imagewidth;
        document.getElementById("current_height").innerHTML=block_imageheight;
        
    }
    if(keypressed=='38')
    {
        Up();
        console.log("Up");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
    if(keypressed=='37')
    {
        left();
        console.log("left");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
    if(keypressed=='87')
    {
        new_image('wall.jpg');
        console.log("w");
    }
    if(keypressed=='71')
    {
        new_image('ground.png');
        console.log("g");
    }
    if(keypressed=='76')
    {
        new_image('light_green.png');
        console.log("l");
    }
    if(keypressed=='84')
    {
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keypressed=='82')
    {
        new_image('roof.jpg');
        console.log("r");
    }
    if(keypressed=='89')
    {
        new_image('yellow_wall.png');
        console.log("y");
    }
    if(keypressed=='68')
    {
        new_image('dark_green.png');
        console.log("d");
    }
    if(keypressed=='85')
    {
        new_image('unique.png');
        console.log("u");
    }
    if(keypressed=='67')
    {
        new_image('cloud.jpg');
        console.log("c");
    }

}

function Up()
{
    if(player_y>=0)
    {
        player_y=player_y-block_imageheight;
        console.log("block image height=" +block_imageheight);
        console.log("when up arrow key is pressed, x=" +player_x +" and y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(player_y<=500)
    {
        player_y=player_y+block_imageheight;
        console.log("block image height=" +block_imageheight);
        console.log("when down arrow key is pressed, x=" +player_x +" and y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if(player_x>=0)
    {
        player_x=player_x-block_imagewidth;
        console.log("block image width=" +block_imagewidth);
        console.log("when left arrow key is pressed, x=" +player_x +" and y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_x<=850)
    {
        player_x=player_x+block_imagewidth;
        console.log("block image width=" +block_imagewidth);
        console.log("when right arrow key is pressed, x=" +player_x +" and y="+player_y);
        canvas.remove(player_object);
        player_update();
    }

}