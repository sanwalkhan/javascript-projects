var quotes = [`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
`"The way to get started is to quit talking and begin doing."`,
`"Your time is limited, so don't waste it living someone else's life.`,
`"If life were predictable it would cease to be life, and be without flavor." `,
`"If you get up in the morning and think the future is going to be better, it is a bright day. "`,

`"Some people don't like change, but you need to embrace change if the alternative is disaster."`,

`“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.” ― Helen Keller`,
`"Whether you think you can or you think you can't, you're right...."`,

`"I have learned over the years that when one's mind is made up, this diminishes fear." `,
`“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” – Socrates `


]


const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    const randomquotes = Math.floor(Math.random()* quotes.length)
    document.getElementById("quote").innerHTML = quotes[randomquotes];
    console.log(`randomquotes`, randomquotes);
})

