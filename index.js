let imgBox = document.querySelector(".img-box")

let btnOne = document.querySelector(".one")

let btntwo = document.querySelector(".two")

let btnthree = document.querySelector(".three")

let btnfour = document.querySelector(".four")

btnOne.addEventListener('click', function() {
    imgBox.style.marginLeft = '0px'
})

btntwo.addEventListener('click', function() {
    imgBox.style.marginLeft = '-600px'
})

btnthree.addEventListener('click', function() {
    imgBox.style.marginLeft = '-1200px'
})

btnfour.addEventListener('click', function() {
    imgBox.style.marginLeft = '-1800px'
})