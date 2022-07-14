

const wizzard = document.querySelector('.wizzard')
const swordman = document.querySelector('.swordman')
const dragon = document.querySelector('.dragon')
const spider = document.querySelector('.spider')

const sword = document.querySelector('.sword')
const spear = document.querySelector('.spear')
const magic = document.querySelector('.magic')

const atackBtn = document.querySelector('.atack-button')

let selectedHero
let selectedHeroDiv
let selectedWeapon

let selectedEnemy
let selectedEnemyDiv


function Hero(name, health, weapon) {
    this.name = name
    this.health = health
    this.weapon = []
}

let wizzardHero = new Hero('wizzard', 150, '')
let swordmanHero = new Hero('swordman', 100, '')

let spiderHero = new Hero('spider', 80, '')
let dragonHero = new Hero('dragon', 200, '')
//    
function actionHero(first, second, hero) {  
    return (e) => {   
    second.style.opacity = 0.1
    first.style.opacity = 1 
    selectedHero = hero
    selectedHeroDiv = first
    }
}
function actionEnemy(first, second, hero) {  
    return (e) => {   
    second.style.opacity = 0.1
    first.style.opacity = 1 
    selectedEnemy = hero
    selectedEnemyDiv = first
    }
}

wizzard.addEventListener('click', actionHero(wizzard, swordman, wizzardHero))
swordman.addEventListener('click', actionHero(swordman, wizzard, swordmanHero))
dragon.addEventListener('click', actionEnemy(dragon, spider, dragonHero))
spider.addEventListener('click', actionEnemy(spider, dragon, spiderHero))

//weapon action
sword.addEventListener('click', weaponAction("sword"))
spear.addEventListener('click', weaponAction("spear"))
magic.addEventListener('click', weaponAction("magic"))

function weaponAction(weapon) {     
    return (e) => { 
    if (selectedHero) {
     if (selectedHero.weapon.length < 2) {
        selectedHero.weapon.push(weapon)    
        e.target.style.display = 'none'
        console.log(e.target.parentElement);
        console.log(selectedHero);
        let weaponSpan = document.createElement('span')
        weaponSpan.classList.add(weapon)
        weaponSpan.innerText = weapon
        weaponSpan.addEventListener('click', selectedWeaponAction)
        function selectedWeaponAction() {
            selectedWeapon = weapon
            console.log(selectedWeapon);
        }
        console.log(weaponSpan);
        selectedHeroDiv.appendChild(weaponSpan)
     }
    }
   }
}

atackBtn.addEventListener('click', atackBtnAction)

function atackBtnAction() {
    if(selectedWeapon) {
        console.log('hero - ' + selectedHero.name) 
        console.log('weapon - ' + selectedWeapon)
        console.log('enemy - ' + selectedEnemy.name)
        console.log('enemy - ' + selectedEnemy.health)
        selectedEnemy.health -=20
        console.log('enemy - ' + selectedEnemy.health)

    } else {
        alert('You must click on weapon which you choose to atack')
    }
}