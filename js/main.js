let iteration = 0;
const saveStorage = document.getElementById(`saveStorage`);
const clearStorage = document.getElementById(`clearStorage`);
const storage = window.localStorage;

let saveMoney = {};
let saveEnergy = {};

function load(){
    if (storage.getItem(`saveMoney`) && storage.getItem(`saveEnergy`)){
        saveMoney = JSON.parse(storage.getItem(`saveMoney`));
        saveEnergy = JSON.parse(storage.getItem(`saveEnergy`));
        console.log(`Money save found`, saveMoney);
        console.log(`Energy save found`, saveEnergy);
        document.getElementById(`money`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`energy`).innerHTML = saveEnergy.count;
    } else {
        saveMoney.count = 0;
        saveEnergy.count = 100;
        console.log(`Saves not found`);
        document.getElementById(`money`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`energy`).innerHTML = saveEnergy.count;
    }
}
load();

saveStorage.addEventListener(`click`, function(){
    storage.setItem(`saveMoney`, JSON.stringify(saveMoney));
    storage.setItem(`saveEnergy`, JSON.stringify(saveEnergy));
    console.log(`Saved game`);
})

clearStorage.addEventListener(`click`, function(){
    localStorage.clear();
    document.getElementById(`money`).innerHTML = `$` + 0;
    document.getElementById(`energy`).innerHTML = 100;
    window.location.href = window.location.href;
});

document.getElementById(`ebay_button`).addEventListener(`click`, function(){
    location.href = `ebay.html`;
    iteration 
});

document.getElementById(`code`).addEventListener(`click`, function(){
    if (saveEnergy.count > 0){
        saveMoney.count++;
        saveEnergy.count--;
        document.getElementById(`money`).innerHTML = `$` + saveMoney.count;
        document.getElementById(`energy`).innerHTML = saveEnergy.count;
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
