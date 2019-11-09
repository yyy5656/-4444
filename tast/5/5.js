var arr = new Array()
var input = document.getElementById("number");
var box1 = document.getElementById("box1"); //大盒子
var but1 = document.getElementById("button1");
var but7 = document.getElementById("button7");
var but6 = document.getElementById("button6");
var but2 = document.getElementById("button2");
var but3 = document.getElementById("button3");
var but4 = document.getElementById("button4");
var but5 = document.getElementById("button5");

// function inp() {
// arr=[];
// arr.length = 0;
// arr.splice(0,arr.length);
// for(var i=0;i<arr.length;i++){
//     var box1 = document.createElement("div");//bix1的子元素
//     var num=input.value
//     box1.id="box1";
//     box1.style.height=num+"%";
//     box1.innerHTML=num;
//     bg.appendChild(box1);
// }
// arr.splice(0,arr.length);
// }
but1.onclick = function () {
    arr.unshift(input.value)
    for (var i = 0; i < arr.length; i++) {
        var box = document.createElement("div"); //bg的子元素
        var num = input.value
        box.id = "box";
        box.style.height = num + "%";
        box.innerHTML = num;
        box1.appendChild(box);
    }
    arr.splice(0, arr.length);
        alert("学姐我真的不会")
}


but2.onclick = function () {
    arr.push(input.value)
    for (var i = 0; i < arr.length; i++) {
        var box = document.createElement("div"); //bg的子元素
        var num = input.value
        box.id = "box";
        box.style.height = num + "%";
        box.style.flexDirection = "row-reverse";
        box.style.marginright = 2 + "px";
        box.innerHTML = num;
        box1.appendChild(box);
    }
    arr.splice(0, arr.length);
}
but3.onclick = function () {
    arr.shift()
    
}
// but4.onclick=function () {
//     arr.pop()
//     inp()
// }
but7.onclick=function(){
    arr.push(Math.floor(Math.random()*91+10))
        for (var i = 0; i < 20; i++) {
        var box = document.createElement("div"); //bg的子元素
        var num = input.value
        box.id = "box";
        box.style.height = num + "%";
        box.innerHTML = num;
        box1.appendChild(box);
    }
    arr.splice(0, arr.length);
}

but6.onclick=function(){
    arr=[];
}
but5.onclick = function () {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                var temp = arr[j];

                arr[j] = arr[j + 1];

                arr[j + 1] = temp;
            }
        }
    }

}
