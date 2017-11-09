//bread and butter while palying with JS at frontend is select and modify or trun on and off css styles
//selecting the elements
var players = document.querySelectorAll('p button');	
var display = document.querySelectorAll('h1 span');
var num = document.querySelector('input[type = Number]');
var round = document.querySelector('p span');
var resetButton = document.querySelector('#reset');

//accumulators
var score = 0;
var winningScore = 0;
var reset = false;

//reset function
function resetValue(){
	scoreP1 = 0;
	scoreP2 = 0;
	//playing 2 players
	display[0].textContent = score;
	display[1].textContent = score;
	display[0].classList.remove('winner');	//.css style
	display[1].classList.remove('winner');
	reset = false;
}

//reset button
resetButton.addEventListener('click', function(){
	winningScore = 0;	//to erase the memory
	num.value = 0;		
	round.textContent = 0; 
	resetValue();
});

num.addEventListener('change', function(){
	round.textContent = num.value;	//this.value
	winningScore = Number(num.value);
	resetValue();
	//para.classList.add('play');
	});	

//adding our players logic
for(let i=0; i<players.length;i++){		
	player[i].addEventListener('click', function(){
		if(!reset ){		
			if(score<winningScore){
				score++;
				display[i].textContent = scoreP1;
			}	
		}	
		if(score === winningScore && winningScore !== 0){
			display[i].classList.add('winner');
			reset = true;
		}		
	});
}

