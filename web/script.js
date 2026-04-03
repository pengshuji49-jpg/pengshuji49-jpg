const btn = document.getElementById('btn');
const card = document.querySelector('.card');

btn.addEventListener('click', () => {
    // 随机生成一个颜色
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // 改变卡片的背景颜色
    card.style.borderColor = randomColor;
    card.style.borderWidth = "5px";
    card.style.borderStyle = "solid";
    
    alert('颜色已切换！');
});