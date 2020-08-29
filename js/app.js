function addTank(tank){
    Cookies.set('role', 'tank', {expires:1});
    window.open('battle.html', "_self");
}

function addHeal(heal){
    Cookies.set('role', 'heal', {expires:1});
    window.open('battle.html', "_self");
}

function addDamage(damage){
    Cookies.set('role', 'damage', {expires:1});
    window.open('battle.html', "_self");
}