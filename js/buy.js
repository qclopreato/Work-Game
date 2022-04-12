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
    if (localStorage.getItem(`old_mouse_disable`)){
        document.getElementById(`buyOldMouse`).style.color = `green`;
        document.getElementById(`buyOldMouse`).innerHTML = `Bought`;
        document.getElementById(`buyOldMouse`).style.pointerEvents = `none`;
    }
    if (localStorage.getItem(`new_mouse_disable`)){
        document.getElementById(`buyNewMouse`).style.color = `green`;
        document.getElementById(`buyNewMouse`).innerHTML = `Bought`;document.getElementById(`buyNewMouse`).style.pointerEvents = `none`;
    }
    if (localStorage.getItem(`tower_disable`)){
        document.getElementById(`buyTower`).style.color = `green`;
        document.getElementById(`buyTower`).innerHTML = `Bought`;
        document.getElementById(`buyTower`).style.pointerEvents = `none`;
    }
    if (localStorage.getItem(`fuel_disable`)){
        document.getElementById(`buyFuel`).style.color = `green`;
        document.getElementById(`buyFuel`).innerHTML = `Bought`;
        document.getElementById(`buyFuel`).style.pointerEvents = `none`;
    }
}

document.getElementById(`ebay`).addEventListener(`click`, function(){
    location.href = `ebay.html`;
});

document.getElementById(`buyOldMouse`).addEventListener(`click`, function(){
    if (localStorage.getItem(`old_mouse_disable`)){
    } else {
        if (saveMoney.count >= 25){
            saveMoney.count -= 25;
            document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
            saveTime.count -= 0.2;
            document.getElementById(`time_balance`).innerHTML = saveTime.count + ` seconds`;
            localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
            localStorage.setItem(`saveTime`, JSON.stringify(saveTime));
            localStorage.setItem(`old_mouse_disable`, true);
            document.getElementById(`buyOldMouse`).style.color = `green`;
            document.getElementById(`buyOldMouse`).innerHTML = `Bought`;
            document.getElementById(`buyOldMouse`).style.pointerEvents = `none`;
        }
        else {
            alert(`You can't afford this!`);
        }
    }
});

document.getElementById(`buyNewMouse`).addEventListener(`click`, function(){
    if (localStorage.getItem(`new_mouse_disable`)){
    } else{
        if (saveMoney.count >= 200){
            saveMoney.count -= 200;
            document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
            saveTime.count -= 0.3;
            document.getElementById(`time_balance`).innerHTML = Math.round(saveTime.count * 100)/100 + ` seconds`;
            localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
            localStorage.setItem(`saveTime`, JSON.stringify(saveTime));
            localStorage.setItem(`new_mouse_disable`, true);
            document.getElementById(`buyNewMouse`).style.color = `green`;
            document.getElementById(`buyNewMouse`).innerHTML = `Bought`;
            document.getElementById(`buyNewMouse`).style.pointerEvents = `none`;
        } else {
            alert(`You can't afford this!`);
        }
    }
});

document.getElementById(`buyTower`).addEventListener(`click`, function(){
    if(localStorage.getItem(`tower_disable`)){
    } else {
        if (saveMoney.count >= 400){
            saveMoney.count -= 400;
            document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
            saveTime.count -= 0.5;
            document.getElementById(`time_balance`).innerHTML = Math.round(saveTime.count * 100)/100 + ` seconds`;
            localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
            localStorage.setItem(`saveTime`, JSON.stringify(saveTime));
            localStorage.setItem(`tower_disable`, true);
            document.getElementById(`buyTower`).style.color = `green`;
            document.getElementById(`buyTower`).innerHTML = `Bought`;
            document.getElementById(`buyTower`).style.pointerEvents = `none`;
        } else {
            alert(`You can't afford this!`);
        }
    }
});

