const btn = document.getElementById('btn');
const nameText = document.getElementById('name');
const avatar = document.getElementById('avatar');

// 这里一定要确认文件名和 GitHub 上的完全一致
const images = [
    './omg.jpg',
    './photo2.jpg', 
    './photo3.jpg',
    './photo4.jpg',
    './photo5.jpg',
];

let imageIndex = 0;

btn.addEventListener('click', function() {
    // 换颜色
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    nameText.style.color = randomColor;
    btn.style.backgroundColor = randomColor;

    // 换头像逻辑
    imageIndex = (imageIndex + 1) % images.length;
    console.log("正在尝试切换到第 " + imageIndex + " 张图: " + images[imageIndex]);
    
    // 执行更换
    if (avatar) {
        avatar.src = images[imageIndex];
    }
});
var audio = document.getElementById("bg-music");

// 每当音乐被暂停时触发
audio.onpause = function() {
    // 检查是否是用户点“停止”按钮停的
    // 如果不是，且音乐还没播完，就尝试自动恢复
    if (!audio.ended && audio.currentTime > 0) {
        console.log("检测到异常中断，尝试恢复播放...");
        audio.play().catch(e => {
            console.log("恢复播放失败，可能需要用户再次点击屏幕");
        });
    }
};

// 增加错误监听
audio.onerror = function() {
    console.error("音乐文件加载出错，可能是网络断开或文件过大");
    alert("网络不太好，音乐加载失败了，请刷新重试。");
};
