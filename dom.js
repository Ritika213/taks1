//console.dir(document)
//console.log(document.domin)
//console.log(document.URL)
//console.log(document.title)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all)
//console.log(document.links)
//console.log(document.forms)
//console.log(document.images)


//getElementbyid

var headerTitle= document.getElementById("header-title");
//headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>ITEM LIST</h3>';
headerTitle.style.borderBottom='solid 3px #000';
var addItem=document.getElementsByClassName('title')[0];
addItem.style.color='green';
addItem.style.fontWeight='bold';
