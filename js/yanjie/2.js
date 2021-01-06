function duplicateCount(word){
    // Map JSONObject
    let map = {};
    let count = 0;
    for(let i=0; i<word.length; i++)
    {   
        let char = word[i];
        if (char in map){
            count++;
        }
        else{
            map[char] = 1
        }
    }
    return count;
}
console.log(duplicateCount('aadsdjfwuhh'));