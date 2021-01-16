// selectors
    let item = document.querySelector('.power-btn');
 
    let item1 = document.querySelector('.item1');
    let item2 = document.querySelector('.item2');
    let item3 = document.querySelector('.item3');
    let item4 = document.querySelector('.item4');
    let item5 = document.querySelector('.item5');
    let item6 = document.querySelector('.item6');


    let progSection = document.querySelector('.progress-section');

    let btnagain = document.querySelector('.btn-again-2');
    let btnagain1 = document.querySelector('.btn-again-1');

    let titleInfo = document.querySelector('.info');
    let titleSite = document.querySelector('.title-site');

    let tryagainSection = document.querySelector('.tryagain-section');

    let itemy = document.querySelectorAll("div.items > div");

    let gateImg = document.querySelector('.gate-img');
    let gateSlup = document.querySelector('#slup');

    let backgroundFirst = document.querySelector('.back-1');
    let backgroundSecond = document.querySelector('.back-2');

    let hitCount = document.querySelector('.hit-title');
    let missCount = document.querySelector('.miss-title');
    let reloadIcon = document.querySelector('.reloadIcon');

     // VARIABLE

    const ball = document.querySelector('.ball');

    var debug;
    let timerID;
    let counter = 0;
    let isStop;
    
    let shotHit = 0;
    let shotMiss = 0;
    let shotHitStreak = 0;

    let isGool;
    let isInto;

    let powerBarInPut;
    let numberField;

        //score 
        let playerScore = 0;
    
    let pressHoldEvent = new CustomEvent("pressHold");

    // Increase or decreae value to adjust how long
    // one should keep pressing down before the pressHold
    // event fires
    let pressHoldDuration = 300;

    // eventlisters    
    item.addEventListener("mousedown", pressingDown, false);
    item.addEventListener("mouseup", notPressingDown, false);
    // item.addEventListener("mouseleve", notPressingDown, false);

    item.addEventListener("touchstart", pressingDown, false);
    item.addEventListener("touchend", notPressingDown, false);

    btnagain.addEventListener("click", addEvent);

    backgroundFirst.addEventListener("click", changeBackgroundToFirst);
    backgroundSecond.addEventListener("click", changeBackgroundToSecond);

    // Listening for our custom pressHold event
    // item.addEventListener("pressHold", doSomething, false);
    



// function main
        
    item1.onclick = () => {
        item1.style.opacity = "1";
        item2.style.opacity = "0.1";
        item3.style.opacity = "0.1";
        item4.style.opacity = "0.1";
        item5.style.opacity = "0.1";
        item6.style.opacity = "0.1";
        numberField = 1;
        progSection.style.opacity = "1";
        titleInfo.innerHTML = "Ustal siłe strzału!";
    };

    item2.onclick = () => {
        item2.style.opacity = "1";
        item1.style.opacity = "0.1";
        item3.style.opacity = "0.1";
        item4.style.opacity = "0.1";
        item5.style.opacity = "0.1";
        item6.style.opacity = "0.1";
        numberField = 2;
        progSection.style.opacity = "1";
        titleInfo.innerHTML = "Ustal siłe strzału!";
    };


    item3.onclick = () => {

        item3.style.opacity = "1";
        item1.style.opacity = "0.1";
        item2.style.opacity = "0.1";
        item4.style.opacity = "0.1";
        item5.style.opacity = "0.1";
        item6.style.opacity = "0.1";
        numberField = 3;
        progSection.style.opacity = "1";
        titleInfo.innerHTML = "Ustal siłe strzału!";
    };

    item4.onclick = () => {

        item4.style.opacity = "1";
        item1.style.opacity = "0.1";
        item2.style.opacity = "0.1";
        item3.style.opacity = "0.1";
        item5.style.opacity = "0.1";
        item6.style.opacity = "0.1";
        numberField = 4;
        progSection.style.opacity = "1";
        titleInfo.innerHTML = "Ustal siłe strzału!";


    };

    item5.onclick = () => {
        item5.style.opacity = "1";
        item1.style.opacity = "0.1";
        item2.style.opacity = "0.1";
        item3.style.opacity = "0.1";
        item4.style.opacity = "0.1";
        item6.style.opacity = "0.1";
        numberField = 5;
        progSection.style.opacity = "1";
        titleInfo.innerHTML = "Ustal siłe strzału!";

    };

    item6.onclick = () => {

        item6.style.opacity = "1";
        item1.style.opacity = "0.1";
        item2.style.opacity = "0.1";
        item3.style.opacity = "0.1";
        item4.style.opacity = "0.1";
        item5.style.opacity = "0.1";
        numberField = 6;
        progSection.style.opacity = "1";
        titleInfo.innerHTML = "Ustal siłe strzału!";

    };

    reloadIcon.onclick = () => {
        shotHit = 0;
        shotMiss = 0;
        hitCount.innerHTML = shotHit;
        missCount.innerHTML = shotMiss;
    };

    function pressingDown(e) {
      // Start the timer
     


      requestAnimationFrame(timer);

      e.preventDefault();

      console.log("Pressing!");
    }

    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;

      item.style.setProperty("--scale-value", 1);

      console.log("Not pressing!");

      strong();
    }

    // Runs at 60fps when you are pressing down

    function timer() {
      console.log(`counter: ${counter}`);

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        counter++;


        item.style.setProperty("--scale-value", 1 + counter / 300);


      } else {
        console.log("Press threshold reached!");
        item.dispatchEvent(pressHoldEvent);
      }

      powerBarInPut = counter;
      
     
    }

    // if(counter == 300 || isStop == true){
    //     strong();
    // }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    

