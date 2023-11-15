var diceArea = document.getElementById(`diceArea`);

var button = document.querySelector(`button`)

var sprites = ['DicePack/1.png', 'DicePack/2.png', 'DicePack/3.png', 'DicePack/4.png', 'DicePack/5.png', 'DicePack/6.png']

button.addEventListener(`click`, () => {
    diceArea.style.border = `none`
    var index = 0
    var result = Math.round(Math.random()*5)
    var time = 100
    var Intervaltype = setInterval(() => {

        diceArea.style.backgroundImage = `url(${sprites[index]})`
        if(index < sprites.length - 1){
            index++;
        }
        else{
            index = 0;
        }
    }, time)


    setTimeout(()=> {
        clearInterval(Intervaltype)
        diceArea.style.backgroundImage = `url(${sprites[result]})`
        diceArea.style.border = `1px solid blue`
    }, 1000)
})