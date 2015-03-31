
angular
   .module('dataBindingApp')
   .controller('MainController', MainController);

function MainController($timeout) {
   var self = this;
   self.setPiece = setPiece;
   self.checkVertical = checkVertical;
   self.winningLine = "dude";
   self.winStatement = "Winner!";
   self.showWinButton = false;
   self.showWinLine = false;
   self.clearTheBoard = clearTheBoard;
   self.clearTheBoardButton = clearTheBoardButton;


   self.squaresList = [
       {circle: false, x: false},
       {circle: false, x: false},
       {circle: false, x: false},
       {circle: false, x: false},
       {circle: false, x: false},
       {circle: false, x: false},
       {circle: false, x: false},
       {circle: false, x: false},
       {circle: false, x: false}
   ]; 

   self.wins = [
       {circle: false, x: false},
       {circle: false, x: false},
       {circle: false, x: false}
   ]; 

   self.win = false;
   self.classy = "win1";
   self.winUrl = "";



   var count = 0;


   function finalWin () {
   		self.showWinButton = true;
   }

   function clearTheBoardButton() {

   		for (var i = 0; i < 9; i ++) {
   			self.squaresList[i].circle = false;
   			self.squaresList[i].x = false;

   		}

   		for (var i = 0; i < 3; i ++) {
   			self.wins[i].circle = false;
   			self.wins[i].x = false;
   			console.log('you cleared ');

   		}

   		self.win = false;
   		self.winningLine = "";
   		self.showWinLine = false;
   		self.winUrl = "";
   		count = 0;
   		console.log(self.win);
   		self.showWinButton = false;

   }

   function setPiece (i) {
   		
	   		if ((self.squaresList[i].circle == false) && (self.squaresList[i].x == false)) {
	   			if (count % 2 == 0) {
		   			count = count + 1;
		   			self.squaresList[i].x = true;
		   		}
		   		else if (count % 1 == 0) {
		   			count = count + 1;
		   			self.squaresList[i].circle = true;
		   		}
   			}

   			else { console.log('occupied')};

   			checkVertical (i);
   			
   }

   function addCircleScore () {
   		self.winStatement = "Winner!";   			

   		if ((self.wins[0].circle == true) && (self.wins[1].circle == true) && (self.wins[2].circle = true)) {
   			finalWin();
   			console.log('you got here')
   		}

   		else if ((self.wins[0].circle == true) && (self.wins[1].circle == true)) {
   			self.wins[2].circle = true;
   			$timeout(clearTheBoard,3000);
   		}

   		else if ((self.wins[0].circle == true) && (self.wins[1].circle == false)) {
   			self.wins[1].circle = true;
   			$timeout(clearTheBoard,3000);
   		}

   		else if (self.wins[0].circle == false) {
   			self.wins[0].circle =true;
   			$timeout(clearTheBoard,3000);
   		}
   }

    function addXScore () {
    	 self.winStatement = "Winner!";   			

    	if ((self.wins[0].x == true) && (self.wins[1].x == true) && (self.wins[2].x = true)) {
   			finalWin();
   			console.log('you got here')

   		}

   		else if ((self.wins[0].x == true) && (self.wins[1].x == true)) {
   			self.wins[2].x = true;
   			$timeout(clearTheBoard,3000);
   		}

   		else if ((self.wins[0].x == true) && (self.wins[1].x == false)) {
   			self.wins[1].x = true;
   			$timeout(clearTheBoard,3000);
   		}

   		else if (self.wins[0].x == false) {
   			self.wins[0].x = true;
   			$timeout(clearTheBoard,3000);
   		}
   }

   function clearTheBoard () {
   		

   		for (var i = 0; i < 9; i ++) {
   			self.squaresList[i].circle = false;
   			self.squaresList[i].x = false;
   			console.log('you are here');

   		}

   		self.win = false;
   		self.winningLine = "dude";
   		self.showWinLine = false;

   		self.winUrl = "";
   		count = 0;
   		console.log(self.win);

   	// },2000);



   }

  


   function checkVertical () {
   				console.log(count);
   				
 

				//  horizontal wins
				if ( (self.squaresList[0].x == true) && (self.squaresList[1].x == true) && (self.squaresList[2].x == true) ) {
						self.win = ('true');
						self.winningLine = "win1";
						self.showWinLine = true;
						addXScore();
						

					}

				else if ( (self.squaresList[3].x == true) && (self.squaresList[4].x == true) && (self.squaresList[5].x == true) ) {
						self.win = ('true');
						self.winningLine = "win2";
						self.showWinLine = true;
						addXScore();
					}

				else if ( (self.squaresList[6].x == true) && (self.squaresList[7].x == true) && (self.squaresList[8].x == true) ) {
						self.win = ('true');
						self.winningLine = "win3";
						self.showWinLine = true;
						addXScore();
					}

				// vertical wins

				else if ( (self.squaresList[0].x == true) && (self.squaresList[3].x == true) && (self.squaresList[6].x == true) ) {
						self.win = ('true');
						self.winningLine = "win4";
						self.showWinLine = true;
						addXScore();
					}

				else if ( (self.squaresList[1].x == true) && (self.squaresList[4].x == true) && (self.squaresList[7].x == true) ) {
						self.win = ('true');
						self.winningLine = "win5";
						self.showWinLine = true;
						addXScore();
					}

				else if ( (self.squaresList[2].x == true) && (self.squaresList[5].x == true) && (self.squaresList[8].x == true) ) {
						self.win = ('true');
						self.winningLine = "win6";
						self.showWinLine = true;
						addXScore();
					}

				// diagonal wins

				else if ( (self.squaresList[2].x == true) && (self.squaresList[4].x == true) && (self.squaresList[6].x == true) ) {
					self.win = ('true');
					self.winningLine = "win7";
					self.showWinLine = true;
					addXScore();
				}

				else if ( (self.squaresList[0].x == true) && (self.squaresList[4].x == true) && (self.squaresList[8].x == true) ) {
					self.win = ('true');
					self.winningLine = "win8";
					self.showWinLine = true;
					addXScore();
				}


				// circle wins

				else if ( (self.squaresList[0].circle == true) && (self.squaresList[1].circle == true) && (self.squaresList[2].circle == true) ) {
						self.win = ('true');
						self.winningLine = "win1";
						self.showWinLine = true;
						addCircleScore();
					}


				else if ( (self.squaresList[3].circle == true) && (self.squaresList[4].circle == true) && (self.squaresList[5].circle == true) ) {
					console.log('this right here')
					self.win = ('true');
					self.winningLine = "win2";
					self.showWinLine = true;
					addCircleScore();
				}

				else if ( (self.squaresList[6].circle == true) && (self.squaresList[7].circle == true) && (self.squaresList[8].circle == true) ) {
						self.win = ('true');
						self.winningLine = "win3";
						self.showWinLine = true;
						addCircleScore();
					}

				// vertical wins

				else if ( (self.squaresList[0].circle == true) && (self.squaresList[3].circle == true) && (self.squaresList[6].circle == true) ) {
						self.win = ('true');
						self.winningLine = "win4";
						self.showWinLine = true;
						addCircleScore();
					}

				else if ( (self.squaresList[1].circle == true) && (self.squaresList[4].circle == true) && (self.squaresList[7].circle == true) ) {
						self.win = ('true');
						self.winningLine = "win5";
						self.showWinLine = true;
						addCircleScore();
					}

				else if ( (self.squaresList[2].circle == true) && (self.squaresList[5].circle == true) && (self.squaresList[8].circle == true) ) {
						self.win = ('true');
						self.winningLine = "win6";
						self.showWinLine = true;
						addCircleScore();
					}

				// diagonal wins

				else if ( (self.squaresList[2].circle == true) && (self.squaresList[4].circle == true) && (self.squaresList[6].circle == true) ) {
					self.win = ('true');
					self.winningLine = "win7";
					self.showWinLine = true;
					addCircleScore();
				}

				else if ( (self.squaresList[0].circle == true) && (self.squaresList[4].circle == true) && (self.squaresList[8].circle == true) ) {
					self.win = ('true');
					self.winningLine = "win8";
					self.showWinLine = true;
					addCircleScore();
				}

				else if ((count == 9) && (self.win == false)) {
   					self.winStatement = "..Tied!";   			
   					$timeout(clearTheBoard,3000);
   					self.win = ('true');
   				}

				

				// var a = 0;

				// for (var a = 0; a <= 6; a = a + 3) {
				// 	if ( (self.squaresList[a].x == true) && (self.squaresList[a+1].x == true) && (self.squaresList[a+2].x == true) ) {
				// 		console.log(a);
				// 		console.log('you are here');
				// 		self.win = ('true');
				// 	}
				// }

	  	// 		for (var a = 0; a < 3; a ++) {
				// 	if ( (self.squaresList[a].x == true) && (self.squaresList[a+3].x == true) && (self.squaresList[a + 6].x == true) ) {
				// 		console.log('winner');
				// 		self.win = ('true');
				// 	}
				// }

				// for (var a = 0; a < 3; a ++) {
				// 	if ( (self.squaresList[a].x == true) && (self.squaresList[a+4].x == true) && (self.squaresList[a + 8].x == true) ) {
				// 		console.log('winner');
				// 		self.win = ('true');
				// 	}
				// }


		
	}

};

