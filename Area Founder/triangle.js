function GotoPage(page) {
    document.body.classList.add("fade-out")

    setTimeout(() => {
        window.location.href = page
    }, 500);
}

document.getElementById("homepage").addEventListener("click", () => {
    GotoPage("index.html")
})

let buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        buttons.forEach((otherbutton) => {
            if (button !== otherbutton) {
                otherbutton.remove();
            }
        })
    })
})

// STUDY THESE LINES

function calculateArea(inputs, formula) {
    let values = inputs.map(message => Number(prompt(message)));

    if (values.some(value => isNaN(value))) {
        alert("Please enter valid numbers");
        return;
    }

    let result = formula(...values);

    document.getElementById("area").innerHTML =
        `The area of the selected figure is : ${result}`;
}


document.getElementById("normal").addEventListener("click", () => {
    calculateArea(
        ["Enter base of the triangle :", "Enter height of the triangle :"],
        (base, height) => 0.5 * base * height
    )
})


document.getElementById("isoceles").addEventListener("click", () => {
    calculateArea(
        ["Enter the base of trinagle :", "Enter lenght one of the equal side of triangle :"],
        (base, side) => 0.5 * base * Math.sqrt(side ** 2 - (base ** 2) / 4)
    )
})


document.getElementById("equilateral").addEventListener("click", () => {
    calculateArea(
        ["Enter the side of trinagle :"],
        (side) => ((Math.sqrt(3)) / 2) * side ** 2
    )
})


document.getElementById("herons-formula").addEventListener("click", () => {
    calculateArea(
        [
            "Enter the first side of triangle:",
            "Enter the second side of triangle:",
            "Enter the third side of triangle:"
        ],
        (a, b, c) => {
            let s = (a + b + c) / 2;
            return Math.sqrt(s * (s - a) * (s - b) * (s - c));
        }
    );
});

document.getElementById("co-ordinate").addEventListener("click", () => {
    let x1 = Number(prompt("Enter the x-1 co-ordinate of the triangle :"))
    let y1 = Number(prompt("Enter the y-1 co-ordinate of the triangle :"))
    let x2 = Number(prompt("Enter the x-2 co-ordinate of the triangle :"))
    let y2 = Number(prompt("Enter the y-2 co-ordinate of the triangle :"))
    let x3 = Number(prompt("Enter the x-3 co-ordinate of the triangle :"))
    let y3 = Number(prompt("Enter the y-3 co-ordinate of the triangle :"))

    if (isNaN(x1) || isNaN(x2) || isNaN(x3) || isNaN(y1) || isNaN(y2) || isNaN(y3)) {
        alert("Please enter suitable values")
    }

    else {
        let Aval = Math.abs((x1 * (y2 - y3)) + (x2 * (y3 - y1)) + (x3 * (y1 - y2)))

        let result = 0.5 * Aval

        document.getElementById("area").innerHTML = `The area of the selected figure is : ${result}`
    }
})
