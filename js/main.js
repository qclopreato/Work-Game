let money = 0;
let energy = 100;

document.getElementById(`ebay_button`).addEventListener(`click`, function(){
    location.href = `ebay.html`;
});

document.getElementById(`code`).addEventListener(`click`, function(){
    if (energy > 0){
        money += 1;
        energy -= 1;
        document.getElementById(`money`).innerHTML = `$` + money;
        document.getElementById(`energy`).innerHTML = energy;
    } else if (energy === 0){
        document.getElementById(`code`).disabled = true;
        document.getElementById(`code`).style.pointerEvents = `none`;
        document.getElementById(`drink`).style.pointerEvents = `none`;
        document.getElementById(`store`).style.pointerEvents = `none`;
        alert(`Game Over`);
    }
});

document.getElementById(`drink`).addEventListener(`click`, function(){
    if (money >= 10) {
        money -= 10;
        const energyCheck = energy < 71 ? energy += 30 : energy += 100 - energy;
        document.getElementById(`money`).innerHTML = `$` + money;
        document.getElementById(`energy`).innerHTML = energy;
    } else if (money < 10){
        energy += 0;
    } 
});
