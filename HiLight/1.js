function rot13(message){
    message = [...message];
    for(let i=0; i<message.length; i++)
    {
        if(/[a-z|A-Z]/.test(message[i])){
            if(message[i].charCodeAt()<=77)
                message[i] = String.fromCharCode(message[i].charCodeAt()+13);
            else if(message[i].charCodeAt()<=90)
                message[i] = String.fromCharCode(message[i].charCodeAt()-13);
            else if(message[i].charCodeAt()<=109)
                message[i] = String.fromCharCode(message[i].charCodeAt()+13);
            else 
                message[i] = String.fromCharCode(message[i].charCodeAt()-13);
        }
    }
    return message.join("");
}
console.log(rot13('test'));