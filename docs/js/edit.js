//var edge = 5;
var letters = [];
var gameplace = document.getElementById('gameplace');
var result = document.getElementById('result');

function generator(edge){
  letters = []
  for (var i= 0; i< (edge*edge); i++){
	var letter = 0
	letters.push(letter)
  }
  genArea(letters,edge);
}
var subarray = []; //массив в который будет выведен результат.
function pretty(letters,size){
	for (let i = 0; i < Math.ceil(letters.length/size); i++){
		subarray[i] = letters.slice((i*size), (i*size) + size);
	}
	return subarray
}
function genArea(letters,edge){
    for (var L= 0; L< letters.length; L++){
		var divbtn = document.createElement('DIV');        
			(L+1) % edge == 0 ? divbtn.className= 'endCell' : divbtn.className= 'cell';
			divbtn.id= 'C'+L;
			divbtn.dataset.number= L;
			divbtn.style.zIndex = '10';
			divbtn.Letter = letters[L]
			divbtn.LetterCount=L;
		gameplace.appendChild(divbtn);
    }
	Eventer(edge)
}
document.getElementById('qrEdge').addEventListener('change', cleaner);
function cleaner(event) {
	subarray = []
	var edge = event.target.value
	while(gameplace.firstChild){
		gameplace.removeChild(gameplace.firstChild);
	}	
	var edge = document.getElementById('qrEdge').value;
	generator(parseInt(edge))
  }
//
function Eventer(edge){
	const childern = gameplace.childNodes;
	childern.forEach(div => {
		div.addEventListener("click", function(){
			letters[this.dataset.number]==0 ? letters[this.dataset.number] = 1 : letters[this.dataset.number] = 0
			result.innerHTML = JSON.stringify(pretty(letters,edge))
			switch(this.className){
				case 'cell': this.className = 'cell activeCell'; break;
				case 'endCell': this.className = 'endCell activeCell';break;
				case 'cell activeCell': this.className = 'cell';break;
				case 'endCell activeCell': this.className = 'endCell';break;
			}
		})
	});
}
//
 	  
generator(5);

function send() {
	async function postData(url = '', data = {}) {
		// Default options are marked with *
		const response = await fetch(url, {
		  method: 'POST', // *GET, POST, PUT, DELETE, etc.
		  mode: 'cors', // no-cors, *cors, same-origin
		  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		  credentials: 'same-origin', // include, *same-origin, omit
		  headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		  },
		  redirect: 'follow', // manual, *follow, error
		  referrerPolicy: 'no-referrer', // no-referrer, *client
		  body: JSON.stringify(data) // body data type must match "Content-Type" header
		});
		return await response.json(); // parses JSON response into native JavaScript objects
	  }
	  
	  postData('/post', subarray)
		.then((data) => {
		  console.log(data); // JSON data parsed by `response.json()` call
		});	
}
const el = document.getElementById("send");
el.addEventListener("click", send, false);