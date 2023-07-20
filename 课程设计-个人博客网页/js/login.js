const btn = document.querySelector('.btn');
const input = document.querySelector('#input');

// 使用localstorage存储登陆状态
window.localStorage.setItem('islogin', false);
console.log(window.localStorage.getItem('islogin'))

// 口令
var pwd = "12345";

btn.addEventListener('click', ()=>{
    if(input.value != pwd){
        alert("口令错误！");
        input.value = '';
    }
    else{
        window.location.href = './main.html';
        window.localStorage.setItem('islogin', true);
        console.log(window.localStorage.getItem('islogin'));
    }
})