const sel=document.getElementById('storySelect');
const left=document.getElementById('leftPage');
const right=document.getElementById('rightPage');
const info=document.getElementById('pageInfo');
const prevBtn=document.getElementById('prevBtn');
const nextBtn=document.getElementById('nextBtn');

Object.keys(STORIES).forEach(k=>{
 let o=document.createElement('option');
 o.value=k;o.textContent=k;sel.appendChild(o);
});

let pages=[];
let spread=0;

function paginate(text){
 const size=1800;
 let p=[];
 for(let i=0;i<text.length;i+=size) p.push(text.slice(i,i+size));
 return p;
}

function loadStory(){
 pages=paginate(STORIES[sel.value]);
 spread=0;
 render();
}

function render(){
 left.textContent=pages[spread*2]||"";
 right.textContent=pages[spread*2+1]||"";
 info.textContent=`${sel.value} — Spread ${spread+1} / ${Math.ceil(pages.length/2)}`;
}

prevBtn.onclick=()=>{if(spread>0){spread--;render();}};
nextBtn.onclick=()=>{if((spread+1)*2<pages.length){spread++;render();}};

sel.onchange=loadStory;
loadStory();