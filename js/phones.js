const phoneList = document.getElementById('phones'); 

for (let phone of phones) { 
    const phoneElement = document.createElement('div'); 
    phoneElement.classList.add('card'); 
    phoneElement.innerHTML = `
        <div class="card-header">
            <img src="img/phones/${phone.image}.jpg" alt="${phone.name}" width="300">
            <p class="bold">${phone.name}</p>
        </div>
        <div class="card-body">
            <p>${phone.description}</p>
        </div>
        <div class="card-footer">
            <p>${phone.price ? `Цена: ${phone.price} руб.` : 'Скоро в продаже'}</p>
            <a href="phone.html?id=${phone.id}">Подробнее</a>
        </div>
    ` 
    phoneList.appendChild(phoneElement); 
}