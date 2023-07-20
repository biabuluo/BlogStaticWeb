
// 获取按钮
const back = document.querySelector('.backtotop');
backtotop();
window.addEventListener('scroll', backtotop)
function backtotop(){
    // 获取滚动条高度
    let height = document.documentElement.scrollTop
    // console.log("h"+height)
    if(height>=300){
        back.style.display = 'block';
    }
    else{
        back.style.display = 'none';
    }
}

back.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})