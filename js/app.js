const containerApp = document.querySelector('.app')
const bYes = document.querySelector('#bYes')
const bNo = document.querySelector('#bNo')

bYes.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('../img/gifBackground.gif')"
    containerApp.innerHTML = `
        <div class="yRes">
            <h1>💖Eso pensé💖</h1>
            <div class="images">
                <img width="300px" src="./img/corazones.webp" alt="Amor">
                <img width="200px" src="./img/osito.webp" alt="Amor">
                <img width="300px" src="./img/amor.webp" alt="Amor">
            </div>
        </div>
        <button id="regre">Regresar</button>
    `
    document.querySelector('#regre').addEventListener('click', () => location.reload())
})

bNo.addEventListener('mouseover', () => {
    const posY = Math.random() * 100
    const posX = Math.random() * 100

    bNo.style.position = 'absolute'
    bNo.style.top = `${posY}%`
    bNo.style.left = `${posX}%`
})
