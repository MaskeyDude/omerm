// blog link cards
const Card = [
    {
        id: 2,
        title: "THE REASON TO LIVE",
        link: "../../pages/blogs/blah-2.html",
        time: "MON, 05 AUG AT 06:30 PM"
    },

    {
        id: 1,
        title: "ThE CARE, NoW A DIsTURBANCE...?",
        link: "../../pages/blogs/blah-1.html",
        time: "WED, 10 JUL AT 07:26 AM"
    },

    {
        id: 0,
        title: "My fiRsT blog i gUEss?",
        link: "../../pages/blogs/blah-0.html",
        time: "FRI, 05 JUL AT 10:18 AM"
    },

];

// getting card container
const Blog_Card_Container = document.querySelector(".blog-card-container");

window.addEventListener("DOMContentLoaded", function() {
    Display_Blog_Cards(Card);
});

function Display_Blog_Cards(Blog_Cards) {
    let Display_Card = Blog_Cards.map(function (item) {
        return `<div class="blog">
                    <a href="${item.link}">${item.title}</a>
                    <p class="time">${item.time}</p>
                </div>`;
    });

    Display_Card = Display_Card.join("");
    Blog_Card_Container.innerHTML = Display_Card;

};