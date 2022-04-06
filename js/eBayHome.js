function balanceFunction(){
    saveMoney = JSON.parse(localStorage.getItem(`saveMoney`));
    saveEnergy = JSON.parse(localStorage.getItem(`saveEnergy`));
    document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
    document.getElementById(`money_balance`).style.color = `green`;
    document.getElementById(`energy_balance`).innerHTML = saveEnergy.count + ` Energy`;
    document.getElementById(`energy_balance`).style.color = `red`;
}
