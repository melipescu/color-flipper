const color = document.getElementsByTagName('body')[0]

function colorChange(name) {
    color.style.backgroundColor = name;
}

function setRandom() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const colorRandom = `rgb(${red}, ${green}, ${blue})`
    color.style.backgroundColor = colorRandom;
}