function quote(){
	//Math.seedrandom();
	var num = Math.floor((Math.random() * 19) + 1);
	document.getElementById("quote").innerHTML = quotes[num];
	document.getElementById("author").innerHTML = "by " + authors[num];
}
var quotes = [
"Don’t wish it was easier, wish you were better. Don’t wish for less problems, wish for more skills. Don’t wish for less challenge, wish for more wisdom.",
"If you're afraid - don't do it, - if you're doing it - don't be afraid!",
"It always seems impossible until it is done.",
"Sometimes we need to lose the small battles in order to win the war.",
"Success is nothing more than a few simple disciplines, practiced every day.",
"Setting goals is the first step in turning the invisible into the visible.",
"Practice like you've never won. Perform like you've never lost.",
"If you quit once, it becomes a habit. Don't quit!",
"It's hard to beat a person who never gives up.",
"Remember that sometimes not getting what you want is a beautiful stroke of luck.",
"If my mind can conceive it and my heart can believe it, then I can achieve it.",
"Never interrupt your enemy when he is making a mistake.",
"There are plenty of obstacles in your path. Don't allow yourself to become one of them.",
"Never lie to someone who trusts you, and never trust someone who lies to you.",
"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
"The bad news is time flies. The good news is you're the pilot.",
"Time is what we want most, but what we use worst.",
"We are all apprentices in a craft where no one ever becomes a master.",
"When you cannot do what you have always done, then you only do what matters most.",
"Always, always pursue happiness."
];
var authors = [
"Jim Rohn",
"Genghis Khan",
"Nelson Mandela",
"Sun Tzu",
"Jim Rohn",
"Tony Robbins",
"Anonymous",
"Michael Jordan",
"Babe Ruth",
"Dalai Lama",
"Muhammad Ali",
"Sun Tzu",
"Ralph Marston",
"Anonymous",
"Aristotle",
"Michael Altshuler",
"William Penn",
"Ernest Hemingway",
"Robert D. Hales",
"Chris Gardner"
];