let images = document.querySelectorAll(".preview");
for(let i=0; i<images.length; i++)
{
    images[i].tabIndex += 1;
}

function upDate(previewPic) {

    document.getElementById("image").style.backgroundImage = 'url('+ previewPic.src +')';
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "none";
    document.getElementById("image").innerHTML = 'Hover over an image below to display here.';
}