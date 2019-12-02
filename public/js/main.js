
// var circlePosition = document.getElementsByClassName('user-panel');
// console.log(circlePosition);

// function position() {
//   for (var i = 0; i < circlePosition.length; i++ ) {
//     //give circle a random position
//     var posx = (Math.random() * ($(document).width() - 0)).toFixed();
//     var posy = (Math.random() * ($(document).height() - 0)).toFixed();

//     //apply position to circle
//     $(circlePosition[i]).css({
//       'position':'absolute',
//       'left':posx+'px',
//       'top':posy+'px',
//     })
//   } 
// } //end function position

// var circleTotal = circlePosition.length;

// $('.circle').click(function() {
//   $(this).fadeOut();
//   circleTotal = circleTotal - 1;
//   console.log(circleTotal);

//   if(circleTotal == 0) {
//     position()
//     $('.circle').fadeIn();
//   }

// });

// position();

const myVM = (() => {
    let userButtons = document.querySelectorAll(".u-link");
    let lightBox = document.querySelector(".lightbox");
    
    function parseUserData(person) {
      let targetDiv = lightBox.querySelector(".lb-content");
      let targetImg = lightBox.querySelector("img");
  
      let bioContent = `
      <h2>${person.Name}</h2>
      <h4>${person.Nickname}</h4>
      <h5>Win percent (%): ${person.Win}</h5>
      <h5>Popularity (%): ${person.Popularity}</h5>
      <h6>${person.Quote}</h6>

      
      `;
  
      targetDiv.innerHTML = bioContent;
      targetImg.src = person.currentSrc;
      lightBox.classList.add("show-lb");
    }
  
    function getUserData(e) {
      e.preventDefault();
      let url = `/users/${this.getAttribute("href")}`,
        currentImg = this.previousElementSibling.getAttribute("src");
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          data.currentSrc = currentImg;
          parseUserData(data);
        })
        .catch(err => console.log(err));
    }
  
    userButtons.forEach(button => button.addEventListener("click", getUserData));
    lightBox.querySelector(".close").addEventListener("click", function() {
      lightBox.classList.remove("show-lb");
    });
  })();
  