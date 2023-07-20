const header_af_login = document.getElementById('header_af_login');
const header_bf_login = document.getElementById('header_bf_login');
console.log('1111')
window.addEventListener('load', ()=>{
    var islogin = window.localStorage.getItem('islogin');
    if(islogin=="true"){
        console.log('1111')
        header_bf_login.style.visibility = "hidden";
        header_af_login.style.visibility = "visible";
    }else{
        header_bf_login.style.visibility = "visible";
        header_af_login.style.visibility = "hidden"; 
    }
})
