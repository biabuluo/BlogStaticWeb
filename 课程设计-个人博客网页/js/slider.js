var left = document.querySelector('.btn_left');
var right = document.querySelector('.btn_right');
// 放回一个html元素，element对象
var images = document.querySelector('.images');

var index = 0;
var time;
// 获取子元素个数
var length = images.children.length;

// alert("length:"+length)

// 设置images的位置
function position() {
    images.style.left = (index * -100) + "%";    
}
// 左按钮
function add(){
    index ++;
    index = index % length;
}
// 右按钮
function sub(){
    index--;
    index = (index+length) % length;
}

// 定时器函数
time = setInterval(()=>{
    add();
    position();
}, 3000)


// 左按钮添加事件监听点击事件
left.addEventListener('click',()=>{
    sub();
    position();
    // console.log(index)
})
// 同理右
right.addEventListener('click',()=>{
    add();
    position();
})