// SMALL


function softShotOne(){

    let random1 = Math.floor(Math.random() * 10);
    // console.log(random1);

    if(random1 < 3){

        // zmienne do animacji strzału
        isGool = true;
        isInto = false; 

        console.log("goll!!");
        btnagain1.innerHTML = `GOOL!`;
        shotHit++;
        removeEvent();
        hitCount.innerHTML = shotHit;
    }
    else{

        // zmienne do animacji strzału
        isGool = false;
        isInto = false;

        console.log("NIEE!");
        btnagain1.innerHTML = `OBRONIONO`;
        removeEvent();
        shotMiss++;
        missCount.innerHTML = shotMiss;
    }

}

function softShotTwo(){
    // zmienne do animacji strzału
    isGool = false;
    isInto = false;

    console.log("NIEE!")
    btnagain1.innerHTML = `OBRONIONO`;
    removeEvent();
    shotMiss++;
    missCount.innerHTML = shotMiss;
}

function softShotThree(){

    let random1 = Math.floor(Math.random() * 10);
    let random2 = Math.floor(Math.random() * 10);

    if(random1 <= 3 && random2 <= 3 ){
        isGool = true;

        console.log("goll!!");
        btnagain1.innerHTML = `GOOL!`;
        removeEvent();
        shotHit++;
        hitCount.innerHTML = shotHit;

    }
    else{
        // zmienne do animacji strzału
        isGool = false;
        isInto = true;

        console.log("NIEE!");
        btnagain1.innerHTML = `OBRONIONO`;
        removeEvent();
        shotMiss++;
        missCount.innerHTML = shotMiss;



        //obroniono
    }
}

// MEDIUM

function mediumShotOne(){
    let random1 = Math.floor(Math.random() * 10);
    let random2 = Math.floor(Math.random() * 10);

    if(random1 <= 8 && random2 <= 5 ){
        // zmienne do animacji strzału
        isGool = true;
        isInto = false;

        console.log("goll!!");
        btnagain1.innerHTML = `GOOL!`;
        removeEvent();
        shotHit++;
        hitCount.innerHTML = shotHit;

    }else{

        // zmienne do animacji strzału
        isGool = false;
        isInto = false

        console.log("NIEE!");
        btnagain1.innerHTML = `OBRONIONO`;
        removeEvent();
        shotMiss++;
        missCount.innerHTML = shotMiss;

        //obroniono
    }
}

function mediumShotTwo(){
    let random1 = Math.floor(Math.random() * 10);
    let random2 = Math.floor(Math.random() * 10);
    
    if(random1 <= 4 && random2 <= 9 ){
        // zmienne do animacji strzału
        isGool = true;
        isInto = false;

        console.log("goll!!");
        btnagain1.innerHTML = `GOOL!`;
        removeEvent();
        shotHit++;
        hitCount.innerHTML = shotHit;



    }else{

        // zmienne do animacji strzału
        isGool = false;
        isInto = true;


        console.log("NIEE!");
        btnagain1.innerHTML = `OBRONIONO`;
        removeEvent();
        shotMiss++;
        missCount.innerHTML = shotMiss;

        //obroniono
    }

}


