var points = 0;
var word = "";
var  ids= [];
var findwords = [];
var findwordids = [];
var opponentfindwords = [];
//
function shownotify (text,Noteclass){
var notify =document.getElementById(Noteclass)
notify.style.display ="block" ;
//notify.innerText = text;
setTimeout(hidenotify, 1900);
}
function hidenotify(){ 
  var notifies = document.getElementsByClassName("notify");
  for (var i = 0; i < notifies.length; i++) {
  notifies[i].style.display ="none";
  };
};
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(key) {
    var user=getCookie(key);
    if (user != "") {
        //alert("Welcome again " + user);
        setCookie(user,0, 30);

    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}


function isFinded(word) { return findwords.indexOf(word);} 	

function moreletter(){
    findwords.push(word);
    //findwordids.push(ids);//////////////////////////////////
    points += word.length;
    document.getElementById('points').innerText=points;

}
function nearCheck(id,ids){

var near = false;
edge =  parseInt(edge);

id =  parseInt(id);
iTem = ids[ids.length-2]	
	if (iTem+1 == id) {near = true; console.info(id,iTem);}
	if (iTem-1 == id) {near = true; console.info(id,iTem);}
	if (iTem + edge == id) {near = true; console.info(id,iTem);}
	if (iTem - edge == id) {near = true; console.info(id,iTem);}
if((iTem+1)%edge ==0 && id%edge ==0){near = false; console.info(id,iTem);}
if(iTem%edge ==0 && (id+1)%edge ==0){near = false; console.info(id,iTem);}
if (ids.length==2) {console.log(2)};	
return near;
}

var timeout0 = setTimeout(clear, 2500)

function collectWord(Id,id){


    //clearTimeout(timeout0)
    //ids.push(id);
    word= word+Id

//document.getElementById('word').options[0].text = word;
//document.getElementById('word').options[0].selected = true

}
function listfindedwords(word,findindex){

    var tally  = document.getElementById('gametally')

    while (tally.hasChildNodes()) {
            tally.removeChild(tally.lastChild);
    }
       for( var i =0; i<findwords.length; i++){
        var newWord  = document.createElement('li')
        newWord.innerText = findwords[i];
        newWord.className = 'pure-menu-iTem';
//
tally.insertBefore(newWord,(tally.hasChildNodes())
                            ? tally.childNodes[0]
                            : null);
      };

    var WordsSelect = document.getElementById('word')

    while (WordsSelect.hasChildNodes()) {
            WordsSelect.removeChild(WordsSelect.lastChild);
    }


       for( var i =0; i<findwords.length; i++){
        var newWord  = document.createElement('option')
        newWord.innerText = findwords[i];
        WordsSelect.insertBefore(newWord,(WordsSelect.hasChildNodes())
                            ? WordsSelect.childNodes[0]
                            : null);
WordsSelect.selectedIndex = 0;
}
}

function clear() {
     
    var Cells = document.getElementsByClassName('cell');
    for(var i = 0; i < Cells.length; i++)
    {
        Cells[i].className="cell";
    }
    word = "";
    ids=[];
    var Select = document.getElementById('word');
    var opt = document.createElement('option');
    opt.value = "";
    opt.innerHTML = "";
    opt.selected= true;
    //Select.appendChild(opt);
    //
}

//document.getElementById('clear').onclick = function(){clear()};


function SaveGame_old(){
var link = "/url"
               +'?'+"edge="+edge
               +"&letters="+letters.join('')
               +'&userwordsids='+JSON.stringify(findwordids);
location = link;
}
function SaveGame(){
localStorage.setItem('edge', edge);
localStorage.setItem('letters', letters.join(''));
localStorage.setItem('userwordsids', JSON.stringify(findwordids));
var link = "/url"
               +'?'+"edge="+edge
               +"&letters="+letters.join('')
               +'&userwordsids='+JSON.stringify(findwordids);
location = link;
}

