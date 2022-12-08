const id = Number(window.location.search.split('=')[1]); 
const phoneElement = document.getElementById('phone-info'); 
const phoneSpecs = document.getElementById('phone-specs');
const title = document.getElementById('title');

main().then() 
let phone = {}; 
async function main() {
    phone = await loadPhone(id); 
    if (!phone.name) { 
        phoneSpecs.style.display = 'none'; 
        return phoneElement.innerHTML = `
            <div class="card-header">
                <p class="bold">Телефон не найден</p>
            </div>
        `; 
    }
    phoneElement.innerHTML = `
        <div class="card-header">
            <img src="img/phones/${phone.image}.jpg" alt="${phone.name}" width="300">
        </div>
        <div class="card-body">
            <p>${phone.description}</p>
        </div>
        <div class="card-footer">
            <p>${phone.price ? `Цена: ${phone.price} руб.` : 'Скоро в продаже'}</p>
            ${phone.price ? `<a href="order.html?id=${phone.id}">Заказать</a>` : ''}
        </div>
    `; 
    phoneSpecs.innerHTML = `
        <div class="card-header">
            <p class="bold">Характеристики</p>
        </div>
        <div class="card-body">
            <p>Операционная система: ${phone.os}</p>
            <p>Количество ядер: ${phone.cpu}</p>
            <p>Количество SIM-карт: ${phone.sim}</p>
            <p>Объем оперативной памяти: ${phone.ram}</p>
            <p>Объем встроенной памяти: ${phone.rom}</p>
            <p>Диагональ экрана: ${phone.display}</p>
            <p>Количество камер: ${phone.camera}</p>
            <p>Емкость аккумулятора: ${phone.battery}</p>
        </div>
    `; 
    title.innerHTML = `Смартфон ${phone.name}`; 
}

async function loadPhone(id) {
    for (const object of phones) { 
        if (object.id === id) { 
            return object; 
        }
    }
    return {}; 
}