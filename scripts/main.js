const myImg = document.querySelector("img");
const myHeading2 = document.querySelector("h2");
const myButton = document.querySelector("button");

myButton.onclick = () => {
    setUserName();
}

myImg.onclick = () => {
    const mySrc = myImg.getAttribute("src");
    if (mySrc === "images/girl1.jpeg"){
        myImg.setAttribute("src", "images/girl.jpg");
    } else {
        myImg.setAttribute("src", "images/girl1.jpeg");
    }
};

function setUserName() {
    const userName = prompt("名前を入力してください。");
    localStorage.setItem("name", userName);
    myHeading2.textContent = `こんにちは、${userName}さん。ようこそ。`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading2.textContent = `こんにちは、${storedName}さん。またきたね。`;
}