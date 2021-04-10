var name = 'world!';

function abc(){
  if (typeof name === 'undefined') {
    let name = 'Jack'
    console.log('Goodbye' + name);
  } 
  else {
    console.log('Hello' + name);
  }
}
abc();