function mediumShotThree(){

    let random1 = Math.floor(Math.random() * 10);
    let random2 = Math.floor(Math.random() * 10);

    if(random1 <= 5 && random2 <= 5 ){
        // zmienne do animacji strzału
        isGool = true;
        isInto = false;

        console.log("goll!!");
        btnagain1.innerHTML = `GOOL!`;
        removeEvent();
        shotHit++;
        hitCount.innerHTML = shotHit;




    }else{
        // zmienne do animacji strzału
        isGool = false;
        isInto = false;

        console.log("NIEE!");
        btnagain1.innerHTML = `OBRONIONO`;
        removeEvent();
        shotMiss++;
        missCount.innerHTML = shotMiss;

        //obroniono
    }
}
// HARD


function strongShotOne(){

    let random1 = Math.floor(Math.random() * 10);
    let random2 = Math.floor(Math.random() * 10);



    if(random1 <= 2 && random2 <= 8 ){

        // zmienne do animacji strzału
        isGool = true;
        isInto = false;

        console.log("goll!!");
        btnagain1.innerHTML = `GOOL!`;
        removeEvent();
        shotHit++;
        hitCount.innerHTML = shotHit;

    }
    else{

        // zmienne do animacji strzału
        isGool = null;
        isInto = true;

        console.log("NIEE!");
        btnagain1.innerHTML = `PUDŁO`;
        removeEvent();
        shotMiss++;
        missCount.innerHTML = shotMiss;
        
    }
}

function strongShotTwo(){

    let random1 = Math.floor(Math.random() * 10);
    let random2 = Math.floor(Math.random() * 10);


    if(random1 <= 1 && random2 <= 10 ){

         // zmienne do animacji strzału
        isGool = true;
        isInto = false;

        console.log("goll!!");
        btnagain1.innerHTML = `GOOL!`;
        removeEvent();
        shotHit++;
        hitCount.innerHTML = shotHit;

    }
    else{
        // zmienne do animacji strzału
        isGool = null;
        isInto = true;

        console.log("NIEE!");
        btnagain1.innerHTML = `PUDŁO`;
        removeEvent();
        shotMiss++;
        missCount.innerHTML = shotMiss;
    }
}

function strongShotThree(){

    let random1 = Math.floor(Math.random() * 10);
    let random2 = Math.floor(Math.random() * 10);

    if(random1 <= 6 && random2 <= 6 ){

        // zmienne do animacji strzału
        isGool = true;
        isInto = false;

        console.log("goll!!");
        btnagain1.innerHTML = `GOOL!`;
        removeEvent();
        shotHit++;
        hitCount.innerHTML = shotHit;

    }
    else{

        // zmienne do animacji strzału
        isGool = true;
        isInto = false;

        console.log("NIEE!");
        btnagain1.innerHTML = `OBRONIONO`;
        removeEvent();
        shotMiss++;
        missCount.innerHTML = shotMiss;
        //obroniono
    }
}


            // ------------------------ //
            //   WYBIERANIE FUNCKJI     //
            // ------------------------ //


// pola wybierna komputer TEST

// let powerBarInPut;
// let numberField = item.firstChild.innerText;
// console.log(numberField);

let powerBar = 0;

        // ręczne wartości TEST

        // let powerBarInPut = 2;
        // let numberField = 5;
        
function strong(){
    
    // if(powerBarInPut != undefined){

    
    // if 1
    if(0 <= powerBarInPut && 100 >= powerBarInPut ){
 
        powerBar = 1;
        // console.log("if-1");
    }

    // if 2 
    if(101 <= powerBarInPut && 200 >= powerBarInPut){

        powerBar = 2;
        // console.log("if-2");
    }

    // if 3 

    if(201 <= powerBarInPut && 300 >= powerBarInPut ){

        powerBar = 3;
        // console.log("if-2");
    }
    console.log("powerBarInPut:");
    console.log(powerBarInPut);
    console.log("powerBar:");
    console.log(powerBar);

    switch(powerBar){
        
        case 1:
            if(numberField == 5){
                softShotThree();
            }
            else if(numberField == 1 || numberField == 3){
                console.log("softShotTwo");
                softShotTwo();
            }else{
                console.log("softShotOne");
                softShotOne();
            }
            break;
        case 2:
            if(numberField == 5){
                mediumShotThree();
            }
            else if(numberField == 1 || numberField == 3){
                console.log("mediumShotTwo");
                mediumShotTwo();
            }else{
                console.log("mediumShotOne");
                mediumShotOne();
            }
            break;
        case 3:
            if(numberField == 5){
                strongShotThree();
            }
            else if(numberField == 1 || numberField == 3){
                console.log("strongShotTwo");
                strongShotTwo();
            }else{
                console.log("strongShotOne");
                strongShotOne();
            }
            break;
        default:
            console.log("error 404");
    }
// }
}

