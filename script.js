//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function renderImages(arr){
	//
	Promise.all(arr)
	.then((data)=>{
	console.log(data);
	data.forEach(element => {
		let img=document.createElement("img");
		img.src=element.url;
		output.appendChild(img);
	});
})
}

btn.addEventListener("click",()=>{
	return renderImages(images);
});


