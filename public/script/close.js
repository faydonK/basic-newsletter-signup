document.getElementById('close-button').addEventListener('click', function() {
    var form = document.getElementById('newsletter-form');
    var overlay = document.getElementById('newsletter-overlay');
    form.classList.add('hidden');
    setTimeout(function() {
        form.style.display = 'none';
        overlay.style.display = 'none';
    }, 500); 
});