var edge = 5;
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
			divbtn.onclick= function (e){
				switch(this.className){
					case 'cell': this.className = 'cell activeCell'; break;
					case 'endCell': this.className = 'endCell activeCell';break;
					case 'cell activeCell': this.className = 'cell';break;
					case 'endCell activeCell': this.className = 'endCell';break;
				}
				result.innerHTML = JSON.stringify(pretty(letters,edge))
				letters[this.dataset.number]==0 ? letters[this.dataset.number] = 1 : letters[this.dataset.number] = 0
				}
		var t = document.createTextNode('');       
		divbtn.appendChild(t);                       
		gameplace.appendChild(divbtn);
    }
}
document.getElementById('qrEdge').addEventListener('change', cleaner);
function cleaner() {
	while(gameplace.firstChild){
		gameplace.removeChild(gameplace.firstChild);
	}	
	var edge = document.getElementById('qrEdge').value;
	generator(parseInt(edge))
  }

 	  
generator(edge);