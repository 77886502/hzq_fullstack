// Human Readable Time
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
function humanReadable(seconds) {
    var h,m,s;
    h = parseInt(seconds/3600);
    m = parseInt(seconds%3600/60);
    s = parseInt(seconds%60);
    if(h<10)
    {
      h = '0'+h;
    }
    if(m<10)
    {
      m = '0'+m;
    }
    if(s<10)
    {
      s = '0'+s
    }
    return h+":"+m+":"+s;
  }
  console.log( humanReadable(60));