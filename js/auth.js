const authForm = document.getElementById('auth-form');

authForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const users = await loadUsers(); 
    for (const user of users) { 
        if (user.email === email && user.password === password) { 
            localStorage.setItem('user', user.id); 
            return window.location.href = 'index.html'; 
        }
    }
    alert('Неверный логин или пароль'); 
});
