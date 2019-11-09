
button1.onclick=function () {
    var content=document.getElementById("input");//获取文字框
    var value=content.value;//获取输入的内容
    var p = document.createElement("p");
    value="<p1>"+value+"</p1>";
    p.innerHTML=value;
    show.appendChild(p);
}
button2.onclick=function () {
    //var button2=document.getElementById("button2");
    var p= document.getElementsByTagName("p")[0];
    var show=document.getElementById("show")
    show.removeChild(p);
}



button3.onclick=function(){
    var content=document.getElementById("input");
    var newnode=document.createElement("p");
    //for(var i;i>0;i--);{
    var a= document.getElementsByTagName("p")[0];
    var value=content.value;
    value="<p1>"+value+"</p1>";
    newnode.innerHTML=value;
    show.replaceChild(newnode,a);
    //}

}