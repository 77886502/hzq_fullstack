function duplicateCount(word) {
    // es6里的定义的新的数据结构有哪些
    let map = new Map(); //  es6 提供的数据结构 HashMap 
    // key => value for O(n) -> O(1) Redis ElasticSearch
    for(let char of word){
    if(map.has(char)){
      map.set(char,map.get(char)+1);
    }
    else{
      map.set(char,1);
    }
  }
    return map;
}
console.log(duplicateCount('aadsdjfwuhh'));