var quotes = [
	'If You Can Dream It, You Can Do It. - Walt Disney',
	'Have Courage And Be Kind. - Cinderella',
	'Today\'s Special Moments Are Tomorrow\'s Memories - Genie',
	'Just Keep Swimming. - Finding Nemo',
	'All It Takes is Love And Faith - Peter Pan',
	'Ohana Means Family And Family Means No One Gets Left Behind. - Lilo and Stictch',
	'Reach For The Sky. - Toy Story',
	'But I Come Back To The Water No Matter How Hard I Try. - Moana',
	'Remember You\'re The Only One Who Can Fill The World With Sunshine. - Snow White',
	'She Listened To Her Heart Above All The Other Voices. - Ariel',


]


function newQuote() {
	var randomNumber = Math.floor((Math.random())* (quotes.length)); //length of array
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

var timeAnimation = 500;
var quoteDisplay = $('#quoteContainer');
quoteContainer.fade
quoteContainer.fadeIn(timeAnimation);


