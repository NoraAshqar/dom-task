//Task 1: DOM Archaeologist
//1.
const body = document.body;
console.log(body.lastElementChild.tagName);
console.log(body.children.length);
const nodesWithText = body.childNodes.length;
const onlyElements= body.children.length;
console.log(nodesWithText-onlyElements);
// childNodes contains all nodes (text+elements) but children contains only elements

//2.
const firstNode =body.childNodes[0];
console.log(firstNode.nodeType)
console.log(firstNode.nodeName)
const paragraph1 = body.lastElementChild.firstElementChild.firstElementChild;
const paragraph2 =paragraph1.nextElementSibling;
console.log(paragraph1.parentElement===paragraph2.parentElement)// yes they have the same parent then they are siblings

//Twist
body.childNodes.forEach(function(childN){
    if(childN.nodeType===3 &&childN.textContent.trim()!="")
    {
        console.log(childN)
    }
})
// the text node exist because of the newline '\n'  in the HTML code 

//Task 2: Synthetic DOM Injection
const div =document.createElement('div');
div.classList.add('card');
div.dataset.role='admin'

const h2 =document.createElement('h2');
h2.textContent='Access Panel';

const p =document.createElement('p');
p.textContent='Authenticated';

div.append(h2);
div.append(p);
document.body.append(div);

console.log(div.dataset.role)
p.textContent='Welcome back, Admin';
div.classList.add('authenticated')
div.classList.add('highlight')

//challenge
if(div.classList.contains('card'))
{
    div.classList.remove('card')
}
