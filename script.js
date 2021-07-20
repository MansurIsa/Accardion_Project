const icon1 = document.querySelectorAll(".accordion .container .content .accor i.fa-chevron-down");
const icon2 = document.querySelectorAll(".accordion .container .content .accor i.fa-chevron-up");
const contentBox = document.querySelectorAll(".accordion .container .content .content_box")

for (let i = 0; i < icon1.length; i++) {
    icon1[i].addEventListener("click", function () {
        this.style.display = "none";
        icon2[i].style.display = "block";
        contentBox[i].style.display="block";
    })
}

for (let i = 0; i < icon2.length; i++) {
    icon2[i].addEventListener("click", function () {
        this.style.display = "none";
        icon1[i].style.display = "block"
        contentBox[i].style.display="none";
    })
}