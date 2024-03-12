const data = [
    {
        "name": "Aries",
        "audio": "placeholder",
        "background": "#BDD8F6",
        "fruit": "pineapple",
        "image": "assets/images/svg/pineapple.svg"
    },
    {
        "name": "Taurus",
        "audio": "placeholder",
        "background": "#DFF4C3",
        "fruit": "cherry",
        "image": "assets/images/svg/cherries.svg"
    },
    {
        "name": "Gemini",
        "audio": "placeholder",
        "background": "#F6BDBD",
        "fruit": "kiwi",
        "image": "assets/images/svg/kiwi.svg"
    },
    {
        "name": "Cancer",
        "audio": "placeholder",
        "background": "#A6AFE1",
        "fruit": "lemon",
        "image": "assets/images/svg/lemon.svg"
    },
    {
        "name": "Leo",
        "audio": "placeholder",
        "background": "#C3F4F2",
        "fruit": "strawberry",
        "image": "assets/images/svg/strawberry.svg"
    },
    {
        "name": "Virgo",
        "audio": "placeholder",
        "background": "#F2E7C2",
        "fruit": "mango",
        "image": "assets/images/svg/mango.svg"
    },
    {
        "name": "Libra",
        "audio": "placeholder",
        "background": "#BDD8F6",
        "fruit": "apple",
        "image": "assets/images/svg/apple.svg"
    },
    {
        "name": "Scoprio",
        "audio": "placeholder",
        "background": "#DFF4C3",
        "fruit": "peach",
        "image": "assets/images/svg/peach.svg"
    },
    {
        "name": "Sagittarius",
        "audio": "placeholder",
        "background": "#F2E7C2",
        "fruit": "grape",
        "image": "assets/images/svg/grapes.svg"
    },
    {
        "name": "Capricorn",
        "audio": "placeholder",
        "background": "#A6AFE1",
        "fruit": "banana",
        "image": "assets/images/svg/banana.svg"
    },
    {
        "name": "Aquarius",
        "audio": "placeholder",
        "background": "#C3F4F2",
        "fruit": "watermelon",
        "image": "assets/images/svg/watermelon.svg"
    },
    {
        "name": "Pisces",
        "audio": "placeholder",
        "background": "#F6BDBD",
        "fruit": "blueberry",
        "image": "assets/images/svg/blueberry.svg"
    }
];

function dateValidation(month, day) {
    let dateCheck
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dateCheck = day <= 31;
            break;
        case 2:
            dateCheck = day <= 29;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dateCheck = day <= 30;
            break
    }
    return dateCheck;
}

function showFruit(fruit) {
    //not the simplest way but it works (I hope)
    let selection;
    const divs = document.querySelectorAll('.fruitCard');
    divs.forEach((div) => {
        if(div.id === fruit) {div.classList.add('selected')}
        else {div.classList.remove('selected')};
    })
    //sound
}

//Create content
let content = document.getElementById('content');
//make content take up remaining height because i'm fed up with css
content.style.height = window.innerHeight - 80 + 'px';

data.forEach((sign) => {
    const div = document.createElement('div');
    div.id = sign.fruit;
    div.classList.add('fruitCard');
    div.style.backgroundColor = sign.background;
    content.appendChild(div);
    const img = new Image();
    img.setAttribute('src', sign.image);
    div.appendChild(img);

    //doesn't work
    // div.addEventListener('click', showFruit(div.id), false);
});

//Form Submission
const form = document.querySelector('form');
const errorList = document.querySelector('.errors');

function handleSubmit(event) {
    event.preventDefault();
    const month = parseInt(document.getElementById('monthSelect').value);
    const day = parseInt(document.getElementById('daySelect').value);
    const errors = [];
    if (!dateValidation(month, day)) {
        errors.push('Please input a valid date');
    }
    if (errors.length) {
        errors.forEach((error) => {
            const li = document.createElement('li');
            const text = document.createTextNode(error);

            li.appendChild(text);
            console.log('errors', errors);
            errorList.appendChild(li);
            errorList.hidden = 0;
        });
        return false;
    } else {
        errorList.hidden = 1;
        errorList.innerHTML = '';
    }

    //Get sign from month and day
    let astrologicalSign;
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        astrologicalSign = 'Capricorn'
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        astrologicalSign = 'Sagittarius'
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        astrologicalSign = 'Scorpio'
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        astrologicalSign = 'Libra'
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        astrologicalSign = 'Virgo'
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        astrologicalSign = 'Leo'
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        astrologicalSign = 'Cancer'
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        astrologicalSign = 'Gemini'
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        astrologicalSign = 'Taurus'
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        astrologicalSign = 'Aries'
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        astrologicalSign = 'Pisces'
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        astrologicalSign = 'Aquarius'
    }

    //get fruit from sign
    let fruit;
    data.forEach((sign) => {
        if (sign.name === astrologicalSign) {
            fruit = sign.fruit
        }
    });
    showFruit(fruit);
}

if (form) {
    document.getElementById('inputForm').addEventListener('submit', handleSubmit, false);
}