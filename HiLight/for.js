const Mary = {
    name: "mary",
    sex: "women",
    data: "2020-1-4"
}
var txt = " ";
for(date in Mary)
{
    txt=txt+" "+date;
}
console.log(txt);