// funkcja strzału do bramki

function removeEvent(){ 
    
    item.removeEventListener("mousedown", pressingDown, false);
    item.removeEventListener("mouseup", notPressingDown, false);
    // item.removeEventListener("mouseleave", notPressingDown, false);
    item.removeEventListener("touchstart", pressingDown, false);
    item.removeEventListener("touchend", notPressingDown, false);

    progSection.style.opacity = "0";


    if(numberField == 1){
        if(isInto == true){
            ball.style.transform = "translate(-280%, -1220%) rotate(1300deg)";
        }
        
        if(isGool == true){
            ball.style.zIndex = "-2"; // obronione / gool
            ball.style.transform = "translate(-280%, -520%) rotate(300deg)";

        }

        if(isGool == false){
            ball.style.zIndex = "2"; // obronione / gool
            ball.style.transform = "translate(-280%, -520%) rotate(300deg)";

        }
    }

    if(numberField == 2){
        if(isInto == true){
            ball.style.transform = "translate(80%, -1220%) rotate(1300deg)";
        }

        if(isGool==true){
            ball.style.zIndex = "-2"; // obronione / gool
            ball.style.transform = "translate(-10%, -500%) rotate(40deg)";

        }
        if(isGool == false){
            ball.style.zIndex = "2"; // obronione / gool
            ball.style.transform = "translate(-10%, -500%) rotate(40deg)";
        }
    }

    if(numberField == 3){
        if(isInto == true){
            ball.style.transform = "translate(580%, -1220%) rotate(1300deg)";
        }

        if(isGool==true){
            ball.style.zIndex = "-2"; // obronione / gool
            ball.style.transform = "translate(280%,-500%) rotate(-480deg)";

        }
        if(isGool == false){
            ball.style.zIndex = "2"; // obronione / gool
            ball.style.transform = "translate(280%,-500%) rotate(-480deg)";
        }
    }

    if(numberField == 4){
        if(isInto == true){
            ball.style.transform = "translate(-980%, -280%) rotate(-1300deg)";
        }

        if(isGool==true){
            ball.style.zIndex = "-2"; // obronione / gool
            ball.style.transform = "translate(-280%,-220%) rotate(230deg)";

        }
        if(isGool == false){
            ball.style.zIndex = "2"; // obronione / gool
            ball.style.transform = "translate(-280%,-220%) rotate(230deg)";

        }
    }

    if(numberField == 5){
        if(isGool==true){
            ball.style.zIndex = "-2"; // obronione / gool
        }
        else{
            ball.style.zIndex = "2"; // obronione / gool
        }
        ball.style.transform = "translate(-10%,-250%) rotate(80deg)";
    }

    if(numberField == 6){
        if(isInto == true){
            ball.style.transform = "translate(980%, -280%) rotate(1300deg)";
        }

        if(isGool==true){
            ball.style.zIndex = "-2"; // obronione / gool
            ball.style.transform = "translate(280%,-200%) rotate(80deg)";

        }

        if(isGool == false){
            ball.style.zIndex = "2"; // obronione / gool
            ball.style.transform = "translate(280%,-200%) rotate(80deg)";
        }
    }



    setTimeout(Slider, 800)

}

function Slider(){
    tryagainSection.style.transform = "translateY(0%)";

}

// restart do stanu początkowego / zagraj ponownie
function addEvent(){

    item.addEventListener("mousedown", pressingDown, false);
    item.addEventListener("mouseup", notPressingDown, false);
    // item.addEventListener("mouseleave", notPressingDown, false);
    item.addEventListener("touchstart", pressingDown, false);
    item.addEventListener("touchend", notPressingDown, false);

    console.log(numberField);

    ball.style.transform= "translate(10%, 0%)";
    titleInfo.innerHTML = "Wybierz pole strzału!";

    
    //restartowanie połozienia piłki według warstw 
    ball.style.zIndex = "2";

    tryagainSection.style.transform = "translateY(-100%)";

    item1.style.opacity = "1";
    item2.style.opacity = "1";
    item3.style.opacity = "1";
    item4.style.opacity = "1";
    item5.style.opacity = "1";
    item6.style.opacity = "1";
}

function changeBackgroundToFirst(){
    document.body.style.backgroundImage = "url('img/bramka1.png')";
    document.body.style.backgroundPositionY = "-244px";
    titleSite.style.color = "white";

}

function changeBackgroundToSecond(){
    document.body.style.backgroundImage = "url('img/bramka3.png')";
    document.body.style.backgroundPositionY = "-100px";
    titleSite.style.color = "black";
}


