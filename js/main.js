const saveStorage = document.getElementById(`saveStorage`);
const clearStorage = document.getElementById(`clearStorage`);
const storage = window.localStorage;

let saveMoney = {};
let saveEnergy = {};
let saveTime = {};
let drinkTime = {};
let revertTime = 0;
let codeMinus = 2;

function load(){
    if (storage.getItem(`saveMoney`) && storage.getItem(`saveEnergy`) && storage.getItem(`saveTime`) && storage.getItem(`drinkTime`)){
        saveMoney = JSON.parse(storage.getItem(`saveMoney`));
        saveEnergy = JSON.parse(storage.getItem(`saveEnergy`));
        saveTime = JSON.parse(storage.getItem(`saveTime`));
        drinkTime = JSON.parse(storage.getItem(`drinkTime`));
        document.getElementById(`money`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`energy`).innerHTML = saveEnergy.count;
        document.getElementById(`time`).innerHTML = Math.round(saveTime.count *100)/100 + ` Second(s)`;
    } else {
        saveMoney.count = 0;
        saveEnergy.count = 100;
        saveTime.count = 1;
        drinkTime.count = 5000;
        document.getElementById(`money`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`energy`).innerHTML = saveEnergy.count;
        document.getElementById(`time`).innerHTML = saveTime.count + ` Second(s)`;
    }
}
load();

saveStorage.addEventListener(`click`, function(){
    storage.setItem(`saveMoney`, JSON.stringify(saveMoney));
    storage.setItem(`saveEnergy`, JSON.stringify(saveEnergy));
    storage.setItem(`saveTime`, JSON.stringify(saveTime));
    storage.setItem(`drinkTime`, JSON.stringify(drinkTime));
})

clearStorage.addEventListener(`click`, function(){
    localStorage.clear();
    document.getElementById(`money`).innerHTML = `$` + 0;
    document.getElementById(`energy`).innerHTML = 100;
    document.getElementById(`time`).innerHTML = 1 + ` Second(s)`;
    window.location.href = window.location.href;
});

document.getElementById(`ebay_button`).addEventListener(`click`, function(){
if (storage.getItem(`saveMoney`) && storage.getItem(`saveEnergy`) && storage.getItem(`saveTime`) && storage.getItem(`drinkTime`)){
    location.href = `ebay.html`;
} else {
    alert(`You must save your game before going to the shop.`);
}
});

document.getElementById(`code`).addEventListener(`click`, function(){
    if (saveEnergy.count > 0){
        saveMoney.count++;
        saveEnergy.count -= codeMinus;
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
        document.getElementById(`drink`).style.pointerEvents = `none`;
        if (saveTime.count < 1){
            revertTime = saveTime.count;
            saveTime.count = 0;
        } else if (saveTime.count === 1){
            revertTime = 1;
            saveTime.count = 0;
        }
        document.getElementById(`time`).innerHTML = saveTime.count + ` Second(s)`
        saveMoney.count -= 10;
        const energyCheck = saveEnergy.count < 91 ? saveEnergy.count += 10 : saveEnergy.count += 100 - saveEnergy.count;
        codeMinus = 1;
        document.getElementById(`money`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`energy`).innerHTML = saveEnergy.count;
        setTimeout(
            function(){
                codeMinus = 2;
                document.getElementById(`drink`).style.pointerEvents = `auto`;
                saveTime.count = Math.round(revertTime *100)/100;
                document.getElementById(`time`).innerHTML = saveTime.count + ` Second(s)`
            }, drinkTime.count);
    } else if (saveMoney.count < 10){
        saveEnergy.count += 0;
    } 
});
