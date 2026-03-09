document.addEventListener('DOMContentLoaded', () => {
    // 1. Easter Egg Logic
    // We use the class '.easter-egg-btn' to match the new HTML
    const flower = document.querySelector('.easter-egg-btn');
    const meme = document.getElementById('funny-photo');

    if (flower && meme) {
        flower.addEventListener('click', (e) => {
            // Prevent the click from immediately bubbling up to the window
            e.stopPropagation(); 
            
            // Toggle the image
            if (meme.style.display === 'block') {
                meme.style.display = 'none';
            } else {
                meme.style.display = 'block';
            }
        });

        // 2. "Click Anywhere to Close" Logic
        // This makes the funny photo disappear if you click anywhere else
        window.addEventListener('click', (e) => {
            if (meme.style.display === 'block' && e.target !== meme) {
                meme.style.display = 'none';
            }
        });
    }

    // 3. Optional: Active Link Highlighting
    // This adds a subtle glow to the nav link of the page you are currently on
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = '#bc6ff1';
            link.style.borderBottom = '2px solid #52057b';
        }
    });
});