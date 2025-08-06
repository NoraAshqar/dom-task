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
const firstNode =body.firstChild;
console.log(firstNode.nodeType)
console.log(firstNode.nodeName)
const paragrah1 = body.lastElementChild.firstElementChild.firstElementChild;
const paragrah2 =paragrah1.nextElementSibling;
console.log(paragrah1.parentElement===paragrah2.parentElement)// yes they have the same parent then they are siblings

//Twist
console.log(body.firstChild)
const header =body.firstElementChild;
console.log(header.nextSibling)
const main =header.nextElementSibling;
const section =main.firstElementChild;
console.log(section.nextSibling)
// the text node exist because of the newline '\n'  in the HTML code 

//Task 2: Synthetic DOM Injection
const div =document.createElement('div');
div.classList.add('card');
div.dataset.role='admin'

const h2 =document.createElement('h2');
h2.textContent='Access Panel';

const p =document.createElement('p');
p.textContent='Authenticated';

div.appendChild(h2);
div.appendChild(p);
body.appendChild(div);

console.log(div.dataset.role)
p.textContent='Welcome back, Admin';
div.classList.add('authenticated')
div.classList.add('highlight')

//challenge
if(div.classList.contains('card'))
{
    div.classList.remove('card')
}
