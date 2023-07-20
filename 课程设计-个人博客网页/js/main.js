const bannerbox = document.querySelector('.banner_box')
const jspost = document.getElementById('js')
const csspost = document.getElementById('css')
const htmlpost = document.getElementById('html')
const about = document.getElementById('about')

bannerbox.addEventListener('click', ()=>{
    window.scrollTo({
        top:500,
        behavior: "smooth"
    })
})

jspost.addEventListener('click', ()=>{
    window.location.href = './JAVASCRIPT.html'
})
csspost.addEventListener('click', ()=>{
    window.location.href = './CSS.html'
})
htmlpost.addEventListener('click', ()=>{
    window.location.href = './HTML.html'
})
about.addEventListener('click', ()=>{
    window.location.href = './aboutme.html'
})