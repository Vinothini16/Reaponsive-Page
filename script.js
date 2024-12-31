// Function to handle scroll event and change navbar style
window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      // Add 'scrolled' class when user scrolls more than 50px
      navbar.classList.add('scrolled');
    } else {
      // Remove 'scrolled' class when at the top
      navbar.classList.remove('scrolled');
    }
  };
  
  // Hover effect for changing the background of the navigation menu
  const navLinks = document.querySelectorAll('#navbar ul li a');
  
  navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
      link.style.backgroundColor = '#444'; // Change background on hover
    });
  
    link.addEventListener('mouseout', function() {
      link.style.backgroundColor = ''; // Reset background when hover ends
    });
  });
  