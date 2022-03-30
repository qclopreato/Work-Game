let money = 0;
let energy = 100;

function preEnergy(){
    var interval = setInterval(energyFunction, 500);
};

function energyFunction(){
    energy -= 1;
    document.querySelector(`.energy`).innerHTML = `Energy: ` + energy;
};

document.querySelector(`.code`).addEventListener(`click`, function(){
    money += 1;
    document.querySelector(`.money`).innerHTML = `$` + money;
});

document.querySelector(`.drink`).addEventListener(`click`, function(){
    if (money >= 10) {
        money -= 10;
        const energyCheck = energy < 71 ? energy += 30 : energy += 100 - energy;
        document.querySelector(`.money`).innerHTML = `$` + money;
        document.querySelector(`.energy`).innerHTML = `Energy: ` + energy;
    } else if (money < 10){
        energy += 0;
    } 
});