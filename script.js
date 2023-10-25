const button = document.querySelector('button')

button.addEventListener('mousedown', function(){
    button.classList.add('clicked')
})

button.addEventListener('mouseup', function(){
    button.classList.add('unclicked')
})