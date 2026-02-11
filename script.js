function moveButton(event) {
    var btn = document.getElementById('noBtn');
    var container = document.querySelector('.container');

    // 1. Get the container's boundaries
    var containerRect = container.getBoundingClientRect();
    var btnRect = btn.getBoundingClientRect();

    // 2. If the button is not absolute yet, make it absolute at its current position
    // This allows us to move it freely from now on without it jumping visually
    if (btn.style.position !== 'absolute') {
        btn.style.position = 'absolute';
        btn.style.left = btn.offsetLeft + 'px';
        btn.style.top = btn.offsetTop + 'px';
    }

    // 3. Calculate the direction away from the mouse
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Button center position
    var btnCenterX = btnRect.left + (btnRect.width / 2);
    var btnCenterY = btnRect.top + (btnRect.height / 2);

    // Vector from Mouse -> Button
    var deltaX = btnCenterX - mouseX;
    var deltaY = btnCenterY - mouseY;

    // Normalize the vector (make it length 1) to get just the direction
    var length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (length === 0) length = 1; // Prevent division by zero
    
    var unitX = deltaX / length;
    var unitY = deltaY / length;

    // 4. Move the button away by a fixed distance (e.g., 150px)
    var moveDistance = 150;
    
    // Current position relative to the container
    var currentLeft = parseFloat(btn.style.left);
    var currentTop = parseFloat(btn.style.top);

    var newLeft = currentLeft + (unitX * moveDistance);
    var newTop = currentTop + (unitY * moveDistance);

    // 5. Keep it inside the container (Boundary Check)
    var maxLeft = containerRect.width - btnRect.width;
    var maxTop = containerRect.height - btnRect.height;

    // Clamp values so it doesn't go < 0 or > max
    newLeft = Math.min(Math.max(0, newLeft), maxLeft);
    newTop = Math.min(Math.max(0, newTop), maxTop);

    // Apply new position
    btn.style.left = newLeft + 'px';
    btn.style.top = newTop + 'px';
}

function sayYes() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('success-message').classList.remove('hidden');
    document.getElementById('success-message').style.display = 'block';
}
