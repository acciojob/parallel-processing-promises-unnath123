//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];


let promise1= new Promise((resolve,reject)={
	resolve(images[1].url);
})

let promise2= new Promise((resolve,reject)={
	resolve(images[2].url);
})

let promise1= new Promise((resolve,reject)={
	resolve(images[2].url);
})

let promises=[promise1,promise2,promises];

Promise.all(promises)
.then((data)=>{
let img= document.createElement("img");
	img.src="data";
	output.appendChild(img);
	})
.catch((error)=>{
	console.log(error)
})


