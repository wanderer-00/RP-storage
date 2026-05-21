let cluster = document.getElementById('cluster');

function builder(data, type){
    for( t=0; t<data.length; t++ ){
        cluster.innerHTML += `
            <div class="card">
                <div>
                    <h2>${data[t].NAME}</h2>
                    <p>${data[t].NOTE}</p>
                </div>
                <div class="image" style="background-image: url('img/${type}/${data[t].COLOR}.png')"></div>
                <div class="size-table">
                    ${size(data)}
                </div>
            </div>
        `;
    };
};

builder(tshirt,     "tshirt");
builder(longsleeve, "longsleeve");
builder(cap,        "cap");
builder(shopper,    "shopper");

function builderAll(element){
    // очищаем кластер
    cluster.innerHTML = '';

    // удаление active
    deleteActive();

    builder(tshirt,     "tshirt");
    builder(longsleeve, "longsleeve");
    builder(cap,        "cap");
    builder(shopper,    "shopper");

    // добавляем класс
    element.classList.add('active');
}

function size(data){
    let summ = "";

    for( a=0; a<data[t].SIZE.length; a++ ){
        summ += `
        <div class="size-item">
            <span>${data[t].SIZE[a]}</span>
            <strong>${data[t].COUNT[a]}</strong>
        </div>`;
    };

    return summ;
};

function initiation(element, data, type){
    // удаление active
    deleteActive();

    // добавляем класс
    element.classList.add('active');

    // очищаем кластер
    cluster.innerHTML = '';
    
    // наполняем класс
    for( t=0; t<data.length; t++ ){
        cluster.innerHTML += `
            <div class="card">
                <div>
                    <h2>${data[t].NAME}</h2>
                    <p>${data[t].NOTE}</p>
                </div>
                <div class="image" style="background-image: url('img/${type}/${data[t].COLOR}.png')"></div>
                <div class="size-table">
                    ${size(data)}
                </div>
            </div>
        `;
    };
};

// удаление active
function deleteActive(){
    // Находим все кнопки с нужным классом
    const buttons = document.querySelectorAll('.active');

    // Проходим по каждой и удаляем класс
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
}