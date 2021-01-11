// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
function alphabetPosition(text) {
    text = text.split(" ").join("").split("");
    for(let i=0; i<text.length; i++)
    {
      if(text[i].charCodeAt(0)<=90)
      {
        text[i] = text[i].toLowerCase().charCodeAt(0)-96;
      }
      else
      {
        text[i] = text[i].charCodeAt(0)-96;
      }
      if(!(text[i]<=26&&text[i]>=1))
      {  
        text.splice(i,1)
        i--;
      }
    }
    text = text.join(" ");
    return text;
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));