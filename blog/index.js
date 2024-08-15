const textBlock = document.getElementById("text-block");
const resizeHandle = document.getElementById("resize-handle");

resizeHandle.addEventListener("mousedown", function(e) {
    e.preventDefault();

    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
});

function resize(e) {
    textBlock.style.width = e.clientX - textBlock.offsetLeft + "px";
    textBlock.style.height = e.clientY - textBlock.offsetTop + "px";
}

function stopResize() {
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
}
