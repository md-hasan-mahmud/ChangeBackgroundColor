

// Globals
div = null;
p = null;

window.onload = function() {
    main();
    hex.value = ''
    rgb.value = ''
}



function main() {
    let cont = document.getElementById('cont')
    let btn = document.getElementById('btn')
    let hex = document.getElementById('hex')
    let copyButton = document.getElementById('copybtn')
    let rgb = document.getElementById('rgb')
    let rgbFlex = document.getElementById('rgb-flex')
    let copyButton2 = document.getElementById('copybtn2')

    // btn click event
    btn.addEventListener('click',function() {
        let color = genarateColorDecimal()
        let hexcolor = changeBackgroundColor(color)
        let rgbcolor = rgbColorGenerator(color)

        cont.style.background = hexcolor
        hex.value = hexcolor.substring(1)
        rgb.value = rgbcolor
    })

// copied button click by copy color
    copyButton.addEventListener('click',function() {
        navigator.clipboard.writeText(`#${hex.value}`)

        copiedBoxAnimation(div)

        copiedBoxAnimation(p)

        if(hexValidCode(hex.value)) {
            copiedColorPopUp(`#${hex.value} copied`)
            copiedText();
        }else {
            alert('Invalide Color Code')
        }

        div.addEventListener('animationend',function() {
            div.remove()
            div = null;
        })   

        p.addEventListener('animationend',function() {
            p.remove()
            p = null;
        })
    })

    hex.addEventListener('keyup',function(e) {
        const color = e.target.value
           if(color) {
            hex.value = color.toUpperCase()
            if(hexValidCode(color)) {
                cont.style.background = `#${color}`
                rgb.value = rgbColor(hex.value)
            }
           }
    })
// rgb field copy button
    copyButton2.addEventListener('click',function() {
        navigator.clipboard.writeText(`rgb(${rgb.value})`)
        copiedBoxAnimation(div)

        copiedBoxAnimation(p)

        if(hexValidCode(hex.value)) {
            rgbCopidPopup(`rgb(${rgb.value}) Copied`)
            rgbCopiedProved();
        }else {
            alert('Invalide Color Code')
        }
       
        div.addEventListener('animationend',function() {
            div.remove()
            div = null;
        })

        p.addEventListener('animationend',function() {
           p.remove()
           p = null;
        })
    })
}


// Random Color Genaretor
function changeBackgroundColor(color) {

    const twoCodeValid = (value) => {
        let hex = value.toString(16)
        return hex.length === 1 ? `0${hex}` : hex
    }

    return  `#${twoCodeValid(color.red)}${twoCodeValid(color.green)}${twoCodeValid(color.blue)}`.toUpperCase()
}

//Rgb color generator
function rgbColorGenerator(color) {

    return `${color.red},${color.green},${color.blue}`
}

function genarateColorDecimal() {
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    return{
        red,
        green,
        blue
    }  
}

// create copied color popup
function copiedColorPopUp(value) {
   
    let cont = document.getElementById('cont')
    div = document.createElement('div')  
    div.innerHTML = value
    div.classList = 'popup slide-in-box'
    cont.appendChild(div)
}

function copiedText() {

    let hexFlex = document.getElementById('hex-flex')
    p = document.createElement('p')
    p.innerHTML= 'Copied'
    p.className = 'copiedanimation show-display-copied'
    hexFlex.appendChild(p)
    p.style.opacity = '1'
    p.style.transition = '1s'
}

// rgb color copied popup
function rgbCopidPopup(value) {
    let cont = document.getElementById('cont')
    div = document.createElement('div')  
    div.innerHTML = value
    div.classList = 'popup slide-in-box'
    cont.appendChild(div)
}

// rgb color copied text edit 
function rgbCopiedProved() {

    let rgbFlex = document.getElementById('rgb-flex')
    p = document.createElement('p')
    p.innerHTML= 'Copied'
    p.className = 'copiedanimation show-display-copied'
    rgbFlex.appendChild(p)
    p.style.opacity = '1'
    p.style.transition = '1s'
}

// copied box and text animation
function copiedBoxAnimation(value) {
    if(value !== null) {
        value.remove()
        value = null
    }
}

// Hex to rgb color convert
/**
 * 
 * @param {string} hex 
 */
function rgbColor(hex) {
    let red = parseInt(hex.slice(0,2),16)
    let green = parseInt(hex.slice(2,4),16)
    let blue = parseInt(hex.slice(4),16)

    return `rgb(${red},${green},${blue})`
}

/**
 * @param {string} color;
 */

// input field random color provite
function hexValidCode(color) {
    if(color.length!== 6) return false;

    return /^[0-9A-Fa-f]{6}/i.test(color)
}

