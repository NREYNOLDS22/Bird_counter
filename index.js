import { birdData } from './data.js'

function getBirdHtml(){
    let  birdHtml = ""
    birdData.forEach(function(bird){
        birdHtml += `
                <div>
                    <img src= ${bird.image} class="">
                </div>
                <div>
                    <h3 class="species-text">${bird.species}</h3>
                    <p class="size-shape">Size and Shape: ${bird.sizeShape}</p>
                    <p class="color-pattern">Color and Pattern: ${bird.colorPattern}</p>
                </div>
                <div>
                    <button>+</button>
                    <p>0</p>
                    <button>-</button>
                </div>
        `
    })
    return birdHtml
}

function render(){
    document.getElementById("bird-html").innerHTML = getBirdHtml()
}

render()



// let numElBrown = document.getElementById("num-el-brown")
// let numElOrange = document.getElementById("num-el-orange")
// let numElDove = document.getElementById("num-el-dove")

// let brownBtn = document.getElementById("brown-btn")
// let orangeBtn = document.getElementById("orange-btn")
// let doveBtn = document.getElementById("dove-btn")
// let resetBtn = document.getElementById("reset-btn")

// let totalNum = document.getElementById("total-num")
// let totalBtn = document.getElementById("total-btn")

// let brownCount = 0
// let orangeCount = 0
// let doveCount = 0


// brownBtn.addEventListener("click", function() {
//     brownCount+= 1
//     numElBrown.textContent = brownCount
// })

// orangeBtn.addEventListener("click", function() {
//     orangeCount+= 1
//     numElOrange.textContent = orangeCount
// })

// doveBtn.addEventListener("click", function() {
//     doveCount+= 1
//     numElDove.textContent = doveCount
// })

// totalBtn.addEventListener("click", function() {
//     if (brownCount === 0 && orangeCount === 0) {
//         totalNum.textContent = `Today you spotted ${numElDove.textContent} Mourning doves!`
//     }   else if (orangeCount === 0 && doveCount === 0) {
//         totalNum.textContent = `Today you spotted ${numElBrown.textContent} House Sparrows!`
//     }   else if (brownCount === 0 && doveCount === 0) {
//         totalNum.textContent = `Today you spotted ${numElOrange.textContent} House Finches!`
//     }   else if (brownCount === 0) {
//         totalNum.textContent = `Today you spotted ${numElOrange.textContent} House Finches and ${numElDove.textContent} Mourning doves!`
//     }   else if (orangeCount === 0) {
//         totalNum.textContent = `Today you spotted ${numElBrown.textContent} House Sparrows and ${numElDove.textContent} Mourning doves!`
//     }   else if (doveCount === 0) {
//         totalNum.textContent = `Today you spotted ${numElBrown.textContent} House Sparrows and ${numElOrange.textContent} Orange Finches!`
//     }   else {
//         totalNum.textContent = `Today you spotted ${numElBrown.textContent} House Sparrows, ${numElOrange.textContent} House Finches, and ${numElDove.textContent} Mourning doves!`
//     }
// })

// resetBtn.addEventListener("click", function() {
//     brownCount = 0
//     orangeCount = 0
//     doveCount = 0
//     numElBrown.textContent = 0
//     numElOrange.textContent = 0
//     numElDove.textContent = 0
//     totalNum.textContent = ""
    
// })

// Think of making birds dynamic. Storing in variables birdOne, birdTwo, birdThree and passing in bird species as Arguments. In case present birds change

// Figure out copy button

// Create an array that suggest other animals to spot

//Add warning modal when resetting numbers