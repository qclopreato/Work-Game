function balanceFunction(){
    if (localStorage.getItem(`saveMoney`) && localStorage.getItem(`saveEnergy`) && localStorage.getItem(`saveTime`) && localStorage.getItem(`drinkTime`)){
        saveMoney = JSON.parse(localStorage.getItem(`saveMoney`));
        saveEnergy = JSON.parse(localStorage.getItem(`saveEnergy`));
        saveTime = JSON.parse(localStorage.getItem(`saveTime`));
        drinkTime = JSON.parse(localStorage.getItem(`drinkTime`));
        document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`money_balance`).style.color = `green`;
        document.getElementById(`energy_balance`).innerHTML = saveEnergy.count + ` Energy`;
        document.getElementById(`energy_balance`).style.color = `red`;
        document.getElementById(`time_balance`).innerHTML = Math.round(saveTime.count * 100)/100 + ` second(s)`;
        document.getElementById(`time_balance`).style.color = `#cccc00`;
    } else {
        document.getElementById(`money_balance`).innerHTML = `$0`;
        document.getElementById(`money_balance`).style.color = `green`;
        document.getElementById(`energy_balance`).innerHTML = `0 Energy`;
        document.getElementById(`energy_balance`).style.color = `red`;
        document.getElementById(`time_balance`).innerHTML = `1 second(s)`
        document.getElementById(`time_balance`).style.color = `#cccc00`;
    }
}
