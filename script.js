let userscore = 0 
let computerscore = 0
const restarter = document.querySelector(".restart")
const choices = document.querySelectorAll(".content")
// for 3 columns we are adding a common property  property
// leting the computer chose a random index using math.random function and multiply
const computerchoice = ()=>{
    // random generate the choices using arrays
    const options = ["rock","paper","scissors"]
    const optidx = Math.floor(Math.random()*3)// to generate random numbers
    return options[optidx]
}
let compchoice = computerchoice()
// plsys the game and check the winner
const playgame = (userchoice, compchoice)=>{
    console.log("user choice = ",userchoice)
    console.log("computer coice = ",compchoice)
    let wf = winfactor(userchoice , compchoice)
    if(wf===true){
        console.log("user wins")
        return true 
    }
    else if(wf===false){
        console.log("computer wins")
        return false
    }
}

// calculates the win factor
let winfactor = (userchoice , compchoice)=>{
    let userwin ;
    if(userchoice===compchoice){
       console.log("DRAW!!")
        document.querySelector(".msg").innerText = "Draw!! Replay"
        document.querySelector(".msg").style.color = "red" 
    }
    else{
        if(userchoice === "rock"){
            userwin = compchoice==="paper"? false : true
        }
        else if(userchoice === "paper"){
            userwin = compchoice==="scissors" ? false : true
        } 
        else{
            userwin = compchoice==="rock"? false : true
        }
    }
    return userwin
} 

// ui script
choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
      let userchoice = choice.getAttribute("id")
       let game  =  playgame(userchoice,compchoice)
       if(game=== true){
             userscore++
          document.querySelector(".scoreboard1").innerText = userscore
          document.querySelector(".msg").innerText = `You Win!! ${userchoice} beats ${compchoice}`
          document.querySelector(".msg").style.color = "pink"                    
       }
       else if(game== false){
        computerscore++
        document.querySelector(".scoreboard2").innerText = computerscore   
        document.querySelector(".msg").innerText = `computer Wins!! ${compchoice} beats ${userchoice}`
        document.querySelector(".msg").style.color = "blue"                           
    }
     

    })
})

const restart = () =>{
    userscore = 0 
    computerscore = 0 
    document.querySelector(".scoreboard1").innerText = userscore
    document.querySelector(".scoreboard2").innerText = userscore   
    document.querySelector(".msg").innerText = "Game Started"
    document.querySelector(".msg").style.color = "lavender"                           

}

restarter.addEventListener("click",()=>{
    restart()
})
