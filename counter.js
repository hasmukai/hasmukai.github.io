let count = 0
const countUp = () => {
    count++
    const countElement = document.querySelector('#count')
    countElement.innerText = "回数: "+count
}
const hello = () => {
    const greetingElement = document.querySelector('#greeting')
    const inputElement = document.querySelector('#name')
    greetingElement.innerText = "Hello, "+inputElement.value+"!"

}
