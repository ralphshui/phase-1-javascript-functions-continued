function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(y = "*"){
    return function (x="special"){
        return `You are ${y}${x}${y}!`;
    } 
}