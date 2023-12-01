const color = [
  "purple",
  "skyblue",
  "yellow"
];

addEventListener("load", (event) =>{
  changeColor();
})



addEventListener("resize", (event) => {
  changeColor();
})

function changeColor(){
  let width = window.innerWidth;
  if(width > 800){
    document.body.style.backgroundColor = color[0];
  }
  else if(width<=800 && width>400){
    document.body.style.backgroundColor = color[1];
  }
  else{
    document.body.style.backgroundColor = color[2];
  }
}