let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let charismaBtn1 = document.getElementById("charismaBtn1");
let charismaBtn2 = document.getElementById("charismaBtn2");
let charismaBtn3 = document.getElementById("charismaBtn3");

let techBtn1 = document.getElementById("techBtn1");
let techBtn2 = document.getElementById("techBtn2");
let techBtn3 = document.getElementById("techBtn3"); 

let strengthPts = document.getElementById("strength-pts");
let charismaPts = document.getElementById("charisma-pts");
let techPts = document.getElementById("tech-pts");

let strengthLvl = document.getElementById("strength-lvl");

// sets the initial value for the skill points
strengthPts.setAttribute("value", 1 );
charismaPts.setAttribute("value", 1);
techPts.setAttribute("value", 1);
strengthLvl.setAttribute("value", 1);

let strengthPtValue = 0;
let strengthLvlValue = 1;

let charismaPtValue = 0;
let charismaLvlValue = 1

let techPtValue = 0;
let techLvlValue = 1;
function addStrengthSkillPoint1 () {
    strengthPtValue++; 
    strengthPts.innerHTML = `${strengthPtValue}/31`;
    if (strengthPtValue >= 31){
        strengthPtValue = 0;
        strengthLvlValue ++
        console.log("You have leveled up!!");
        console.log(`your current level is ${strengthLvlValue}`)
        strengthPts.innerHTML = `${strengthPtValue}/31`;
        strengthLvl.innerHTML = `${strengthLvlValue}`
    }
};
function addStrengthSkillPoint2() {
    
    strengthPtValue += 2;
    strengthPts.innerHTML = `${strengthPtValue}/31`;
    if (strengthPtValue >= 31){
        strengthPtValue = 0;
        strengthLvlValue ++
        console.log("You have leveled up!!");
        console.log(`your current level is ${strengthLvlValue}`)
        strengthPts.innerHTML = `${strengthPtValue}/31`;
        strengthLvl.innerHTML = `${strengthLvlValue}`


    }
};
function addStrengthSkillPoint3 () {

    strengthPtValue +=3; 
    strengthPts.innerHTML = `${strengthPtValue}/31`;
    if (strengthPtValue >= 31){
        strengthPtValue = 0;
        strengthLvlValue ++
        console.log("You have leveled up!!");
        console.log(`your current level is ${strengthLvlValue}`)
        strengthPts.innerHTML = `${strengthPtValue}/31`;
        strengthLvl.innerHTML = `${strengthLvlValue}`


    }
};
// ===============================//
function addCharismaSkillPoint1() {
    charismaPtValue++; 
    charismaPts.innerHTML = `${charismaPtValue}/31`;
    if (charismaPtValue >= 31){
        charismaPtValue = 0;
        charismaLvlValue ++
        console.log("You have leveled up!!");
        console.log(`your current level is ${charismaLvlValue}`)
        charismaPts.innerHTML = `${charismaPtValue}/31`;
        charismaLvl.innerHTML = `${charismaLvlValue}`;
    }
};

function addCharismaSkillPoint2() {
    charismaPtValue += 2; 
    charismaPts.innerHTML = `${charismaPtValue}/31`;
    if (charismaPtValue >= 31){
        charismaPtValue = 0;
        charismaLvlValue ++
        console.log("You have leveled up!!");
        console.log(`your current level is ${charismaLvlValue}`)
        charismaPts.innerHTML = `${charismaPtValue}/31`;
        charismaLvl.innerHTML = `${charismaLvlValue}`;
    }
};

function addCharismaSkillPoint3() {
    charismaPtValue += 3; 
    charismaPts.innerHTML = `${charismaPtValue}/31`;
    if (charismaPtValue >= 31){
        charismaPtValue = 0;
        charismaLvlValue ++
        console.log("You have leveled up!!");
        console.log(`your current level is ${charismaLvlValue}`)
        charismaPts.innerHTML = `${charismaPtValue}/31`;
        charismaLvl.innerHTML = `${charismaLvlValue}`;
    }
};

// =========================//

function addTechSkillPoint1() {
    techPtValue++; 
    techPts.innerHTML = `${techPtValue}/31`;
    if (techPtValue >= 31){
        techPtValue = 0;
        techLvlValue ++
        console.log("You have leveled up!!");
        console.log(`your current level is ${techLvlValue}`)
        techPts.innerHTML = `${techPtValue}/31`;
        techLvl.innerHTML = `${techLvlValue}`;
    }
};

function addTechSkillPoint2() {
    techPtValue += 2; 
    techPts.innerHTML = `${techPtValue}/31`;
    if (techPtValue >= 31){
        techPtValue = 0;
        techLvlValue ++
        console.log("You have leveled up!!");
        console.log(`your current level is ${techLvlValue}`)
        techPts.innerHTML = `${techPtValue}/31`;
        techLvl.innerHTML = `${techLvlValue}`;
    }
};

function addTechSkillPoint3() {
    techPtValue += 3; 
    techPts.innerHTML = `${techPtValue}/31`;
    if (techPtValue >= 31){
        techPtValue = 0;
        techLvlValue ++;
        console.log("You have leveled up!!");
        console.log(`your current level is ${techLvlValue}`)
        techPts.innerHTML = `${techPtValue}/31`;
        techLvl.innerHTML = `${techLvlValue}`;
    }
};







//====================Event Listeners========================//
btn1.addEventListener("click",addStrengthSkillPoint1);
btn2.addEventListener("click", addStrengthSkillPoint2);
btn3.addEventListener("click", addStrengthSkillPoint3);

charismaBtn1.addEventListener("click", addCharismaSkillPoint1);
charismaBtn2.addEventListener("click", addCharismaSkillPoint2);
charismaBtn3.addEventListener("click", addCharismaSkillPoint3);

techBtn1.addEventListener("click", addTechSkillPoint1);
techBtn2.addEventListener("click", addTechSkillPoint2);
techBtn3.addEventListener("click", addTechSkillPoint3);


// btn1.addEventListener("click",addTechSkillPoint1);
// btn2.addEventListener("click", addTechSkillPoint2);
// btn3.addEventListener("click", addTechSkillPoint3);



