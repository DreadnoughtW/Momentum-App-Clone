const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: "Martin Luther King Jr",
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein",
    },
    {
        quote: "Fairness does not mean everyone gets the same. Fairness means everyone gets what they need.",
        author: "Rick Riordan"
    }
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = `- ${todaysQuote.author}`;
  