document.getElementById(`buyFuel`).addEventListener(`click`, function(){
    if (localStorage.getItem(`fuel_disable`)){
    } else {
        if (saveMoney.count >= 200){
            saveMoney.count -= 200;
            drinkTime.count = 10000;
            document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
            localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
            localStorage.setItem(`drinkTime`, JSON.stringify(drinkTime));
            localStorage.setItem(`fuel_disable`, true);
            document.getElementById(`buyFuel`).style.color = `green`;
            document.getElementById(`buyFuel`).innerHTML = `Bought`;
            document.getElementById(`buyFuel`).style.pointerEvents = `none`;
        } else {
            alert(`You can't afford this!`);
        }
    }
});

document.getElementById(`buyMovie`).addEventListener(`click`, function(){
    if (saveMoney.count >= 20){
        saveMoney.count -= 20;
        saveEnergy.count += (100 - saveEnergy.count);
        document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`energy_balance`).innerHTML = saveEnergy.count + ` Energy`;
        localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
        localStorage.setItem(`saveEnergy`, JSON.stringify(saveEnergy));
    } else {
        alert(`You can't afford this!`);
    }
});

document.getElementById(`rollMystery`).addEventListener(`click`, function(){
    let rollValue = Math.round(Math.random() * 10);
    document.getElementById(`rollResult`).innerHTML = rollValue;
    if (rollValue === 0){
        console.log(`zero`);
        if (saveEnergy.count < 51){
            saveEnergy.count += 50;
            saveMoney.count += 50;
            document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
            document.getElementById(`energy_balance`).innerHTML = saveEnergy.count + ` Energy`;
            localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
            localStorage.setItem(`saveEnergy`, JSON.stringify(saveEnergy));
        }
        else if (saveEnergy.count >= 51 && saveEnergy.count < 100){
            saveMoney.count += (50 + (100 - saveEnergy.count));
            saveEnergy.count += 100 - saveEnergy.count;
            document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
            document.getElementById(`energy_balance`).innerHTML = saveEnergy.count + ` Energy`;
            localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
            localStorage.setItem(`saveEnergy`, JSON.stringify(saveEnergy));
        }
        else if (saveEnergy.count === 100){
            saveEnergy.count += 0;
            saveMoney.count += 100;
            document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
            document.getElementById(`energy_balance`).innerHTML = saveEnergy.count + ` Energy`;
            localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
            localStorage.setItem(`saveEnergy`, JSON.stringify(saveEnergy));
        }   
    }
    else if (rollValue >= 1 && rollValue <= 5){
        console.log(`1-5`);
        if (saveEnergy.count < 91){
            saveEnergy.count += 10;
            saveMoney.count += 10;
            document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
            document.getElementById(`energy_balance`).innerHTML = saveEnergy.count + ` Energy`;
            localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
            localStorage.setItem(`saveEnergy`, JSON.stringify(saveEnergy));
        }
        else if (saveEnergy.count >= 91 && saveEnergy.count < 100){
            saveMoney.count += (10 + (100 - saveEnergy.count));
            saveEnergy.count += 100 - saveEnergy.count;
            document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
            document.getElementById(`energy_balance`).innerHTML = saveEnergy.count + ` Energy`;
            localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
            localStorage.setItem(`saveEnergy`, JSON.stringify(saveEnergy));
        }
        else if (saveEnergy.count === 100){
            saveEnergy.count += 0;
            saveMoney.count += 20;
            document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
            document.getElementById(`energy_balance`).innerHTML = saveEnergy.count + ` Energy`;
            localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
            localStorage.setItem(`saveEnergy`, JSON.stringify(saveEnergy));
        }
    }
    else if (rollValue >= 6 && rollValue <= 10){
        console.log(`6-10`);
        saveMoney.count -= 20;
        document.getElementById(`money_balance`).innerHTML = `$` + saveMoney.count;
        localStorage.setItem(`saveMoney`, JSON.stringify(saveMoney));
    }
});
