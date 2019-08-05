var quotes=[
	'There are still many causes worth sacrificing for, so much history yet to be made.'
	'I never cut class. I loved getting A\’s, I liked being smart. I liked being on time. I thought being smart is cooler than anything in the world.'
	'Whether you come from a council estate or a country estate, your success will be determined by your own confidence and fortitude.'
	'If my future were determined just by my performance on a standardized test, I wouldn\'t be here. I guarantee you that.'
	'The problem is when that fun stuff becomes the habit. And I think that\'s what\'s happened in our culture. Fast food has become the everyday meal.'
	'Together, we can help make sure that every family that walks into a restaurant can make an easy, healthy choice.'
	'The realities are that, you know, as a black man, you know, Barack can get shot going to the gas station, you know.'
	'And let\'s be clear: It\'s not enough just to limit ads for foods that aren\'t healthy. It\'s also going to be critical to increase marketing for foods that are healthy.'


]

function newQuote(){
	var randomNumber=Math.floor(Math.random()*(quotes.length));
	document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}

