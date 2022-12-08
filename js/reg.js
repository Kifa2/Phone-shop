const regForm = document.getElementById('reg-form');

regForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    if (password !== password2) return alert('Пароли не совпадают'); 
    const users = await loadUsers(); 
    for (const user of users) { 
        if (user.email === email || user.name === name) { 
            return alert('Пользователь с таким email или именем уже существует'); 
        }
    }
    const user = { 
        id: Date.now(), 
        email, 
        name, 
        password, 
        orders: [] 
    };
    users.push(user); 
    localStorage.setItem('users', JSON.stringify(users)); 
    localStorage.setItem('user', user.id); 
    window.location.href = 'index.html'; 
});