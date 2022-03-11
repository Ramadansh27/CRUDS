
//**** Create Product ****/
// create product
// get total
// save localstorage
// clear inputs
// count

//**** read Product ****/
//**** Delete Product ****/

//**** Update Product ****/

//**** Search Product ****/

//**** Clean Data ****/

let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

//********// create product ********//
let dataPro;

if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product);
} else {
    dataPro = [];
}
submit.onclick = function () {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }
    dataPro.push(newPro);
    localStorage.setItem('product', JSON.stringify(dataPro));
    clearData();
    showData();
}

//********// get total ********//

function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040'

    }
    else {
        // اول حاجة فضي total
        total.innerHTML = '';
        // غير لونه للاحمر
        total.style.background = '#a00d02'

    }
}

//******** Clear inputs ********//

function clearData() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}


//**** read Product ****/

function showData() {
    let table = `
    <tr>
    <th>id</th>
    <th>title</th>
    <th>price</th>
    <th>taxes</th>
    <th>ads</th>
    <th>discount</th>
    <th>total</th>
    <th>category</th>
    <th>update</th>
    <th>delete</th>
  </tr>
    `;

    for (let i = 0; i < dataPro.length; i++) {
        table += `
       
        <tbody>
        <tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button class="update">update</button></td>
        <td><button class="delete">delete</button></td>
      </tr>
        </tbody>
        
        `
    }

    document.getElementById('tbody').innerHTML = table;
}
showData();










