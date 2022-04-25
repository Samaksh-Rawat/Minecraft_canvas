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


