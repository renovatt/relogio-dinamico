//Assignment
const sleep = document.getElementById('sleep')
const morning = document.getElementById('morning')
const job = document.getElementById('job')
const work = document.getElementById('work')
const eating = document.getElementById('lunch')
const backHome = document.getElementById('backHome')
const freeTime = document.getElementById('freeTime')
const thumb = document.getElementById('thumb')

//Functions
function sleeping(){
    job.style.display = "none"
    morning.style.display = "none"
    work.style.display = "none"
    eating.style.display = "none"
    backHome.style.display = "none"
    freeTime.style.display = "none"
    sleep.style.display = "flex"
    thumb.style.background = '#000'
    dataInfo.style.color = '#ddd'
}

function awaken(){
    job.style.display = "none"
    work.style.display = "none"
    eating.style.display = "none"
    backHome.style.display = "none"
    freeTime.style.display = "none"
    sleep.style.display = "none"
    morning.style.display = "flex"
    thumb.style.background = '#EEF0F7'
    dataInfo.style.color = '#000'
}

function myJob(){
    sleep.style.display = "none"
    morning.style.display = "none"
    work.style.display = "none"
    eating.style.display = "none"
    backHome.style.display = "none"
    freeTime.style.display = "none"
    job.style.display = "flex"
    thumb.style.background = '#F4F9FF'
    dataInfo.style.color = '#000'
}

function working(){
    sleep.style.display = "none"
    morning.style.display = "none"
    job.style.display = "none"
    eating.style.display = "none"
    backHome.style.display = "none"
    freeTime.style.display = "none"
    work.style.display = "flex"
    thumb.style.background = '#EEF0F7'
    dataInfo.style.color = '#000'
}

function eat(){
    sleep.style.display = "none"
    morning.style.display = "none"
    job.style.display = "none"
    work.style.display = "none"
    backHome.style.display = "none"
    freeTime.style.display = "none"
    eating.style.display = "flex"
    thumb.style.background = '#ffd500'
    dataInfo.style.color = '#000'
}

function home(){
    sleep.style.display = "none"
    morning.style.display = "none"
    job.style.display = "none"
    work.style.display = "none"
    eating.style.display = "none"
    freeTime.style.display = "none"
    backHome.style.display = "flex"
    thumb.style.background = '#e3e3e3'
    dataInfo.style.color = '#000'
}

function enjoy(){
    sleep.style.display = "none"
    morning.style.display = "none"
    job.style.display = "none"
    work.style.display = "none"
    eating.style.display = "none"
    backHome.style.display = "none"
    freeTime.style.display = "flex"
    thumb.style.background = '#EEF0F7'
    dataInfo.style.color = '#000'
}

//Clock
const hour = document.querySelector('#hour')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const dataInfo = document.querySelector('.data')

setInterval(myclock, 1000)
function myclock(){
    const data = new Date()
    let hr = data.getHours()
    let min = data.getMinutes()
    let s = data.getSeconds()

    if(hr < 10) hr = '0' + hr
    if(min < 10) min = '0' + min
    if(s < 10) s = '0' + s

    hour.innerHTML = hr
    minutes.innerHTML = min
    seconds.innerHTML = s
}

const data = new Date()
const dayWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

let hr = data.getHours()
let day = dayWeek[data.getDay()]
let days = data.getDate()
let month = months[data.getMonth()]
let yeah = data.getFullYear()
dataInfo.innerHTML = `${day}, ${days} de ${month} de ${yeah}`

//Conditions
function myTime(){

    if(hr >= 23 || hr >= 0 && hr < 7){
        sleeping()
    } else if (hr >= 7 && hr < 8){
        awaken()
    } else if( hr >= 8 && hr < 9){
        myJob()
    } else if(hr >= 9 && hr < 12){
        working()
    } else if(hr >= 12 && hr < 14){
        eat()
    } else if(hr >= 14 && hr < 17){
        working()
    } else if(hr >= 17 && hr < 18){
        home()
    } else if(hr >= 18 && hr <= 22){
        enjoy()
    }
}

myTime()

//Events
thumb.addEventListener('mouseover', function(){
    myTime()
})

//preload
window.addEventListener('load', function(){
    const overlay = document.querySelector('.overlay')
    overlay.style.display = 'none'
})