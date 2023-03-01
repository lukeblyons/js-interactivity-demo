let plusButton = document.querySelector('#plus-btn')
let minusButton = document.querySelector('#minus-btn')
let resetButton = document.querySelector('#reset-btn')
let counterEl = document.querySelector('#counter')

let buttonList = document.querySelectorAll('.theme-buttons')




plusButton.addEventListener('click', () => {
    let currentNum = +counterEl.textContent
    currentNum++
    counterEl.textContent = currentNum
})

minusButton.addEventListener('click', () => {
    let currentNum = +counterEl.textContent
    currentNum--
    counterEl.textContent = currentNum
})

resetButton.addEventListener('click', () => {
    counterEl.textContent = 0
})

for(let i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener('click', () => {
        let themeString = buttonList[i].textContent
        let body = document.querySelector('body')
        let main = document.querySelector('main')
        let btnList = document.querySelectorAll('button')
        
        body.classList = ''
        main.classList = ''
        btnList.forEach((element, index) => {
            element.classList = ''
            if(index < 4) {
                element.classList.add('theme-buttons')
            }
        })

        body.classList.add(themeString)
        main.classList.add(themeString)
        btnList.forEach((element) => {
            element.classList.add(themeString)
        })
    })
}
