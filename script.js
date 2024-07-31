document.addEventListener('mousemove', function(e) {
    const container = document.querySelector('.container');
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    container.style.setProperty('--x', `${x}px`);
    container.style.setProperty('--y', `${y}px`);
});
