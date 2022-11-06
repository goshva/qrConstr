var letters = [];
var gameplace = document.getElementById('gameplace');
var result = document.getElementById('result');

function generator(edge) {
    letters = []
    for (var i = 0; i < (edge * edge); i++) {
        var letter = subarray[i] ? subarray[i] : 0
        letters.push(letter)
    }
    genArea(letters, edge);
}

function pretty(letters, size) {
    for (let i = 0; i < Math.ceil(letters.length / size); i++) {
        subarray[i] = letters.slice((i * size), (i * size) + size);
    }
    return subarray
}
function genArea(letters, edge) {
    for (var L = 0; L < letters.length; L++) {
        var divbtn = document.createElement('DIV');
        (L + 1) % edge == 0 ? divbtn.className = 'endCell' : divbtn.className = 'cell';
        divbtn.id = 'C' + L;
        divbtn.dataset.number = L;
        divbtn.style.zIndex = '10';
        divbtn.Letter = letters[L]
        divbtn.LetterCount = L;
        if (subarray[L] == 1 && divbtn.className == 'cell') {
            divbtn.className = 'cell activeCell'
        }
        if (subarray[L] == 1 && divbtn.className == 'endCell') {
            divbtn.className = 'endCell activeCell'
        }
        gameplace.appendChild(divbtn);
    }
    Eventer(edge)
}

document.getElementById('qrEdge').addEventListener('change', cleaner);
function cleaner(event) {
    subarray = []
    var edge = event.target.value
    while (gameplace.firstChild) {
        gameplace.removeChild(gameplace.firstChild);
    }
    var edge = document.getElementById('qrEdge').value;
    generator(parseInt(edge))
}
//
function Eventer(edge) {
    const childern = gameplace.childNodes;
    childern.forEach(div => {
        div.addEventListener("click", function () {
            letters[this.dataset.number] == 0 ? letters[this.dataset.number] = 1 : letters[this.dataset.number] = 0
            result.innerHTML = letters
            switch (this.className) {
                case 'cell':
                    this.className = 'cell activeCell';
                    break;
                case 'endCell':
                    this.className = 'endCell activeCell';
                    break;
                case 'cell activeCell':
                    this.className = 'cell';
                    break;
                case 'endCell activeCell':
                    this.className = 'endCell';
                    break;
            }
        })
    });
}
document.getElementById("send").addEventListener("click", function (e) {
    e.preventDefault();
    var from = prompt("@?").toLowerCase();
    var token = "5430048154:AAEFptLp8IdbKirOYJzzM3ekyTd2ibVLMNc";
    var chat_id = '190404167';
    var link = `https://goshva.github.io/qrConstr/?${letters}`
    // var link = `http://localhost:1313/?${letters}`
    var msg = `${link} from ${from}`
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${msg}&parse_mode=html`;

    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        window.location.href = link;
    });
})

if (window.location.search !== "" && window.location.search.split("?")[1] !== "") {
    var subarray = window.location.search.split("?")[1];
    subarray = subarray.split(',').join('')
    console.log()
    generator(Math.sqrt(subarray.length), subarray);
} else {
    var subarray = []; // массив в который будет выведен результат.
    generator(5);

}
