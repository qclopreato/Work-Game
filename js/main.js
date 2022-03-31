let money = 0;
let energy = 100;

document.querySelector(`.code`).addEventListener(`click`, function(){
    if (energy > 0){
        money += 1;
        energy -= 1;
        document.querySelector(`.money`).innerHTML = `$` + money;
        document.querySelector(`.energy`).innerHTML = energy;
    } else if (energy === 0){
        document.querySelector(`.code`).disabled = true;
        document.querySelector(`.code`).style.pointerEvents = `none`;
        document.querySelector(`.drink`).style.pointerEvents = `none`;
        document.querySelector(`.store`).style.pointerEvents = `none`;
        alert(`Game Over`);
    }
});

document.querySelector(`.drink`).addEventListener(`click`, function(){
    if (money >= 10) {
        money -= 10;
        const energyCheck = energy < 71 ? energy += 30 : energy += 100 - energy;
        document.querySelector(`.money`).innerHTML = `$` + money;
        document.querySelector(`.energy`).innerHTML = energy;
    } else if (money < 10){
        energy += 0;
    } 
});