// Conts


const elements = document.querySelectorAll(".rte__button");
const content = document.querySelector('.rte__content')
const getHTML = document.querySelector(".rte__getHTML");
const output = document.querySelector(".rte__output");

for (let element of elements) {
    let command = element.dataset["style"]

    const clicked = (event) => {
        event.preventDefault()


        if (command === "createLink" || command === "insertImage") {
            let url = prompt('Enter the link here: ', 'http://')
            document.execCommand(command, false, url)
        } else {
            document.execCommand(command, false, null)

            element.classList.toggle("rte__active")
        }


    }

    element.addEventListener("click", clicked)
}

getHTML.addEventListener("click", () => {

    var s = content.innerHTML;
    output.innerHTML = s;

})