function moveButton(event) {
    var btn = document.getElementById('noBtn');
    var container = document.querySelector('.container');

    var containerRect = container.getBoundingClientRect();
    var btnRect = btn.getBoundingClientRect();

    if (btn.style.position !== 'absolute') {
        btn.style.position = 'absolute';
        btn.style.left = btn.offsetLeft + 'px';
        btn.style.top = btn.offsetTop + 'px';
    }

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var btnCenterX = btnRect.left + (btnRect.width / 2);
    var btnCenterY = btnRect.top + (btnRect.height / 2);

    var deltaX = btnCenterX - mouseX;
    var deltaY = btnCenterY - mouseY;

    var length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (length === 0) length = 1; 
    
    var unitX = deltaX / length;
    var unitY = deltaY / length;

    var moveDistance = 150; 

    var currentLeft = parseFloat(btn.style.left);
    var currentTop = parseFloat(btn.style.top);

    var newLeft = currentLeft + (unitX * moveDistance);
    var newTop = currentTop + (unitY * moveDistance);

    var maxLeft = containerRect.width - btnRect.width;
    var maxTop = containerRect.height - btnRect.height;

    // --- NEW LOGIC: WALL TELEPORT ---
    // If the calculated position hits a wall, teleport randomly instead of sliding
    if (newLeft < 0 || newLeft > maxLeft || newTop < 0 || newTop > maxTop) {
        // Teleport to a random spot inside the container
        newLeft = Math.random() * maxLeft;
        newTop = Math.random() * maxTop;
    } else {
        // Otherwise, clamp effectively (just to be safe)
        newLeft = Math.min(Math.max(0, newLeft), maxLeft);
        newTop = Math.min(Math.max(0, newTop), maxTop);
    }

    btn.style.left = newLeft + 'px';
    btn.style.top = newTop + 'px';
}

function sayYes() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('success-message').classList.remove('hidden');
    document.getElementById('success-message').style.display = 'block';
}
