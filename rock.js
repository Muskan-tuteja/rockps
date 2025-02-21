let userScroe = 0;
let compScroe =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScroePara = document.querySelector("#user-score");
const compScroePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];// rock,paper,scissor(koi bi ik generte kare ga )
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText="Game Was Draw. Play Again.";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin,choiceId,CompChoice) =>{ // 3rd condition// winner k ause hua 
if (userWin){
    userScroe++;//ye km karta h (ki kise ke kitne score bna rahe hai)
    userScroePara.innerText = userScroe;
    // console.log("you Win!");
    msg.innerText=`You Win! Your ${choiceId} beats ${CompChoice} `;//(play your move ko use karna )
    msg.style.backgroundColor = "green"; //background color change
}else{
    compScroe++;
   compScroePara.innerText =compScroe;//ye km karta h (ki kise ke kitne score bna rahe hai)
    // console.log("You Lose");
    msg.innerText=`You lost.${CompChoice} beats your ${choiceId} `;
    msg.style.backgroundColor = "red";
}
}

const playGame = (choiceId)=> {//(compare kare ge ki user jite ga yaa fer comp) 
    // console.log("chioce Id = ", choiceId);
// Generate computer choice -> modular of a programmming
// modular ka mtld -> (har ik km ki liya ik function bano )
// function ka km ik hi km karna (ik hi assen perform karna )
    const CompChoice = genCompChoice();
    // console.log("Comp Choice = ", CompChoice);

    if(choiceId === CompChoice){// 2nd contion //ye is liya lagta h ki kise jga score bane ge (comp and user)
         //Drow GAME
       drawGame()
    }else{ //1st condintion 
        let userWin = true;
        if(choiceId ==="rock"){
            // chaye comp scissors ka use kare yaa fer paper 
            userWin=CompChoice === "paper" ? false :true;
        } else if ( choiceId ==="paper"){
            // rock,scissors
            userWin=CompChoice === "scissors" ? false :true;
        }else{
            //rock,paper
            userWin=CompChoice === "rock" ? false :true;

        }
        showWinner(userWin,choiceId,CompChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);//print all the choices div(har ik choices valla div print karva rahe hai)
    choice.addEventListener("click",() =>{ //har ik div ki uper listener ko add akr dege(har ik chioce ki uper click kiya jaye)
    const choiceId = choice.getAttribute("id");//har ki id ajye gi (rock,paper,seccior)
    //console.log("choice Was Clicked",chioceId);
   playGame(choiceId);
   
  });
});
