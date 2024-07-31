// Cursor effect script
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Add a cursor element to the body
const cursorElement = document.createElement('div');
cursorElement.classList.add('cursor');
document.body.appendChild(cursorElement);
