function GotoPage (page) {
    document.body.classList.add("fade-out")

    setTimeout(() => {
        window.location.href = page
    }, 500);
}

document.getElementById("homepage").addEventListener("click", ()=>{
    GotoPage("index.html")
})

document.getElementById("continue").addEventListener("click", () => {
    let r = Number(prompt("Enter the radius of the circle :"))

    if(isNaN(r)){
        alert("Please enter only rational numbers 👀")
    }

    else{
        let area = Math.ceil(Math.PI * r ** 2)
        document.getElementById("area").innerHTML = `Your area approximately is : ${area} square units`
    }

})