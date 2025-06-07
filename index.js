

const btn=document.querySelector("button");
const container=document.querySelector(".container");
erase=()=>{
    if(num <= 100 && num > 0){
    container.innerHtml="";
   
    };
}
clicking=()=>{
  const v= window.prompt("How many grid squares per side: ");
const num = Number(v);

if(num <= 100 && num > 0){
    container.innerHtml="";
    const containerWidth = container.clientWidth;
    const squareSize = containerWidth / num;
    

for(let i=0; i<num*num; i++){

   const div=document.createElement('div');
   div.classList.add('square');

       div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;

   container.appendChild(div);

    };
}

else{
    alert("Please enter a number between 1 and 100.");
}
};



