// 剪刀 石头 布的游戏 Tencent
// 两个人玩 1. 用户输入 node 输入？ 程序玩这个游戏 rock
// 冯诺依曼 I/O
// process
let playerAction = process.argv[2];
console.log(process.argv);

// 2.对手
if( ['rock','paper','scissor'].indexOf(playerAction) == -1  ){
    console.log('请输入正确的');
    return ;
} else{
    var computerAction;
    var random = Math.random()*3;
    if(random < 1){
        computerAction = 'rock';
        console.log('电脑出了石头');     
    }else if(random > 2)
    {
        computerAction = 'scissor';
        console.log('电脑出了剪刀');
    }else{
        computerAction = 'paper';
        console.log('电脑出了布');
    }
}

if(computerAction == playerAction){
    console.log('平局');
}else if(
    (computerAction == 'rock' && playerAction =='scissor')||
    (computerAction == 'scissor' && playerAction =='paper')||
    (computerAction == 'paper' && playerAction =='rock')
){
    console.log('你输了');
}else{
    console.log('你赢了');
}