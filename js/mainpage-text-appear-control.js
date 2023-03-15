let box = document.querySelector("#main-box");
box.addEventListener("scroll", function (e) {
    let scrollTop = e.target.scrollTop;
    console.log(scrollTop);
});