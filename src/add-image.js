import test from "./test.PNG"

function addImage() {
    console.log("hello mf");
    const img = document.createElement("img");
    img.alt = "test" ;
    img.width = 300 ;
    console.log(test);
    img.src = test;
    const body = document.querySelector("body");
    body.appendChild(img);
}
export default addImage;
