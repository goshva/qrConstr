var edge = 5;
var letters = [];
var gameplace = document.getElementById('gameplace');
var result = document.getElementById('result');

/////try syllable ///not wrking TODO!
//var syllable = {'б':3585,'в':9080,'г':3225,'д':5685,'ж':2955,'з':2285,'к':5178,'л':9382,'м':4376,'н':7368,'п':4628,'р':11096,'с':7736,'т':12769,'ф':168,'х':1387,'ц':360,'ч':3378,'ш':1423,'щ':1083}
//var Allsyable = 97147;
function isSyllableRoot(char){
	if (char in syllable){
		return true}
	else return false;
}
/////end syllable


function ifexits(variable){
	if (typeof variable == 'undefined') { return null}
	else return variable
}

function generator(edge){
  letters = []
  //gameplace.innerHTML = '';
             

  for (var i= 0; i< (edge*edge); i++){
	var letter = 0
	letters.push(letter)
  }
	genArea(letters,edge);
}
function pretty(letters,size){
	let subarray = []; //массив в который будет выведен результат.
	for (let i = 0; i < Math.ceil(letters.length/size); i++){
		subarray[i] = letters.slice((i*size), (i*size) + size);
	}
	console.log(subarray)
	return subarray
}
function genArea(leters,edge){
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
			result.innerHTML = pretty(letters,edge)
			leters[this.dataset.number]==0 ? leters[this.dataset.number] = 1 : leters[this.dataset.number] = 0
			console.log(letters)

			}
	var t = document.createTextNode('');       
	divbtn.appendChild(t);                       
	gameplace.appendChild(divbtn);
     }
}
document.getElementById('qrEdge').addEventListener('change', myFunction);
function myFunction() {
	while(gameplace.firstChild){
		gameplace.removeChild(gameplace.firstChild);
	}	
	var edge = document.getElementById('qrEdge').value;
	generator(parseInt(edge))
  }

 	  
generator(edge);