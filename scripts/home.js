// nav slider
let Nav_Pages = document.querySelector(".nav-pages");
const Slider_Nav = document.querySelector(".slider-nav");
const Slider = document.querySelector(".slider");
const Prev_Btn = document.querySelector(".prev-btn");
const Next_Btn = document.querySelector(".next-btn");

const First_Page_Btn = document.querySelector("first-page-btn");
const Last_Page_Btn = document.querySelector("last-page-btn");

let currentPosition = 0;
const step = 100;

// const Page_Btn_Size = Nav_Pages[0].clientWidth;

// Slider.style.transform = `translateX(${-Page_Btn_Size}px)`

// Prev_Btn.addEventListener("click", function() {
//     Slider.style.transition = '200ms ease-in-out transform';
//     currentPosition--;
// });

// Next_Btn.addEventListener("click", function() {
//     Move_Slider('Next');
// }); continuing*

function Move_Slider(direction) {
    if (direction === 'Prev') {
        currentPosition += step;
    } else {
        currentPosition -= step;
    }
    Slider.style.left = currentPosition + 'px';
}

Prev_Btn.addEventListener("click", function () {
    Move_Slider('Prev');
});

Next_Btn.addEventListener("click", function () {
    Move_Slider('Next');
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

        {
            quote: "“Perhaps we never truly get over the ones we love we simply learn to live with their absence the best we can. In this moment we choose the only form of love that's ever really guranteed. The love we have for ourselves.”",
            author: "- SISYPHUS55 [YT]"
        },

        {
            quote: "“We fear the unknown so we make-up stories.”",
            author: "- HOLY KOOLAID [YT]"
        },

        {
            quote: "“You don't need religion to have morals. If you can't determine right from wrong then you lack empathy not religion.”",
            author: "- RICKY MARTIN"
        },

        {
            quote: "“Allah is just one of the many hypothesis about god and Allah is powerless without Muslims just like Jesus is powerless without Christians.”",
            author: "- APOSTATE ALADDIN [YT]"
        },

        {
            quote: "“If you were never told about hell... you would not believe in hell”",
            author: "- MINDSHIFT"
        },

        {
            quote: "“You can't make someone value you more by giving them more of what they already don't appreciate.”",
            author: "@PHILODIGM [IG] (MAYBE)"
        },

        {
            quote: "“A goal without a plan is just a wish.”",
            author: "- ANTOINE DE SAINT-EXUPERY"
        },

        {
            quote: "“Who you are is what you do not what you say ”",
            author: "- 'DIANE' [BOJACK HORSEMAN | SERIES] @PosiTVty [YT]"
        },

        {
            quote: "“You can't heal what you refuse to acknowledge.”",
            author: "- ???"
        },

        {
            quote: "“Money doesn't change who you are; It amplifies your character.”",
            author: "- THINK BEFORE YOU SLEEP [YT]"
        },

        {
            quote: "“It's easy to take off all of your clothes and have sex. People do it all the time but opening up your soul to someone, letting them into your spirit, thoughts, fears, future, hopes, dreams... Now that's being naked.”",
            author: "- ???"
        },


        {
            quote: "“(Some) Men love to live in the I didn't know about the things they obviously knew.” “It's like I didn't know you were unhappy actually means I knew you were unhappy I just didn't know you were unhappy enough to leave.”",
            author: "- @EXPATRIARCH [YT]"
        },


        {
            quote: "“Expecting your partner to tolerate any level of permenent unhappiness in a relationship with you is you admitting that they would be better off and happier without you. So don't be surprised when they agree with you.”",
            author: "- @EXPATRIARCH [YT]"
        },


        {
            quote: "“It's not about making people think what we want them to think. That's exactly what abusers do. It's about empowering people with the tools to think for themselves.”",
            author: "- @THERAMINTREES [YT]"
        },


        {
            quote: "“Being single isn't about waiting for someone to complete you. It's about being complete on your own and then finding someone who appreciates that completeness.”",
            author: "- TINA FEY"
        },

        {
            quote: "“Poetry is found in between the words. In silences... in the pauses. Then people interpret it in different ways according to their age and maturity.”",
            author: "- 'SIRAS' [ALIGARH MOVIE]"
        },

        {
            quote: "“ Instead of the the simple “Be Yourself” maybe the better advice is: Be open to who you're becoming. Let yourself change, learn, adapt and grow. That's the real you. The one who's not afraid to evolve. ”",
            author: "- ALASTAIR [YT]"
        },
    
        {
            quote: "“ Life or things in general don't come with inherent meaning. We create and assign our own meaning to them through our actions, thought and values. In fact it's usually the investment into building something; The late nights, the hard work, the perseverance, the imperfection that makes something so beautiful and magical. And that is greatness. ”",
            author: "- CHLOE SHY [YT]"
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
