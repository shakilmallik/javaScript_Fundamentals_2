const allUsers= ["Mithun", "Shakil", "Anowar", "Mallik", "John"];

function isUserPresent(user){
    if(allUsers.includes(user)){
        console.log(`yes ${user} is a valid user`);
        return true;
    }
    else {
        console.log(`No, ${user} is not a valid user`);
        return true;
    }
}

isUserPresent("Mithun");
isUserPresent("Someone");