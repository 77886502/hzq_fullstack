// Human readable duration format
function formatDuration (seconds) {
    if(seconds==0)
        return "now";
      var time = [];
      var times = ["year","day","hour","minute","second"];
      time[0] = Math.floor(seconds/31536000);
      time[1] = Math.floor(seconds%31536000/86400);
      time[2] = Math.floor(seconds%86400/3600);
      time[3] = Math.floor(seconds%3600/60);
      time[4] = Math.floor(seconds%60);
      for(let i=0; i<time.length; i++)
      {
        if(time[i]>=2){
          time[i] = time[i]+" "+times[i]+"s";
        }
        else if(time[i]>0){
          time[i] = time[i]+" "+times[i];
        }
        else{
          time.splice(i,1);
          times
          i--;
        }
      }
      time = time.join(", ").split("");
      for(let i=time.length-6; i>=0; i--)
      {
        if(time[i]==",")
        {
          time[i] = " and";
          break;
        }
      }
      return time.join("");
  }
  console.log(formatDuration(6372030));