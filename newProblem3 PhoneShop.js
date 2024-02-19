function phoneShop(input) {
    let newArr = input.shift().split(', ')
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        let splitCommand = command.split(` - `)
        if (command.includes(`Add`)) {
            if (!newArr.includes(splitCommand[1]))
                newArr.push(splitCommand[1])
        } else if (command.includes(`Remove`)) {
            if (newArr.includes(splitCommand[1])) {
                newArr.splice((newArr.indexOf(splitCommand[1])), 1)
            }
        } else if (command.includes(`Bonus phone`)){
            let bonusSplit=command[0].split(`:`)
            
            let buff = bonusSplit[1];
            if (!newArr.includes(bonusSplit[0])){
            newArr.splice(newArr.indexOf(bonusSplit[0]),0,buff)
           
            }else{
                newArr=newArr
            }
        }else if (command.includes(`Last`)){
            newArr.splice(newArr.indexOf(splitCommand[1]),1)
            newArr.push(splitCommand[1])
        }else{
            break;
        }
    }
    console.log(newArr.join(`, `));
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"]);
phoneShop(["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "End"]);
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"]);