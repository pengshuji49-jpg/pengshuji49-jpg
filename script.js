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