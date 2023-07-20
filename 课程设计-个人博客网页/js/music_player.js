const doc = document;

// 歌曲数组
const songlist=[
    {
        id: 1,
        title: '椿',
        author: '沈以诚',
        p_m: './resource/music/沈以诚 - 椿.mp3',
        p_pict: './resource/music/chun.jpg' 
    },
    {
        id: 2,
        title: '道理的道理',
        author: '沈以诚',
        p_m: './resource/music/沈以诚 - 道理的道理.mp3',
        p_pict: './resource/music/daoli.jpg' 
    },
    {
        id: 3,
        title: 'summer',
        author: 'KeShi',
        p_m: './resource/music/KeShi - summer(Explicit).mp3',
        p_pict: './resource/music/summer.jpg' 
    },
];

// 获取元素
const audio = doc.querySelector('.player'); //播放器
const img = doc.querySelector('.music_picture'); //插图
const last = doc.querySelector('.last'); //上一首
const pause = doc.querySelector('.pause'); //暂停
const next = doc.querySelector('.next'); //下一首
const title = doc.querySelector('.title'); //歌曲名称
const author = doc.querySelector('.author'); //作者
const volunm = doc.querySelector('.v_bar'); //音量条
const auto = doc.querySelector('.auto'); //循环自动播放
const val = doc.querySelector('.value'); //音量值
const progress = doc.querySelector('.p_bar') //进度条

// 当前播放歌曲下标
var m_index = 0;
// 歌曲列表长度
var list_len = songlist.length;
// 播放状态
var isplay = false;
// 是否循环播放
var isauto = false;

// 渲染歌曲
function render(song){
    var url = song.p_pict;
    title.innerHTML = song.title;   // 设置名称
    author.innerHTML = song.author;  // 设置作者
    img.style.backgroundImage = `url(${url})`; //模板字符串
    audio.volunm = 0.1; // 设置音量
    audio.src = song.p_m; // 设置歌曲源
}

// 初始化
function init(){
    render(songlist[m_index]);
    // 音量初始化
    volunm.value = audio.volunm * 100;
    val.innerHTML = audio.volunm * 100;
}
init();


// 添加按钮事件
//暂停-播放
pause.addEventListener('click', ()=>{
    if(isplay){
        //暂停 ，切换图标
        var pause_img = doc.querySelector('.pause img');
        isplay = false;
        pause_img.src='./resource/icons/暂停.png';
        audio.pause();
    }else{
        //播放，切换图标
        var pause_img = doc.querySelector('.pause img');
        isplay = true;
        pause_img.src='./resource/icons/播放.png';
        audio.play();
    }
})
// 上一首
last.addEventListener('click', ()=>{
    m_index--;
    m_index = (m_index+list_len)%list_len; 
    render(songlist[m_index]);
    if(!isplay){
        //播放，切换图标
        var pause_img = doc.querySelector('.pause img');
        isplay = true;
        pause_img.src='./resource/icons/播放.png';
    }
    audio.play();
})

// 下一首
next.addEventListener('click', ()=>{
    m_index++;
    m_index = (m_index+list_len)%list_len; 
    render(songlist[m_index]);
    if(!isplay){
        //播放，切换图标
        var pause_img = doc.querySelector('.pause img');
        isplay = true;
        pause_img.src='./resource/icons/播放.png';
    }
    audio.play();
})

// 音量调节功能
volunm.addEventListener('change', ()=>{
    audio.volunm = volunm.value / 100;
    val.innerHTML = audio.volunm * 100;
})

// 进度调节功能
progress.addEventListener('change',()=>{
    audio.currentTime = audio.duration * (progress.value/100);
})

// 进度条绑定歌曲进度
function range_slider(){
    var position = 0; 
    // 更新进度条
    if(!isNaN(audio.duration)){
        position = (audio.currentTime/ audio.duration) * 100;
        progress.value =  position;
    }
         
    // 自动循环播放
    if(audio.ended){
        if(isauto==true){
            m_index += 1;
            m_index = m_index % list_len;
            render(songlist[m_index]);
            audio.play();
        }
        else{
            var pause_img = doc.querySelector('.pause img');
            isplay = false;
            pause_img.src='./resource/icons/暂停.png';
            audio.pause();
        }
    }
}

// 设置计时器
timer = setInterval(range_slider, 1000);

//自动播放功能
auto.addEventListener('click', ()=>{
    if(isauto){
        isauto = false;
        auto.style.backgroundColor = "#3b797b";
        console.log('0')
    }
    else{
        isauto = true;
        auto.style.backgroundColor = "#ffa9a9";
        console.log('1')
    }
})