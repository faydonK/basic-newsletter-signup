document.getElementById('newsletter-button').addEventListener('click', function() {
    var form = document.getElementById('newsletter-form');
    var overlay = document.getElementById('newsletter-overlay');
    form.classList.toggle('hidden');
    form.style.display = 'block';
    overlay.style.display = 'block';
});

document.getElementById('submit-button').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    if (email) {
        fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            alert('✅ ' + data.message);
        })
        .catch(error => {
            console.error('❌:', error);
        });
    } else {
        alert('Please enter a valid email address.');
    }
});