document.getElementById("button1").onclick= function(){};
document.getElementById("button2").onclick= function(){};
document.getElementById("button3").onclick= function(){};
document.getElementById("button4").onclick= function(){};
document.getElementById("button5").onclick= function(){};
document.getElementById("button1").onclick= function(){
    document.getElementById("image").src = "img\\1.jpg";
};
document.getElementById("button2").onclick= function(){
    document.getElementById("image").src = "img\\2.jpg";
};
document.getElementById("button3").onclick= function(){
    document.getElementById("image").src = "img\\3.jpg";
};
document.getElementById("button4").onclick= function(){
    document.getElementById("image").src = "img\\4.jpg";
};
document.getElementById("button5").onclick= function(){
    document.getElementById("image").src = "img\\5.jpg";
};
var current=1;
function goback(){
    if(current > 1)// nếu vị trí hiện tại chưa tới cuối
    current = current - 1; //giảm vị trí hiện tại xuống 1
    else
    current = 4;
    // cập nhập ảnh theo vị trí hiện tại mới
    document.getElementById("image").src = "img\\" + current + ".jpg";
}
function gonext(){
    if(current < 5)// nếu vị trí hiện tại tới cuối
    current = current + 1;
    else
    current = 1;
    document.getElementById("image").src = "img\\" + current + ".jpg";
}
document.getElementById("back").onclick = goback;
document.getElementById("next").onclick = gonext;
setInterval(gonext,2000); // gọi gonext sau mỗi 1 giây