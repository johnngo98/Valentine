function moveButton() {
    var btn = document.getElementById('noBtn');
    var container = document.querySelector('.container'); // The white box

    // Get the dimensions of the container and the button
    var containerRect = container.getBoundingClientRect();
    var btnRect = btn.getBoundingClientRect();

    // Calculate valid range for the button to stay INSIDE the container
    // We subtract the button size so it doesn't hang off the edge
    var maxX = containerRect.width - btnRect.width;
    var maxY = containerRect.height - btnRect.height;

    // Generate random position within these limits
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    // Apply the new position
    // We use 'absolute' so it moves relative to the .container (the white box)
    btn.style.position = 'absolute';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
}

function sayYes() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('success-message').classList.remove('hidden');
    document.getElementById('success-message').style.display = 'block';
}
