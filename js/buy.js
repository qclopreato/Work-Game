function balanceFunction(){
    if (localStorage.getItem(`saveMoney`) && localStorage.getItem(`saveEnergy`) && localStorage.getItem(`saveTime`)){
        saveMoney = JSON.parse(localStorage.getItem(`saveMoney`));
        saveEnergy = JSON.parse(localStorage.getItem(`saveEnergy`));
        saveTime = JSON.parse(localStorage.getItem(`saveTime`));
        document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`money_balance`).style.color = `green`;
        document.getElementById(`energy_balance`).innerHTML = saveEnergy.count + ` Energy`;
        document.getElementById(`energy_balance`).style.color = `red`;
        document.getElementById(`time_balance`).innerHTML = saveTime.count + ` second(s)`;
        document.getElementById(`time_balance`).style.color = `#cccc00`;
    } else {
        document.getElementById(`money_balance`).innerHTML = `$0`;
        document.getElementById(`money_balance`).style.color = `green`;
        document.getElementById(`energy_balance`).innerHTML = `0 Energy`;
        document.getElementById(`energy_balance`).style.color = `red`;
        document.getElementById(`time_balance`).innerHTML = `1 second(s)`
        document.getElementById(`time_balance`).style.color = `#cccc00`;
    }
    if (localStorage.getItem(`old_mouse_disable`)){
        document.getElementById(`buyOldMouse`).style.color = `green`;
        document.getElementById(`buyOldMouse`).innerHTML = `Bought`;
    }
}

document.getElementById(`buyOldMouse`).addEventListener(`click`, function(){
    if (localStorage.getItem(`old_mouse_disable`)){
    } else {
        saveMoney.count -= 25;
        document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
        saveTime.count -= 0.1;
        document.getElementById(`time_balance`).innerHTML = saveTime.count + ` seconds`;
        localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
        localStorage.setItem(`saveTime`, JSON.stringify(saveTime));
        localStorage.setItem(`old_mouse_disable`, true);
        document.getElementById(`buyOldMouse`).style.color = `green`;
        document.getElementById(`buyOldMouse`).innerHTML = `Bought`;
        document.getElementById(`buyOldMouse`).style.pointerEvents = `none`;
    }
});