const saveStorage = document.getElementById(`saveStorage`);
const clearStorage = document.getElementById(`clearStorage`);
const storage = window.localStorage;

let saveMoney = {};
let saveEnergy = {};
let saveTime = {};

function load(){
    if (storage.getItem(`saveMoney`) && storage.getItem(`saveEnergy`) && storage.getItem(`saveTime`)){
        saveMoney = JSON.parse(storage.getItem(`saveMoney`));
        saveEnergy = JSON.parse(storage.getItem(`saveEnergy`));
        saveTime = JSON.parse(storage.getItem(`saveTime`));
        document.getElementById(`money`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`energy`).innerHTML = saveEnergy.count;
        document.getElementById(`time`).innerHTML = saveTime.count + ` Seconds`;
    } else {
        saveMoney.count = 0;
        saveEnergy.count = 100;
        saveTime.count = 1;
        document.getElementById(`money`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`energy`).innerHTML = saveEnergy.count;
        document.getElementById(`time`).innerHTML = saveTime.count + ` Seconds`;
    }
}
load();

saveStorage.addEventListener(`click`, function(){
    storage.setItem(`saveMoney`, JSON.stringify(saveMoney));
    storage.setItem(`saveEnergy`, JSON.stringify(saveEnergy));
    storage.setItem(`saveTime`, JSON.stringify(saveTime));
})

clearStorage.addEventListener(`click`, function(){
    localStorage.clear();
    document.getElementById(`money`).innerHTML = `$` + 0;
    document.getElementById(`energy`).innerHTML = 100;
    document.getElementById(`time`).innerHTML = 1 + ` Seconds`;
    window.location.href = window.location.href;
});

document.getElementById(`ebay_button`).addEventListener(`click`, function(){
    location.href = `ebay.html`;
});

document.getElementById(`code`).addEventListener(`click`, function(){
    if (saveEnergy.count > 0){
        saveMoney.count++;
        saveEnergy.count--;
        document.getElementById(`money`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`energy`).innerHTML = saveEnergy.count;
        document.getElementById(`code`).disabled = true;
        setTimeout(
            function(){
                document.getElementById(`code`).disabled = false;
            }, (saveTime.count * 1000)); /*Changes how fast you can code*/
    } else if (saveEnergy.count === 0){
        document.getElementById(`code`).disabled = true;
        document.getElementById(`code`).style.pointerEvents = `none`;
        document.getElementById(`drink`).style.pointerEvents = `none`;
        document.getElementById(`store`).style.pointerEvents = `none`;
        alert(`Game Over`);
    }
});

document.getElementById(`drink`).addEventListener(`click`, function(){
    if (saveMoney.count >= 10) {
        saveMoney.count -= 10;
        const energyCheck = saveEnergy.count < 71 ? saveEnergy.count += 30 : saveEnergy.count += 100 - saveEnergy.count;
        document.getElementById(`money`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`energy`).innerHTML = saveEnergy.count;
    } else if (saveMoney.count < 10){
        saveEnergy.count += 0;
    } 
});
