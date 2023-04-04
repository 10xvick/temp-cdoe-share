


console.log('xxxxx', GIFReader );
// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app'); 

const canvas:HTMLCanvasElement = document.getElementById('can');
const ctx:CanvasRenderingContext2D = canvas.getContext('2d');

const img = new Image();
img.src = "http://bestsexgif.com/wp-content/uploads/2015/03/dildo-riding-hot-babe.gif";
img.onload = (e)=>{
  const size = 100;
  ctx.drawImage(img,0,0,size,size);
}


// console.log(ctx);


