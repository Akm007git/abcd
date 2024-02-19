const quotes = [
  "You had me at hello.",
 "Would you like to be mine completely",
  "In all the world, there is no heart for me like yours.",
  "Party de dalal ",
  "I Can assure you one thing my heart-beat still increases infront of you",
  "My heart is and always will be yours if you like? choice is yours, i'm not gonna ask you",
  "first and final in my opinion, whats yours?",
  "If something is in your mind tell me (btw not here)",
  "Hey 11112222255559 >  Enough",
  "You are my heart, my life, my one and only thought.",
  "Every love story is beautiful, but ours is my favorite.",
  "If there's something you can tell me",
  "Waiting for your reply",
  

];
const pops = [
  "are you ready for next?",
  "do you love me?",
  "can i tell you something?",
  " i ve limited stock of data by the way so bad luck",
];

const btn  = document.querySelector("#generate-btn");
const quote = document.querySelector("#quote");

const change = ()=>
{
    console.log("im cli");

    const randomIndex = Math.floor(Math.random()*quotes.length);
    quote.textContent = quotes[randomIndex];

}

btn.addEventListener("click", () => {
    if (confirm(pops[Math.floor(Math.random()*pops.length)])) {
        change();
    }
    else{
      quote.textContent = "Choose OK😏,there's nothing here....."
    }
});
