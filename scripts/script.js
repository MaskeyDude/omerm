const Generate_Quote = function () {

    const Quotes = [
        {
            quote: "“If you don't sacrifice for what you want, what you want becomes the sacrifice.”",
            author: "Alex Eubank"
        },

        {
            quote: "“There is no one who avoids you as much as someone who owes you an apology.”",
            author: "@Persephonesmind"
        },

        {
            quote: "“The one person that can give you the love you need is yourself.”",
            author: "@Persephonesmind"
        },
];

    let Random_Quote = Math.floor(Math.random() * Quotes.length);
    document.querySelector(".quote").innerHTML = Quotes[Random_Quote].quote;
    document.querySelector(".q-by").innerHTML = Quotes[Random_Quote].author;

};

window.onload = function () {
    Generate_Quote();
    const Q_Btn = document.querySelector(".q-btn").addEventListener("click", Generate_Quote);
};







