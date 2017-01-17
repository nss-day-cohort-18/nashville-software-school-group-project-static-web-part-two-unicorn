//create an array to hold each keypressed
const pressed = [];

//set the secret code
const secretCode = 'corn';

//listen for all keys pressed and run this function taking the ke as its argument
window.addEventListener('keyup', (e) => {
//log it
  console.log(e.key);
//push it to 'pressed'
  pressed.push(e.key);
//splice, counting from the end for the length of secret code, deleting whatever is more than the length of secret code
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
//check if, when joined (with no spaces), it includes secreCode
  if (pressed.join('').includes(secretCode)) {
//show me
    console.log('DING DING!');
 //call this function
    cornify_add();
  }
  console.log(pressed);
});