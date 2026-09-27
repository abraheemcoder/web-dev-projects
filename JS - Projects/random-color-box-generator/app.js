let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");

const randomcolor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}
randomcolor();

const changeColorHandler = () => {
    box1.style.color = randomcolor();
    box1.style.background = randomcolor();
    box2.style.color = randomcolor();
    box2.style.background = randomcolor();
    box3.style.color = randomcolor();
    box3.style.background = randomcolor();
    box4.style.color = randomcolor();
    box4.style.background = randomcolor();
    box5.style.color = randomcolor();
    box5.style.background = randomcolor();
}
changeColorHandler();