main().then() 

let users = undefined; 
let user = undefined; 

async function main() {
    users = await loadUsers(); 
    user = await loadUser(); 
    const profile = document.getElementById('profile') 
    const profileName = document.getElementById('user-header') 
    const buttonLogout = document.getElementById('button-logout') 
    if (user.id) {
        profile.innerHTML = `Мои заказы`; 
        profile.href = 'orders.html'; 
        profileName.innerHTML = user.name; 
        profileName.style.display = 'block'; 
        buttonLogout.style.display = 'block'; 
        buttonLogout.addEventListener('click', () => { 
            localStorage.removeItem('user'); 
        });
    } else { 
        profile.innerHTML = 'Авторизация'; 
        profile.href = 'auth.html'; 
    }
    const url = window.location.href; 
    if ((url.includes('auth.html') || url.includes('reg.html')) && user.id) { 
        window.location.href = 'index.html'; 
    } else if ((url.includes('orders.html') || url.includes('order.html')) && !user.id) { 
        window.location.href = 'auth.html'; 
    }
}

async function loadUsers() {
    const accounts = localStorage.getItem('users'); // Получаем из localStorage массив пользователей
    if (!accounts) { // Если массив пользователей не существует
        localStorage.setItem('users', JSON.stringify([])); // Создаем пустой массив пользователей в localStorage
        return []; // Возвращаем пустой массив пользователей
    } // Если массив пользователей существует
    return JSON.parse(accounts); // Возвращаем массив пользователей
}

async function loadUser() {
    const userId = localStorage.getItem('user'); // Получаем из localStorage id пользователя
    if (!userId) return {}; // Если id пользователя не существует, то возвращаем пустой объект пользователя
    for (const user of users) { // Если id пользователя существует, то ищем пользователя с таким id в массиве пользователей
        if (Number(user.id) === Number(userId)) { // Если пользователь найден в массиве пользователей
            return user; // Возвращаем пользователя из массива пользователей
        }
    }
    return {}; // Если пользователь не найден, то возвращаем пустой объект пользователя
}