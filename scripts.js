document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');
    const logoutButton = document.getElementById('logout-button');
    const userNameSpan = document.getElementById('user-name');
    const loginFormContainer = document.getElementById('login-form');
    const registerFormContainer = document.getElementById('register-form');
    const logoutFormContainer = document.getElementById('logout-form');
    const showRegisterButton = document.getElementById('show-register');
    const showLoginButton = document.getElementById('show-login');

    console.log('Elements selected:', {
        loginForm,
        registerForm,
        logoutButton,
        userNameSpan,
        loginFormContainer,
        registerFormContainer,
        logoutFormContainer,
        showRegisterButton,
        showLoginButton
    });

    showRegisterButton.addEventListener('click', () => {
        loginFormContainer.style.display = 'none';
        registerFormContainer.style.display = 'block';
    });

    showLoginButton.addEventListener('click', () => {
        registerFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Login form submitted');
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        console.log('Login credentials:', { username, password });
        // Implement login logic here
        if (username && password) {
            // Simulate successful login
            userNameSpan.textContent = username;
            loginFormContainer.style.display = 'none';
            registerFormContainer.style.display = 'none';
            logoutFormContainer.style.display = 'block';
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Register form submitted');
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        console.log('Register credentials:', { username, password });
        // Implement registration logic here
        if (username && password) {
            // Simulate successful registration
            alert('Registration successful! Please login.');
        }
    });

    logoutButton.addEventListener('click', () => {
        console.log('Logout button clicked');
        // Implement logout logic here
        loginFormContainer.style.display = 'block';
        registerFormContainer.style.display = 'none';
        logoutFormContainer.style.display = 'none';
    });
});
