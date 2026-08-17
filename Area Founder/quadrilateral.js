function GotoPage (page) {
    document.body.classList.add("fade-out")

    setTimeout(() => {
        window.location.href = page
    }, 500);
}

document.getElementById("homepage").addEventListener("click", () => {
    GotoPage("index.html")
})


let buttons = document.querySelectorAll(".button")

buttons.forEach((box)=>{
    box.addEventListener("click", () => {

        buttons.forEach((otherbuttons) => {
            if(otherbuttons !== box){
                otherbuttons.remove()
            }
        })
    })
})



// function Area (classoftheelement) {
    //     document.querySelector(classoftheelement).addEventListener
    // }
    
let para = document.getElementById("parallelogram")

para.addEventListener("click", () => {
    let base = Number(prompt("Enter the length of base of the parallelogram :"))
    let height = Number(prompt("Enter the lenght of height of your parallelogram :"))


    if(isNaN(base) || isNaN(height)){
        alert("Please enter a valid number")
    }


    else{
        let result = (base * height)
        document.getElementById("area").innerHTML = `The area of the selected figure is : ${result}`
    }
})



let rhom = document.getElementById("rhombus")

rhom.addEventListener("click", () => {
    let diagonal1 = Number(prompt("Enter the length of first diagonal of the rhombus :"))
    let diagonal2 = Number(prompt("Enter the lenght of second diagonal of your rhombus :"))


    if(isNaN(diagonal1) || isNaN(diagonal2)){
        alert("Please enter a valid number")
    }


    else{
        let result = (diagonal1 * diagonal2 * 0.5)
        document.getElementById("area").innerHTML = `The area of the selected figure is : ${result}`
    }
})


let rectangle = document.getElementById("rectangle")

rectangle.addEventListener("click", () => {
    let lenght = Number(prompt("Enter the length of lenght of the rectangle :"))
    let breadth = Number(prompt("Enter the lenght of breadth of your rectangle :"))


    if(isNaN(lenght) || isNaN(breadth)){
        alert("Please enter a valid number")
    }


    else{
        let result = (lenght * breadth)
        document.getElementById("area").innerHTML = `The area of the selected figure is : ${result}`
    }
})

let square = document.getElementById("square")

square.addEventListener("click", () => {
    let side = Number(prompt("Enter the length of side of the square :"))

    if(isNaN(side)){
        alert("Please enter a valid number")
    }


    else{
        let result = (side**2)
        document.getElementById("area").innerHTML = `The area of the selected figure is : ${result}`
    }
})


let trapezium = document.getElementById("trapezium")

trapezium.addEventListener("click", () => {
    let side1 = Number(prompt("Enter the length of first side of the trapezium :"))
    let side2 = Number(prompt("Enter the length of second side of the trapezium :"))
    let Pdistance = Number(prompt("Enter the length of perpendicular distance between them of the trapezium :"))

    if(isNaN(side1) || isNaN(side2) || isNaN(Pdistance)){
        alert("Please enter a valid number")
    }


    else{
        let sumOfPsides = (side1 + side2)
        let result = (0.5 * sumOfPsides * Pdistance)
        document.getElementById("area").innerHTML = `The area of the selected figure is : ${result}`
    }
})