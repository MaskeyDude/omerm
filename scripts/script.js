// nav drop down
const A_Lil = document.querySelector(".a-lil");

A_Lil?.addEventListener("click", function() {
    let Nav_Main = document.querySelector(".nav-main");
    let Nav_Dropdown = document.querySelector(".nav-dropdown");
    Nav_Main.classList.toggle("after-dropdown");
    Nav_Dropdown.classList.toggle("nav-visible");
});









// random quote
const Generate_Quote = function () {

    const Quotes = [
        {
            quote: "“ If you don't sacrifice for what you want, what you want becomes the sacrifice. ”",
            author: "- ALEX EUBANK"
        },

        {
            quote: "“ There is no one who avoids you as much as someone who owes you an apology. ”",
            author: "@PERSEPHONESMIND [YT]"
        },

        {
            quote: "“ The one person that can give you the love you need is yourself. ”",
            author: "@PERSEPHONESMIND [YT]"
        },

        {
            quote: "“ If you don't control what you consume, what you consume will control you. ”",
            author: "- @PERSEPHONESMIND [YT]"
        },
        
        {
            quote: "“ Your comparisons and the need to always be in competition with others just shows how desperate you are because you have the need to be better than them. This is nothing that matters. Be better than yourself. This is what matters. ”",
            author: "- @PERSEPHONESMIND [YT]"
        },

        {
            quote: "“ If someone is confident they wouldn't feel the need to be mean to others to elevate themselves. 'Confidence does not equal being mean.' ”",
            author: "- @PERSEPHONESMIND [YT]"
        },

        {
            quote: "“ You're the observation of your conscienceness ”",
            author: "- DILLIAM LATHAM [YT]"
        },        
        
        {
            quote: "“ Instead of saying my purpose is to be happy. The Quran is arguing that happiness is a by product of when you live life purposefully. ”",
            author: "- NOUMAN ALI KHAN"
        },        
        
        {
            quote: "“ Just because you understand the technical work of a business doesn't mean that you understand a business that does the technical work. ”",
            author: "@LITTLEBITBETTER7 [YT]"
        },        
        
        {
            quote: "“ When you think of your goal or dream. Don't look at the entire mountain you're about to climb. Just find where you're going to put your foot next. ”",
            author: "- SLEEPY CHARLIE [YT]"
        },        
        
        {
            quote: "“ Piracy is the result of bad service ”",
            author: "(don't remember sorry!)"
        },        
        
        {
            quote: "“ In life people around us give us all the information we need to be aware 'of who they are' nut it's our love for them that blinds us. ”",
            author: "- DERIKFAY [YT]"
        },        
        
        {
            quote: "“ When you really know somebody you cannot hate them or maybe it's just that you can't really know them until you stop hating them. ”",
            author: "- ORSON SCOTT CORD"
        },        
        
        {
            quote: "“ Let those feelings flow freely. Hold on as tight as you can until eventually, You let go effortlessly.”",
            author: "@rayhan.arraFFi [INSTA]"
        },
        
        {
            quote: "“ You let go by holding on as long as you need to. You welcome those feelings. To let go means embracing the feelings. ”",
            author: "@rayhan.arraFFi [INSTA]"
        },

        {
            quote: "“ Make original mistakes. ”",
            author: "- SCOTT BRADY"
        },


        {
            quote: "“ Relationships often struggle not because the lack of chemistry but the lack of foundation. ” (Friendship is the foundation)",
            author: "- MATTHEW HUSSEY [YT]"
        },

        {
            quote: "“ Having good friendships is already a first sign of you having a good core for a romantic relationship. ”",
            author: "- MATTHEW HUSSEY [YT]"
        },

        {
            quote: "“ And it's beautiful because you had to breakdown in a way to shed what wasn't you to start to explore and discover who you really are. ”",
            author: "@LAVENDAIRE [YT]"
        },

        {
            quote: "“ As if you're like a detective... ,” “ Record everything you're drawn to... ,” only to realize “ All the things you had collected are actually just you. ”",
            author: "- CRYSTAL [YT]"
        },

        // {
        //     quote: "“  ”",
        //     author: "- "
        // },

    ];

    let Random_Quote = Math.floor(Math.random() * Quotes.length);
    document.querySelector(".quote").innerHTML = Quotes[Random_Quote].quote;
    document.querySelector(".q-by").innerHTML = Quotes[Random_Quote].author;

};

window.onload = function () {
    Generate_Quote();
    const Q_Btn = document.querySelector(".q-btn").addEventListener("click", Generate_Quote);
};



























