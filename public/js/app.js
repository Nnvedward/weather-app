const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const helpForm = document.querySelector('#helpForm')
const helpMessage = document.querySelector('#helpMessage')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + address ).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})

helpForm.addEventListener('submit', (e) => {
    e.preventDefault()

    helpMessage.textContent = 'Thank You, We got your message!'
})