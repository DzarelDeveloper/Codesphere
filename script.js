let modal = document.getElementById("myModal");

function displayModal() {
  modal.style.display = "block";
    }
    
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
            hide();
        }
    });

    function hide() {
        modal.style.display = "none";
    }