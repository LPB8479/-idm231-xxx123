const data = [
    {
        "name": "Aries",
        "audio": "assets/audio/tone01.mp3",
        "background": "#BDD8F6",
        "fruit": "Pineapple",
        "image": "assets/images/png/pineapple.png"
    },
    {
        "name": "Taurus",
        "audio": "assets/audio/tone02.mp3",
        "background": "#DFF4C3",
        "fruit": "Cherry",
        "image": "assets/images/png/cherries.png"
    },
    {
        "name": "Gemini",
        "audio": "assets/audio/tone03.mp3",
        "background": "#F6BDBD",
        "fruit": "Kiwi",
        "image": "assets/images/png/kiwi.png"
    },
    {
        "name": "Cancer",
        "audio": "assets/audio/tone04.mp3",
        "background": "#A6AFE1",
        "fruit": "Lemon",
        "image": "assets/images/png/lemon.png"
    },
    {
        "name": "Leo",
        "audio": "assets/audio/tone05.mp3",
        "background": "#C3F4F2",
        "fruit": "Strawberry",
        "image": "assets/images/png/strawberry.png"
    },
    {
        "name": "Virgo",
        "audio": "assets/audio/tone06.mp3",
        "background": "#F2E7C2",
        "fruit": "Mango",
        "image": "assets/images/png/mango.png"
    },
    {
        "name": "Libra",
        "audio": "assets/audio/tone07.mp3",
        "background": "#BDD8F6",
        "fruit": "Apple",
        "image": "assets/images/png/apple.png"
    },
    {
        "name": "Scoprio",
        "audio": "assets/audio/tone08.mp3",
        "background": "#DFF4C3",
        "fruit": "Peach",
        "image": "assets/images/png/peach.png"
    },
    {
        "name": "Sagittarius",
        "audio": "assets/audio/tone09.mp3",
        "background": "#F2E7C2",
        "fruit": "Grape",
        "image": "assets/images/png/grapes.png"
    },
    {
        "name": "Capricorn",
        "audio": "assets/audio/tone10.mp3",
        "background": "#A6AFE1",
        "fruit": "Banana",
        "image": "assets/images/png/banana.png"
    },
    {
        "name": "Aquarius",
        "audio": "assets/audio/tone11.mp3",
        "background": "#C3F4F2",
        "fruit": "Watermelon",
        "image": "assets/images/png/watermelon.png"
    },
    {
        "name": "Pisces",
        "audio": "assets/audio/tone12.mp3",
        "background": "#F6BDBD",
        "fruit": "Blueberry",
        "image": "assets/images/png/blueberry.png"
    }
];

function dateValidation(event) {
    const monthsWith30 = [4, 6, 9, 11];
    const option30 = document.querySelector('[value="30"]');
    const option31 = document.querySelector('[value="31"]');
    const month = parseInt(event.target.value);
    if (month === 2) {
        option30.style.display = 'none';
        option31.style.display = 'none';
    } else if (monthsWith30.includes(month)) {
        option30.style.display = 'block';
        option31.style.display = 'none';
    } else {
        option30.style.display = 'block';
        option31.style.display = 'block';
    }
}

function showFruit(fruit) {
    document.querySelectorAll('.fruitCard').forEach((div) => {
        if (div.id === fruit) {
            div.classList.add('selected');
            div.style.width = window.innerWidth - 1100 + 'px';
        }
        else {
            div.classList.remove('selected');
            div.style.width = '100px';
        };
    })
    document.getElementById('help').style.display = 'none'

    //audio
    let audioSrc;
    data.forEach((sign) => {
        if (sign.fruit === fruit) {
            audioSrc = sign.audio
        }
    });
    const audioElement = new Audio(audioSrc);
    const audioPlayer = document.getElementById('audioPlayer');

    function playAudio(audioElement, src) {
        if (audioElement && !audioElement.paused) {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
        audioElement.src = src;
        audioElement.play();
    }

    audioElement?.addEventListener('canplaythrough', (event) => {

            if (audioPlayer !== null) {
                playAudio(audioPlayer, audioSrc);
            }
    });

}
function reset() {
    divs = document.querySelectorAll('.fruitCard').forEach((div) => {
        div.style.width = '100px';
        if (div.classList.contains('selected')) {
            div.classList.remove('selected');
        }
    })
    document.getElementById('help').style.display = 'block';
    document.getElementById('monthSelect').selectedIndex = 0;
    document.getElementById('daySelect').selectedIndex = 0;
}

//Create content
//make content take up remaining height because i'm fed up with css
document.getElementById('content').style.height = window.innerHeight - 80 + 'px';

let fruitsDiv = document.getElementById('fruits');
data.forEach((sign) => {
    //create div
    const div = document.createElement('div');
    div.id = sign.fruit;
    div.classList.add('fruitCard');
    div.style.backgroundColor = sign.background;
    fruitsDiv.appendChild(div);

    //create text label
    const para = document.createElement('p');
    para.textContent = sign.fruit;
    para.classList.add('fruitLabel');
    div.appendChild(para);

    //create image
    const img = new Image();
    img.setAttribute('src', sign.image);
    div.appendChild(img);
    div.addEventListener('click', () => showFruit(sign.fruit), false)
});

//Update form for month selected
const monthSelect = document.getElementById('monthSelect');
monthSelect.addEventListener('change', (event) => dateValidation(event), false);

//Form Management
const form = document.querySelector('form');

function handleSubmit(event) {
    //error check
    event.preventDefault();
    const month = parseInt(document.getElementById('monthSelect').value);
    const day = parseInt(document.getElementById('daySelect').value);

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

//help button
document.getElementById('info').addEventListener('click', reset, false);