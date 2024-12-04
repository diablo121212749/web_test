function createSnow() {
    const snow = document.querySelector('.snow');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.style.position = 'absolute';
        snowflake.style.width = '5px';
        snowflake.style.height = '5px';
        snowflake.style.backgroundColor = 'rgba(255, 51, 102, 0.3)';
        snowflake.style.borderRadius = '50%';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animation = `fall ${5 + Math.random() * 10}s linear infinite`;
        snowflake.style.opacity = Math.random();
        snow.appendChild(snowflake);
    }
}

// 添加雪花下落动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        from {
            transform: translateY(-100vh) rotate(0deg);
        }
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// 初始化
window.addEventListener('load', () => {
    createSnow();
}); 