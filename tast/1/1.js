var nav=document.getElementsByClassName("nav")[0];
var item=document.getElementsByClassName("item")[0];
// console.log(item)
var newnode=document.createElement("li");//创建一个新的节点在首位
newnode.innerHTML="首页";
nav.insertBefore(newnode,item);
var newnode2=document.createElement("li");//建立个新节点,在最后
nav.appendChild(newnode2);
var liText=document.createTextNode('关于');//创建文本内容
newnode2.appendChild(liText);

var item2=document.getElementsByClassName("item")[2];
// console.log(item2)
var newnode3=document.createElement("li");//创建替换的节点
nav.appendChild(newnode3);
var liText2=document.createTextNode('文章');//创建文本内容
newnode3.appendChild(liText2);
nav.replaceChild(newnode3,item2);//在nav下替换
var item1=document.getElementsByClassName("item")[1];
// console.log(item1)
nav.removeChild(item1);//删除nav下的一个标签
