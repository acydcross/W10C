var userRole = Cookies.get('role');

function clearRole() {
    Cookies.remove('role');
    window.open("../index.html", "_self");
}

if(userRole == 'tank') {
    document.getElementById('role-container').innerHTML = '<img src="https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/c/c0/Paladin_concept_art.jpg/250px-Paladin_concept_art.jpg">';
} else if(userRole == 'heal') {
    document.getElementById('role-container').innerHTML = '<img src="https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/d/d0/White_Mage_concept_art.jpg/250px-White_Mage_concept_art.jpg">';
} else if(userRole == 'damage') {
    document.getElementById('role-container').innerHTML = '<img src="https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/2/29/Dragoon_concept_art.jpg/250px-Dragoon_concept_art.jpg" alt="a deadly damage dealer">';
} else {
    document.getElementById('role-container').innerHTML = '<p> Error! Invalid! </p>';
}

var userMaxHP = document.getElementById('user-current-hp');
userMaxHP.innerHTML = 25;

var bossMaxHP = document.getElementById('boss-current-hp');
bossMaxHP.innerHTML = 25;

var winner = document.getElementById('result');


function skillOne() {
    bossCurrentHP = bossMaxHP.innerHTML - Math.floor((Math.random() * 5) + 1);
    bossMaxHP.innerHTML = bossCurrentHP;
    userCurrentHP = userMaxHP.innerHTML - Math.floor((Math.random() * 5) + 1);
    userMaxHP.innerHTML = userCurrentHP;

    if(bossCurrentHP <= 0) {
        winner.innerHTML = "<h3> YOU WON !! </h3>";
    } else {
        winner.innerHTML = "<h3> YOU LOST !! </h3>";
    }
}

