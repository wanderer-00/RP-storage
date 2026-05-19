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