function moveButton() {
    var x = Math.random() * (window.innerWidth - 100); // Random x position
    var y = Math.random() * (window.innerHeight - 100); // Random y position

    var btn = document.getElementById('noBtn');
    
    // Apply new positions
    btn.style.position = 'absolute'; // Ensure it's absolute
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function sayYes() {
    // Hide the question and photo
    document.getElementById('main-content').style.display = 'none';
    
    // Show the success message and gif
    document.getElementById('success-message').classList.remove('hidden');
    document.getElementById('success-message').style.display = 'block';
}
