var damangeMax;
var damageMin;
var userMaxHP = maxhp;
var bossMaxHP = 25;
var bossCurrentHP = bossMaxHP;
var skillOne;
var skillTwo;
var skillThree;
var useSkillOne;
var useSkilltwo;
var useSkillThree;
var damageDisplay;
var healthDisplay;

var userRole = Cookies.get('role');

if(userRole == 'tank' + useSkillOne) {
    skillOne = Math.floor(Math.random() * (damangeMax - damageMin)) + damageMin;
    console.log(skillOne);
    damageDisplay = document.getElementById('')
}

function clearRole() {
    Cookies.remove('role');
    window.open("../index.html", "_self");
}

if(userRole == 'tank') {
    document.getElementById('selection-container').innerHTML = '<img src="https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/c/c0/Paladin_concept_art.jpg/250px-Paladin_concept_art.jpg">';
} else if(userRole == 'heal') {
    document.getElementById('selection-container').innerHTML = '<img src="https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/d/d0/White_Mage_concept_art.jpg/250px-White_Mage_concept_art.jpg">';
} else if(userRole == 'damage') {
    document.getElementById('selection-container').innerHTML = '<img src="https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/2/29/Dragoon_concept_art.jpg/250px-Dragoon_concept_art.jpg" alt="a deadly damage dealer">';
} else {
    document.getElementById('selection-container').innerHTML = '<p> Error! Invalid! </p>';
}