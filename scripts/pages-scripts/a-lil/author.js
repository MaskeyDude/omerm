// story popup
function Toggle_Story_Popup(num) {
    document.getElementById(`story-${num}`).classList.toggle("active-story-popup");
}


function Desc_Appear() {
    var Section_Desc = document.querySelector(".section-desc");
    Section_Desc.classList.toggle("hide-show-desc");
};


































// author story cards
// const Card = [
//     {
//         id: 0,
//         link: "https://www.pexels.com/photo/morning-sunrise-27282677/",
//         img: "../../images/for-pages/lil-author/story-0.jpg",
//         alt: "By santhepix [Pexels]",
//         // readLink: ,
//         title: "Story #0",
//         date: "WED, 07 AUG 2024 AT 12:54 AM"
//     },

//     {
//         id: 1,
//         link: "https://www.pexels.com/photo/morning-sunrise-27282677/",
//         img: "../../images/for-pages/lil-author/story-0.jpg",
//         alt: "By santhepix [Pexels]",
//         // readLink: ,
//         title: "Story #1",
//         date: "WED, 07 AUG 2024 AT 12:54 AM"
//     },

// ];

// // getting card container
// const Picos_Stories_Container = document.querySelector(".picos-stories");

// document.addEventListener("DOMContentLoaded", function() {
//     Display_Story_Cards(Card);
// });

// function Display_Story_Cards(Story_Cards) {
//     let Display_Card = Story_Cards.map(function (item) {
//         return `<div class="pico-story">
//                     <a href="${item.link}" target="_blank">
//                         <img src="${item.img}" alt="${item.alt}">
//                     </a>
//                     <div class="story-info">
//                         <p>${item.title}</p>
//                         <button class="read-story-btn" onclick="Open_Popup()">READ</button>
//                     </div>
//                     <div class="story-date">
//                         <hr>
//                         <p>${item.date}</p>
//                     </div>
//                 </div>`;
//     });

//     Display_Card = Display_Card.join("");
//     Picos_Stories_Container.innerHTML = Display_Card;

// };


// // author story popup
// const Story_Popup = [
//     {
//         id: 0,
//         link: "https://www.pexels.com/photo/morning-sunrise-27282677/",
//         img: "../../images/for-pages/lil-author/story-0.jpg",
//         alt: "By santhepix [Pexels]",
//         // readLink: ,
//         title: "Story #0",
//         story: "I remember looking out at mountains far looking like soft blue shadows turning golden through the breaks of dusk. I remember being there while the wind coming through opened windows caused a lot of noise. I remember the warm hands rubbing my cold stiff ones while her face found rest on my shoulder. I remember the car not moving slower. Though I recall how only the slowed time remembers my mind invariant stood the bluster yet with her, how silent remained my mind.",
//         date: "WED, 07 AUG 2024 AT 12:54 AM"
//     },

// ];

// // getting card container
// const Pico_Story_Popup = document.querySelector(".pico-story-popup");
// const Read_Story_Btn = document.querySelector(".read-story-btn");

// // Read_Story_Btn.forEach(e).addEventListener("click", function() {
//     //     Display_Story_Popup(Story_Popup);
//     // });

// function Open_Popup() {
//     Pico_Story_Popup.style.display = "block";
//         Display_Story_Popup(Story_Popup);
// };

// function Display_Story_Popup(Story) {
//     let Display_Story = Story.map(function (item) {
//         return `<section class="pico-story-popup">
//                     <div class="pico-section">
//                         <a href="https://www.pexels.com/photo/morning-sunrise-27282677/" target="_blank">
//                             <img src="../../images/for-pages/lil-author/story-0.jpg" alt="By santhepix [Pexels]">
//                         </a>
//                     </div>
//                 <div class="story-section">
//                     <p>${item.story}</p>
//                     <p class="story-date">${item.date}</p>
//                 </div>
//             </section>`;
//     });

//     Display_Story = Display_Story.join("");
//     Story_Popup.innerHTML = Display_Story;

// };