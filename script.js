/*------type-js-----*/

var typed = new Typed('#auto-type', {
    strings: ['CodersCave !', 'Your Perfect Destination for Internships !','here to Unlock Your Tech Potential !'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
    });

/*----------Menu----------*/

var navLinks = document.getElementById("navLinks");

        function showMenu(){
            navLinks.style.right = "0";
        }

        function hideMenu(){
            navLinks.style.right = "-200px";
        }