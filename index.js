import { birdData } from './data.js'

document.addEventListener('click', function(e){
    if(e.target.dataset.plus){
        handlePlusClick(e.target.dataset.plus)
    } else if (e.target.dataset.minus){
        handleMinusClick(e.target.dataset.minus)
    } else if (e.target.dataset.moreinfo){
        handleMoreInfoClick(e.target.dataset.moreinfo)
    } 
})

function handlePlusClick(birdId){
    const targetBirdObj = birdData.filter(function(bird){
        return bird.uuid === birdId
    }) [0] 
    targetBirdObj.count++
    render()
}

function handleMinusClick(birdId){
    const targetBirdObj = birdData.filter(function(bird){
        return bird.uuid === birdId
    }) [0]
    if(targetBirdObj.count > 0){
        targetBirdObj.count--
    }
    render()
}

function handleMoreInfoClick(infoId){
    document.getElementById(`info-text-${infoId}`).classList.toggle('collapsed')
}


function getBirdHtml(){
    let  birdHtml = ""
    birdData.forEach(function(bird){
        birdHtml += `
                <div class="panel">
                    <div>
                        <img src= ${bird.image} class="bird-pic pointer">
                    </div>
                    <div class="mid-section">
                        <h3 class="species-text">${bird.species}</h3>
                        <button class="info-btn" data-moreinfo="${bird.uuid}">More Info</button>
                    </div>
                    <div class="counter-section">
                        <i class="fa-solid fa-square-plus" data-plus="${bird.uuid}"></i>
                        <p id="sightings-num" class="bird-num">${bird.count}</p>
                        <i class="fa-solid fa-square-minus" data-minus="${bird.uuid}"></i>
                    </div>
                </div>
                <div id="info-text-${bird.uuid}" class="collapsed info-text">
                    <p class="size-shape">Size and Shape: ${bird.sizeShape}</p>
                    <p class="color-pattern">Color and Pattern: ${bird.colorPattern}</p>
                </div>
        `
    })
    return birdHtml
}


function getTotalHtml(){
    let totalHtml = ""
    birdData.forEach(function(bird){
        totalHtml += `
            <div class="total-line">
                <p class="total-species">${bird.species}</p>
                <p class="total-count">${bird.count}</p>
            </div>
        `
    })
    return totalHtml
}


function render(){
    document.getElementById("bird-html").innerHTML = getBirdHtml()
    document.getElementById("total-html").innerHTML = getTotalHtml()
}

render()

const modal = document.getElementById('modal')
const shareBtn = document.getElementById('share-btn')
const submitBtn = document.getElementById('submit-btn')
const closeBtn = document.getElementById('close-btn')

shareBtn.addEventListener('click', function(){
    modal.style.display = "block" 
    
})

closeBtn.addEventListener('click', function(){
    modal.style.display = "none"
})
