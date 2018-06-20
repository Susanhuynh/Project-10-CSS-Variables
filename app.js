var spacing, blur, color;

spacing = document.getElementById("spacing");
blur = document.getElementById("blur");
color = document.getElementById("base");


function updateSpacing(event){
    var att, spacingValue, img;
    att = event.target.getAttribute("data-sizing");
    spacingValue = spacing.value;
    img = document.querySelector("img");
    img.style.padding = spacingValue + att;
    
}

function updateBlur(event){
    var att, blurValue, img;
    att = event.target.getAttribute("data-sizing");
    blurValue = blur.value;
    img = document.querySelector("img");
    img.style.filter =  "blur(" + blurValue + att +")";
}

function updateColor(event){
    var att, colorValue, img;
    att = event.target.getAttribute("data-sizing");
    colorValue = color.value;
    img = document.querySelector("img");
    img.style.backgroundColor =  colorValue;
}


spacing.addEventListener("mousemove", updateSpacing);
blur.addEventListener("mousemove", updateBlur);
color.addEventListener("change", updateColor);