function uniqueCharactersCheck(inputString){
    const charSet = new Set();

    for(const char of inputString){
        if(charSet.has(char)){
            console.log("the input string contains duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("The input string contains only unique characters");
    return true;
}

uniqueCharactersCheck("Mithun")
uniqueCharactersCheck("anurag")