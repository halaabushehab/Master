// script.js

// Get the modal
var modal = document.getElementById("myModal");

// Get the element that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the element, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





//   document.addEventListener("DOMContentLoaded", function() {
//     const stars = document.querySelectorAll('.star');
//     const ratingInput = document.getElementById('rating');

//     stars.forEach(star => {
//         star.addEventListener('mouseover', function() {
//             const value = parseInt(star.getAttribute('data-value'));
//             highlightStars(value);
//         });

//         star.addEventListener('mouseout', function() {
//             const currentRating = parseInt(ratingInput.value);
//             highlightStars(currentRating);
//         });

//         star.addEventListener('click', function() {
//             const value = parseInt(star.getAttribute('data-value'));
//             ratingInput.value = value;
//             highlightStars(value);
//         });
//     });

//     function highlightStars(value) {
//         stars.forEach(star => {
//             const starValue = parseInt(star.getAttribute('data-value'));
//             if (starValue <= value) {
//                 star.classList.add('active');
//             } else {
//                 star.classList.remove('active');
//             }
//         });
//     }
// });
