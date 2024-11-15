// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.

/*-------------------------------- Constants --------------------------------*/
const state = {

boredom : 0,
hunger : 0,
sleepiness : 0,
};


/*---------------------------- Variables (state) ----------------------------*/
let timer = 2000 ;
let gameOver = false ;


/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.querySelector("#boredom-stat");

const hungerStatEl = document.querySelector("#hunger-stat");

const sleepinessStatEl  = document.querySelector("#sleepiness-stat");

const playEl  = document.querySelector("#play");

const feedEl  = document.querySelector("#feed");

const sleepEl  = document.querySelector("#sleep");

const gameStateEl = document.querySelector(".game-state-wrapper"); 

const resetBtnEl = document.querySelector("#restart"); 

const messageEl = document.querySelector("#message"); 

/*-------------------------------- Functions --------------------------------*/

const runGame = () => {
    updateStates();
    checkGameOver()
    render();
    }

    

    const updateStates = () => {
        if(gameOver === false){

            parseFloat(state.boredom);
            parseFloat(state.hunger);
            parseFloat(state.sleepiness);

            state.boredom = state.boredom + (Math.floor(Math.random() * 3));
            state.hunger = state.hunger + (Math.floor(Math.random() * 3));
            state.sleepiness = state.sleepiness + (Math.floor(Math.random() * 3));

            
        };


    }

    const render = () => {

        boredomStatEl.textContent = state.boredom;

        hungerStatEl.textContent = state.hunger;

        sleepinessStatEl.textContent = state.sleepiness;

        if(gameOver === true){
            clearInterval(myInterval)
            messageEl.classList.remove("hidden");
            resetBtnEl.classList.remove("hidden");
            
        }
    };

    const checkGameOver = () => {

        if(state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10 ){

            gameOver = true
            
        }

    }

  const playBtnClick = () => {
        
    state.boredom = 0
    render()
    }

    const feedBtnClick = () => {
        
        state.hunger = 0
        render()
        }

        const sleepBtnClick = () => {
        
            state.sleepiness = 0
            render()
            }

const init = () => {
    messageEl.classList.add("hidden");
    resetBtnEl.classList.add("hidden");
    state.boredom = 0
    state.hunger = 0
    state.sleepiness = 0
    gameOver = false
    render()
 myInterval = setInterval(runGame,timer)

};

init()
 

/*----------------------------- Event Listeners -----------------------------*/

playEl.addEventListener("click" , playBtnClick );

feedEl.addEventListener("click" , feedBtnClick );

sleepEl.addEventListener("click" , sleepBtnClick );

resetBtnEl.addEventListener("click" , init );


