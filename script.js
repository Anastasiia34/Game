//модальное окно
$(document).ready(function(){
	$('body').toggle(1000);
})

$('#twoPlayers, #againstComp').click(function () {
	$('#modal, #overlay, button').fadeOut('slow')
});


var turn = 0;
var win = false;


//проверка
var all	= $('.block');
function check() {
    var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]   
    ];    
    for (var j = 0; j < winningCombinations.length; j++) {
        var wc = winningCombinations[j];
        if (all[wc[0]].innerHTML == all[wc[1]].innerHTML && 
        	all[wc[1]].innerHTML == all[wc[2]].innerHTML && 
        	all[wc[0]].innerHTML != '') {
        	win = true;
            alert( all[wc[0]].innerHTML + ' WON!');
            location.reload()
        }
    }
} 
function againstComp(){
	//игра:
	$('#game').click(function () {
		if (event.target.innerHTML == ''){
			event.target.innerHTML = 'X';
			check();
			if(win === false){
				comp()}
			}
			
	});
	//игра компьютера:
	function comp(){
		p = Math.floor(Math.random()*9);
		if (all[p].innerHTML === ''){
		 	all[p].innerHTML='O';
			check();
		}
		else if((all[0].innerHTML!='')&&(all[1].innerHTML!='')&&
			(all[2].innerHTML!='')&&(all[3].innerHTML!='')&&
			(all[4].innerHTML!='')&&(all[5].innerHTML!='')&&
			(all[6].innerHTML!='')&&(all[7].innerHTML!='')&&
			(all[8].innerHTML!='')){
			location.reload()
		}
		else{
			comp()
		}
	}

}
//2 игрока:
function twoPlayers(){
	$('#game').click(function () {
	if ((turn%2 == 0) && (event.target.innerHTML == '')){
		event.target.innerHTML = 'X';
		check();
		if(win == false){
			turn++
		}
	}
	else if(event.target.innerHTML == ''){
		event.target.innerHTML = 'O';
		check();
		if(win == false){
			turn++
		}
	}
		
});
}

