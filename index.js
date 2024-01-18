
// =========================
// Sticky Navigation
// =========================

document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('myHeader');
	  var page = document.getElementById('page');
    var openMenuButton = document.getElementById('openmenu');

    window.addEventListener('scroll', function() {
				page.classList.remove('menuopen');
        if (window.scrollY >= 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Event listener to remove the sticky class when the button is clicked
    openMenuButton.addEventListener('click', function() {
        header.classList.remove('sticky');
				page.classList.add('menuopen');
    });
	
	var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default action
            event.preventDefault();

            // Get the target element
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            // Smooth scroll to target
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


// =========================
// Longboards Grid Hover
// =========================

var container = document.getElementById("container");

container.addEventListener('mouseover', function() {
  var el = this.children[1];
  el.style.top = 0;
  el.style.opacity = 1;
}, false);

container.addEventListener('mouseout', function() {
  var el = this.children[1];
  el.style.top = "100%";
  el.style.opacity = 0.3;
}, false);

// =========================
// Longboards Container Two
// =========================
var container = document.getElementById("containerfade");

container.addEventListener('mouseover', function() {
  var el = this.children[1];
  el.style.top = 0;
  el.style.opacity = 1;
}, false);

container.addEventListener('mouseout', function() {
  var el = this.children[1];
  el.style.top = "100%";
  el.style.opacity = 0.3;
}, false);
