const orders = document.getElementById('orders'); 

main().then(); 

async function main() {
    if (!user.orders) { 
        user.orders = []; 
        const users = await loadUsers(); 
        for (const u of users) { 
            if (u.id === user.id) { 
                u.orders = user.orders; 
            }
        }
        localStorage.setItem('users', JSON.stringify(users)); 
    }
    if (user.orders.length === 0) { 
        return orders.innerHTML = 'У вас нет заказов'; 
    }
    for (const order of user.orders) { 
        const orderDiv = document.createElement('div'); 
        orderDiv.classList.add('order'); 
        orderDiv.innerHTML = `
            <div>Заказ №${order.id}</div>
            <div>Дата заказа: ${order.date}</div>
            <div>Стоимость заказа: ${order.price} руб.</div>
            <div>Получатель: ${order.name} ${order.surname}</div>
            <div>Телефон для связи: ${order.phone}</div>
            <div>Доставлен будет по адресу: ${order.address}</div>
            <div>Товар в заказе:</div>
        `; 
        for (phone of phones) { 
            if (phone.id === order.productId) { 
                orderDiv.innerHTML += `
                    <div class="phone">
                        <img src="img/phones/${phone.image}.jpg" alt="phone" width="300">
                        <div>${phone.name}</div>
                        <div>${phone.price} руб.</div>
                        <div>Цвет: ${order.color ? order.color : "Стандартный"}</div>
                    </div>
                `; 
            }
        }
        orders.append(orderDiv); 
    }
}