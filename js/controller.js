
angular
   .module('dataBindingApp')
   .controller('MainController', MainController);

function MainController() {
   var self = this;
   self.setPiece = setPiece;
   self.checkVertical = checkVertical;
   self.winningLine = "dude";


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
       {circle: true, x: false},
       {circle: true, x: false},
       {circle: false, x: false}
   ]; 

   self.win = false;
   self.classy = "win1";
   self.winUrl = "";


   var count = 0;

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


   function checkVertical () {
 

				//  horizontal wins
				if ( (self.squaresList[0].x == true) && (self.squaresList[1].x == true) && (self.squaresList[2].x == true) ) {
						self.win = ('true');
						self.winningLine = "win1";
						
					}

				else if ( (self.squaresList[3].x == true) && (self.squaresList[4].x == true) && (self.squaresList[5].x == true) ) {
						self.win = ('true');
						self.winningLine = "win2";
						
					}

				else if ( (self.squaresList[6].x == true) && (self.squaresList[7].x == true) && (self.squaresList[8].x == true) ) {
						self.win = ('true');
						self.winningLine = "win3";
						
					}

				// vertical wins

				else if ( (self.squaresList[0].x == true) && (self.squaresList[3].x == true) && (self.squaresList[6].x == true) ) {
						self.win = ('true');
						self.winningLine = "win4";
						
					}

				else if ( (self.squaresList[1].x == true) && (self.squaresList[4].x == true) && (self.squaresList[7].x == true) ) {
						self.win = ('true');
						self.winningLine = "win5";
						
					}

				else if ( (self.squaresList[2].x == true) && (self.squaresList[5].x == true) && (self.squaresList[8].x == true) ) {
						self.win = ('true');
						self.winningLine = "win6";
						
					}

				// diagonal wins

				else if ( (self.squaresList[2].x == true) && (self.squaresList[4].x == true) && (self.squaresList[6].x == true) ) {
					self.win = ('true');
					self.winningLine = "win7";
					
				}

				else if ( (self.squaresList[0].x == true) && (self.squaresList[4].x == true) && (self.squaresList[8].x == true) ) {
					self.win = ('true');
					self.winningLine = "win8";
					
				}


				// circle wins

				else if ( (self.squaresList[0].circlecircle == true) && (self.squaresList[1].circlecircle == true) && (self.squaresList[2].circlecircle == true) ) {
						self.win = ('true');
						self.winningLine = "win1";
						
					}

				else if ( (self.squaresList[3].circlecircle == true) && (self.squaresList[4].circlecircle == true) && (self.squaresList[5].circlecircle == true) ) {
						self.win = ('true');
						self.winningLine = "win2";
						
					}

				else if ( (self.squaresList[6].circle == true) && (self.squaresList[7].circle == true) && (self.squaresList[8].circle == true) ) {
						self.win = ('true');
						self.winningLine = "win3";
						
					}

				// vertical wins

				else if ( (self.squaresList[0].circle == true) && (self.squaresList[3].circle == true) && (self.squaresList[6].circle == true) ) {
						self.win = ('true');
						self.winningLine = "win4";
					
					}

				else if ( (self.squaresList[1].circle == true) && (self.squaresList[4].circle == true) && (self.squaresList[7].circle == true) ) {
						self.win = ('true');
						self.winningLine = "win5";
						
					}

				else if ( (self.squaresList[2].circle == true) && (self.squaresList[5].circle == true) && (self.squaresList[8].circle == true) ) {
						self.win = ('true');
						self.winningLine = "win6";
						
					}

				// diagonal wins

				else if ( (self.squaresList[2].circle == true) && (self.squaresList[4].circle == true) && (self.squaresList[6].circle == true) ) {
					self.win = ('true');
					self.winningLine = "win7";
					
				}

				else if ( (self.squaresList[0].circle == true) && (self.squaresList[4].circle == true) && (self.squaresList[8].circle == true) ) {
					self.win = ('true');
					self.winningLine = "win8";
					
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

