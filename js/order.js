const productId = new URLSearchParams(window.location.search).get('id'); 
const orderHTML = document.getElementById('order'); 
const title = document.getElementById('title'); 
const orderForm = document.getElementById('order-form'); 

let product = {} 

main().then(); 

async function main() { 
    for (const phone of phones) { 
        if (Number(phone.id) === Number(productId)) { 
            product = phone; 
            break; 
        }
    }

    if (!product.name) { 
        return orderHTML.innerHTML = 'Товар не найден'; 
    }

    if (!product.price) { 
        return orderHTML.innerHTML = 'Товара нет в продаже'; 
    }

    const order = { 
        id: user.orders.length + 1, 
        date: new Date().toLocaleString(), 
        price: product.price, 
        productId: product.id 
    }

    title.innerHTML = `Заказ №${order.id}`; 

    orderHTML.innerHTML = `
        <div class="phone">
            <img src="img/phones/${product.image}.jpg" alt="phone" width="300">
            <div>${product.name}</div>
            <div>${product.price} руб.</div>
        </div>
    `; 

    orderForm.style.display = 'flex'; 

    orderForm.addEventListener('submit', (event) => { 
        event.preventDefault(); 
        const formData = new FormData(orderForm); 
        order.name = formData.get('name'); 
        order.surname = formData.get('surname'); 
        order.phone = formData.get('phone'); 
        order.address = formData.get('address'); 
        order.color = formData.get('color'); 
        user.orders.push(order); 
        for (const u of users) { 
            if (u.id === user.id) { 
                u.orders = user.orders; 
                break;
            }
        }
        localStorage.setItem('users', JSON.stringify(users)); 
        window.location.href = 'orders.html'; 
    });
}