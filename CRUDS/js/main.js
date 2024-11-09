let title = document.getElementById('title');
let taxes = document.getElementById('taxes');
let price = document.getElementById('price');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let count = document.getElementById('count');
let catogary = document.getElementById('catogary');
let total = document.getElementById('total');
let create = document.getElementById('create');
let mood = 'create';
let tep;



function getTotal() {
    if (price.value != 0) {
        let reslte = (+ads.value + +taxes.value + +price.value + +catogary.value) - +discount.value;
        total.innerHTML = +reslte;
        total.style.backgroundColor = '#040';
    }
    else {
        total.innerHTML = 0;
        total.style.backgroundColor = 'red';
    }
}

let dataPro;

if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product);

} else {
    dataPro = [];
}



create.onclick = function () {
    let newProduct = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        catogary: catogary.value.toLowerCase(),
    }
    if (title.value != '' && price.value != 0 && catogary.value != '' && newProduct.count < 100) {
        if (mood === 'create') {
            if (newProduct.count > 1) {
                for (let i = 0; i < newProduct.count; i++) {
                    dataPro.push(newProduct);
                }
            } else {
                dataPro.push(newProduct);
            }
        } else {
            dataPro[tep] = newProduct;
            mood = 'create';
            create.innerHTML = 'create';
            count.style.display = 'block';


        }
        clearData();
    }
    localStorage.setItem('product', JSON.stringify(dataPro))

    showData();
}

function clearData() {
    price.value = 0;
    title.value = '';
    taxes.value = 0;
    ads.value = 0;
    discount.value = 0;
    total.innerHTML = 0;
    count.value = '';
    catogary.value = '';

}


function showData() {

    getTotal();
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table += `
            <tr>
                <td>${i + 1}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].catogary}</td>
                <td><button onclick=" updeteData(${i})" id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
            </tr>
            `

    }
    document.getElementById('tbody').innerHTML = table;
    let btnDeleteAll = document.getElementById('deleteAll')
    if (dataPro.length > 0) {
        btnDeleteAll.innerHTML = `
        <button onclick=" deleteAll() ">delete All(${dataPro.length})</button>
        `

    } else {
        btnDeleteAll.innerHTML = '';
    }
}
showData();



function deleteData(i) {

    dataPro.splice(i, 1);
    localStorage.product = JSON.stringify(dataPro);
    showData();

}

function deleteAll() {
    localStorage.clear();
    dataPro.splice(0);
    showData();

}


function updeteData(i) {
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    getTotal();
    count.style.display = 'none';
    catogary.value = dataPro[i].catogary;
    create.innerHTML = 'Update';
    mood = 'Update';
    tep = i;
    scroll({
        top: 0,
        behavior: "smooth",

    })
}
// search
let searchMood = 'title';
function getSearchMood(id) {
    let search = document.getElementById('search');
    if (id == 'searchTitle') {
        searchMood = 'title';
    } else {
        searchMood = 'catogary';
    }
    search.placeholder = 'search By ' + searchMood;
    search.focus();
    search.value = '';
    showData();
}

function searchData(value) {
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        if (searchMood == 'title') {
            if (dataPro[i].title.includes(value.toLowerCase())) {
                table += `
            <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].catogary}</td>
                <td><button onclick=" updeteData(${i})" id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
            </tr>
            `

            }

        } else {
            if (dataPro[i].catogary.includes(value)) {
                table += `
            <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].catogary}</td>
                <td><button onclick=" updeteData(${i})" id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
            </tr>
            `

            }
        }
    }
    document.getElementById('tbody').innerHTML = table;
}



