// Text Adventure Game 
const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry, GAME OVER! Better luck next time!";

const start = `Welcome to the Totally Batty Text Adventure Game. Click 'OK' to start the game.`;

const q1 = `You are a small brown bat, planning to flap out of your cave and eat some tasty bugs. Should you...
1. Wait until sunset to leave
OR
2. Hang out in the cave until sunrise
${enter}`;

const gameOver1 = `Daytime flight can be very tiring for bats, and hunting bugs in the daytime puts you at risk of predators! ${gameOver}`;

const q2 = `When you leave your roost, you start searching for some food! Should you...
1. Use your powers of acoustic echolocation to sense prey's precise coordinates
OR
2. Look around for prey with your superior night-vision
${enter}`;

const gameOver2 = `Bats can see with their eyes, but their vision isn't as precise as echolocation. ${gameOver}`;

const q3 = `You sense something tasty is nearby and you flap towards it! Is it...
1. A bug, such as a moth, gnat, beetle, or cricket
OR
2. Berries, fruit or flowers
${enter}`;

const gameOver3 = `Small brown bats eat insects, but some other varieties of bats eat fruit, flower pollen, or even blood! ${gameOver}`;

const q4 = `You've successfully hunted enough bugs for tonight, time to head home. Where will you stay?...
1. A nest in a tree
OR
2. A cave, barn, or other shelter
${enter}`;

const gameOver4 = `Bats occasionally roost in trees, but generally stay in caves or in the eaves of man-made structures such as barns and garages. ${gameOver}`;

const q5 = `As you settle in for a long day's rest before tomorrow's bug hunt, you...
1. Crawl into your cozy nest 
OR
2. Find a suitable place to hang upside down for a few hours
${enter}`;

const gameOver5 = `Bats sleep upside down! ${gameOver}`;

const win = `CONGRATULATIONS! You are officially BATTY 🦇🦇🦇!!!`;


// Alerts the user to start the game via alert boxes that pop up.
alert(start);

// Using PROMPT sets the value of userInput to the user's entry. 
let userInput = prompt(q1);

// NESTED CONDITIONAL STATEMENTS
// 1ST Conditional Statement
// NOTE: Prompts return the value entered as a STRING, no matter what is entered. That is why double equals is used instead of triple equals (AKA Strict Equality), so it will still match
//Syntax: if (condition) {result};
if (userInput == 1){
    userInput = prompt(q2);

    //2nd conditional statement
    if (userInput == 1) {
        userInput = prompt(q3);

        //3rd conditional statement 
        if (userInput == 1) {
            userInput = prompt (q4);

            //4th conditional statement 
            if (userInput == 2) {
                userInput = prompt (q5);
                
                //5th conditional statement 
                if (userInput == 2) {
                    alert (win);
                }
                else {
                    alert (gameOver5);
                }
            } else {
                alert (gameOver4);
            }
        } else {
            alert (gameOver3);
        }
    } else {
        alert(gameOver2);
    }
} else {
    alert(gameOver1);
}