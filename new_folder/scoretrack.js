//bread and butter while palying with JS at frontend is select and modify or trun on and off
//selecting the elements
var displayP1 = document.querySelector('.score-p1');
var displayP2 = document.querySelector('.score-p2');
var num = document.querySelector('input[type = Number]');
var round = document.querySelector('p span');
var resetButton = document.querySelector('#reset');

//accumulators
var scoreP1 = 0;
var scoreP2 = 0;
var winningScore = 0;
var reset = false;

//reset function
function resetValue(){
	scoreP1 = 0;
	scoreP2 = 0;
	displayP1.textContent = scoreP1;
	displayP2.textContent = scoreP2;
	displayP1.classList.remove('winner');	//.css style
	displayP2.classList.remove('winner');
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
p1.addEventListener('click', function(){
	if(!reset ){		
		if(scoreP1<winningScore){
			scoreP1++;
			displayP1.textContent = scoreP1;
		}	
	}	
		if(scoreP1 === winningScore && winningScore !== 0){
			displayP1.classList.add('winner');
			reset = true;
		}		
});

