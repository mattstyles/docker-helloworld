
var quotes = [
    'Simplicity if prerequisite for reliability',
    'Object-oriented programming is an exceptionally bad idea',
    'It is impossible to sharpen a pencil with a blunt axe',
    'Science is a differential equation',
    'Machines take me by surprise with great frequency',
    'The internet could be a very positive step towards education, organisation and participation in a meaningful society',
    'I do not fear computers, I fear the lack of them',
    'The true delight is in the finding out rather than the knowing',
    'Never let your sense of morals get in the way of doing what is right'
]

var el = document.querySelector( '.js-quote' )
el.innerHTML = quotes[ ~~( Math.random() * quotes.length ) ]
