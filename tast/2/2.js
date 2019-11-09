var button = document.getElementById("button");
function dom() {
    var link = document.getElementById('href');
    link.setAttribute('href', '21.css');
    console.log("我的透明度从0.8变成0.5了");
}
button.onclick = dom;