import { birdData } from './data.js'

document.addEventListener('click', function(e){
    if(e.target.dataset.plus){
        handlePlusClick(e.target.dataset.plus)
    } else if (e.target.dataset.minus){
        handleMinusClick(e.target.dataset.minus)
    } else if (e.target.dataset.moreInfo){
        handleMoreInfoClick(e.target.dataset.moreInfo)
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
    targetBirdObj.count--
    render()
}

function handleMoreInfoClick(infoId){
    // const targetBirdObj = birdData.filter(function(bird){
    //     return bird.uuid === birdId
    // }) [0]
    document.getElementById(`info-text-${infoId}`).classList.toggle('collapsed')
    // console.log('test')
}

function getBirdHtml(){
    let  birdHtml = ""
    birdData.forEach(function(bird){
        birdHtml += `
                <div class="main-panel">
                    <div>
                        <img src= ${bird.image} class="bird-pic">
                    </div>
                    <div>
                        <h3 class="species-text">${bird.species}</h3>
                        <button data-moreInfo="${bird.uuid}">More Info</button>
                    </div>
                    <div>
                        <button data-plus="${bird.uuid}">+</button>
                        <p id="sightings-num" >${bird.count}</p>
                        <button data-minus="${bird.uuid}">-</button>
                    </div>
                </div>
                <div id="info-text-${bird.uuid}" class="collapsed" >
                    <p class="size-shape">Size and Shape: ${bird.sizeShape}</p>
                    <p class="color-pattern">Color and Pattern: ${bird.colorPattern}</p>
                </div>
        `
    })
    return birdHtml
}

function render(){
    document.getElementById("bird-html").innerHTML = getBirdHtml()
}

render()
