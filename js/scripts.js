// Button hover effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#0077b6';  // Bootstrap green
        button.style.color = '#ffffff';
    });
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#48cae4';  // Your blue
        button.style.color = '#000000';
    });
});
// Blog card click alert with blog title
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        alert("You clicked on a blog card: " + this.querySelector('.card-title').innerText);
        // Redirect to blog post if needed
        // window.location.href = "blog-post.html";
    });
});

// Image modal popup
document.querySelectorAll('.card-img-top').forEach(function(image) {
    image.style.cursor = "pointer";
    image.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent card click
        let modal = document.createElement('div');
        modal.style.position = "fixed";
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0,0,0,0.8)";
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.innerHTML = '<img src="' + this.src + '" style="max-width:90%; max-height:90%; border-radius:8px;">';
        modal.addEventListener('click', () => document.body.removeChild(modal));
        document.body.appendChild(modal);
    });
});
