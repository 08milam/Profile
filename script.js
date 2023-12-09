
// title: 
// type: js
// creation date:
// modification date:
// note: 
// programmer: Matthew Milam

    /*******************************************************************/ 
    let targetElement = document.querySelector(".navbar");
    let halfwayPoint = window.innerHeight / 35;
    window.onscroll = function() {
      let scrollPosition = window.scrollY;
      if (scrollPosition >= halfwayPoint) {
        targetElement.style.backgroundColor = "rgba(23, 23, 23, 1)"; 
      } else {
        targetElement.style.backgroundColor = "transparent";
      }
    };

                        // new code below this line
    /*******************************************************************/ 

