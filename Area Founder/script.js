function GoTopage (page) {
    document.body.classList.add("fade-out")

    setTimeout(() => {
        window.location.href = page;
    }, 500);
}

document.getElementById("circle").addEventListener("click", ()=>{
    GoTopage("circle.html")
})

document.getElementById("quadrilateral").addEventListener("click", ()=>{
    GoTopage("quadrilateral.html")
});

document.getElementById("triangle").addEventListener("click", () => {
    GoTopage("triangle.html")
})

window.addEventListener("pageshow", () => {
    document.body.classList.remove("fade-out")
})
// console.log(document.getElementById("quadrilateral"))