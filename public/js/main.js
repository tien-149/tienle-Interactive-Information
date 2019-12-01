const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let userButtons = document.querySelectorAll(".u-link");
    let lightBox = document.querySelector(".lightbox");

    function parseUserData(person) {
      let targetDiv = lightBox.querySelector(".lb-content");
      let targetImg = lightBox.querySelector("img");
  
      let bioContent = `
      <p>${person.Introduction}</p>
      
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
  