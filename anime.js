const blueBtn = document.getElementById('blue')
const redBtn = document.getElementById('red')
const blackBtn = document.getElementById('black')
const imgPost = document.getElementsByClassName('n__img')[0]
const colors = {azul:'#181f63',rojo:'#a31a1e',negro:'#29292b'}
const listBtn = [blueBtn,redBtn,blackBtn]
const ligthBox = document.getElementsByClassName('lightBox')[0]
const ligthBoxImg = document.getElementsByClassName('lightBox__img')[0]
let actualShoe = 1
let actualImageNumber = 0
let listOfImg = []
let swtch = false

function updateListOfImages(){
    listOfImg = [`./img/img_1000/shoe_${actualShoe}l.jpg`,`./img/img_1000/shoe_${actualShoe}r.jpg`,`./img/img_1000/shoe_${actualShoe}b.jpg`,
    `./img/img_1000/shoe_${actualShoe}s.jpg`,`./img/img_1000/shoe_${actualShoe}u.jpg`]
}

function changeVaribale(hex){
    document.querySelector(':root').style.setProperty('--base-color', hex);;
}

function anime(event){
    imgPost.classList.remove('animation')
    imgPost.classList.remove('animation2')
    imgPost.offsetWidth; 
    switch (event.target.id) {
        case 'blue':
            setTimeout((e)=>{imgPost.src = './img/blue.png';},500)
            imgPost.classList.add('animation')
            changeVaribale(colors.azul)
            actualShoe = 1
            updateListOfImages()
            break;
        case 'black':
            setTimeout((e)=>{imgPost.src = './img/black.png';},500)
            imgPost.classList.add('animation')
            changeVaribale(colors.negro)
            actualShoe = 3
            updateListOfImages()
            break;
        case 'red':
            setTimeout((e)=>{imgPost.src = './img/red.png';},500)
            imgPost.classList.add('animation')
            changeVaribale(colors.rojo)
            actualShoe = 2
            updateListOfImages()
            break;
    }
    setTimeout((event) => {
        imgPost.classList.remove('animation')
        imgPost.classList.add('animation2')
    }, 1100);
}

function toggle(e){
    if(swtch){
        if(e.target && e.target.tagName === 'DIV'){
            ligthBox.classList.toggle('visible')
            ligthBoxImg.src=listOfImg[0]
            actualImageNumber = 0
            swtch = false
        }
    }else{
        if(e.target && e.target.tagName === 'IMG'){
            ligthBox.classList.toggle('visible')
            ligthBoxImg.src=listOfImg[0]
            actualImageNumber = 0
            swtch = true
        }
    }
}

function moveImage(){
    if(actualImageNumber < 4 ){
        ligthBoxImg.src = listOfImg[++actualImageNumber] 
    }else{
        ligthBox.classList.toggle('visible')
        swtch = false
    }
}

updateListOfImages()
ligthBoxImg.addEventListener('click',moveImage)
ligthBox.addEventListener('click',toggle)
imgPost.addEventListener('click',toggle)
listBtn.forEach((e)=>{e.addEventListener('click',anime)})