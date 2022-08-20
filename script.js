metro = {
    "red": [' Академмістечко', ' Житомирська', ' Святошин', ' Нивки', ' Берестейська', ' Шулявська', ' Політехнічний інститут', ' Вокзальна', ' Університет', ' Театральна', ' Хрещатик', ' Арсенальна', ' Дніпро', ' Гідропарк', ' Лівобережна', ' Дарниця', ' Чернігівська', ' Лісова',],

    "green": [' Сирець', ' Дорогожичі', ' Лук*янівська', ' Золоті ворота', ' Палац спорту', ' Кловська', ' Печерська', ' Дружби народів', ' Видубичі', ' Славутич', ' Осокорки', ' Позняки', ' Харківська', ' Вирлиця', ' Бориспільська', ' Червоний хутір'],

    "blue": [' Героїв Дніпра', ' Мінська', ' Оболонь', ' Почайна', ' Тараса Шевченка', ' Контрактова площа', ' Поштова площа', ' Майдан Незалежності', ' Площа Льва Толстого', ' Олімпійська', ' Палац «Україна»', ' Либідська', ' Деміївська', ' Голосіївська', ' Васильківська', ' Виставковий центр', ' Іподром', ' Теремки'],
}

document.querySelector('.show').onclick = function () {
    let select = document.querySelector('#myselect').value;
    document.querySelector('#out').innerHTML = metro[select];
    // добавление класа для смены цвета
    document.querySelector('#out').className = select;
}

document.querySelector('.u13-reverse').onclick = function () {
    let reverse = '';
    let select = document.querySelector('#myselect').value;
    for (let i = Object.keys(metro[select]).length - 1; i >= 0; i--) {
        reverse += metro[select][i];
        document.querySelector('#out').innerHTML = reverse;
        // добавление класа для смены цвета
        document.querySelector('#out').className = select;
    }
}


document.querySelector('.u14-finde').onclick = function () {
    let select = document.querySelector('#myselect2').value;
    if (select == 'red') {
        document.querySelector('#out').innerHTML = 'Червона';
        // добавление класа для смены цвета
        document.querySelector('#out').className = select;
    } else if (select == 'green') {
        document.querySelector('#out').innerHTML = 'Зелена';
        // добавление класа для смены цвета
        document.querySelector('#out').className = select;
    } else {
        document.querySelector('#out').innerHTML = 'Синя';
        // добавление класа для смены цвета
        document.querySelector('#out').className = select;
    }
}

document.querySelector('.u15-finde').onclick = function () {
    let branch = document.querySelector('#myselect3').value;
    let branch2 = document.querySelector('#myselect4').value;

    let select3 = document.querySelector('#myselect3');
    selIndex3 = select3.selectedIndex;
    let select4 = document.querySelector('#myselect4');
    selIndex4 = select4.selectedIndex;

    if (branch == branch2) {
        document.querySelector('#out').innerHTML = Math.abs(selIndex4 - selIndex3) - 1;
        // добавление класа для смены цвета
        document.querySelector('#out').className = 'gold';
    } else {
        document.querySelector('#out').innerHTML = "Ваші станції знаходяться на різних гілках метро";
    }
}