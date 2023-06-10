let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
let out = document.getElementById('out')
let out2 = document.getElementById('out2')
let out3 = document.getElementById('out3')
let out4 = document.getElementById('out4')
let outSum = document.getElementById('summ');
let outExp = document.getElementById('expensive');
let imgUser = document.getElementById('img-user')
const car = {'comp':'Volkswagen', 'mod':'golf' ,'god':'2023'}
btn.onclick = f1
btn2.onclick = f2;
function f1 (){
    for (key in car){
        console.log(car)
    }
out.innerText = 'Компания '+'-----' + car['comp']
out2.innerText= 'Модель' + '-----' + car['mod']
out3.innerText= 'Год производства' + '-----' + car['god']
const img = document.createElement('img');
img.src = '3.png'; 'height(200px)';
document.getElementById('image-container').append(img);
}


function f2(){
    const arr = [
        {pName: 'Чипсы',  qty: '1шт', price: 130},
        {pName: 'Огурцы',  qty: '1шт', price: 80},
        {pName: 'Лук',  qty: '1шт', price: 60},
        {pName: 'Сливки',  qty: '0,5л', price: 90}
    ]; 
    
    let str = '<tr><td>Наименование</td><td>Количество</td><td>Цена</td></tr>';
    
    let sum = arr.reduce((s, i) => s = s + i.price, 0);
    let exp = arr.reduce((acc, curr) => acc.price > curr.price ? acc : curr);

    arr.forEach(el=> {
        str += '<tr><td>' + el.pName + '</td><td>' + el.qty + '</td><td>' + el.price + '</td></tr>'
    });

    out4.innerHTML = str;
    outSum.textContent = 'Всего потратил: ' + sum + 'р';
    outExp.textContent = 'Самая дорогая покупка: ' + exp.price + 'р';
};

