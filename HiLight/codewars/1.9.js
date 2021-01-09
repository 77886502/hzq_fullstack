// Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
// 字符串 ---> 数组   数组 ---> 字符串
function DNAStrand(dna){
    dna=dna.split("");
    var str =new Array;
    for(let i=0; i<dna.length; i++)
    {
      if(dna[i]=='A')
        str[i]='T';
      if(dna[i]=='C')
        str[i]='G';
      if(dna[i]=='G')
        str[i]='C';
      if(dna[i]=='T')
        str[i]='A';
    }
    str = str.join("");
    return str;
  }
  console.log(DNAStrand('ACGT'));