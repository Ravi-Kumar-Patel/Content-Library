document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('dblclick', () => {
            const description = thumbnail.getAttribute('data-description');
            alert(`Description: ${description}`);
        });
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('pulse');
            setTimeout(() => {
                button.classList.remove('pulse');
            }, 1000);
        });
    });
});

function embedVideo(videoUrl) {
    const videoContainer = document.createElement('div');
    videoContainer.innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
    document.body.appendChild(videoContainer);
}
    
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const getStartedButton = document.getElementById('get-started');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            localStorage.setItem('user', JSON.stringify({ username, password }));
            localStorage.setItem('loggedIn', true);
            window.location.href = 'index.html'; // Redirect to home page after registration
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.username === username && storedUser.password === password) {
                localStorage.setItem('loggedIn', true);
                window.location.href = 'index.html'; // Redirect to home page after login
            } else {
                alert('Invalid username or password');
            }
        });
    }

    if (getStartedButton) {
        getStartedButton.addEventListener('click', function(event) {
            if (!localStorage.getItem('loggedIn')) {
                event.preventDefault();
                alert('You must be logged in to access this page.');
                window.location.href = 'login.html';
            }
        });
    }

    // Protect all pages except login and register
    if (window.location.pathname !== '/login.html' && window.location.pathname !== '/register.html') {
        if (!localStorage.getItem('loggedIn')) {
            window.location.href = 'login.html';
        }
    }
});
