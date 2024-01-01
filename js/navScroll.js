const nav = document.querySelector(".header-box");
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () =>{
            if (lastScrollY < window.scrollY) {
                nav.classList.add("nav-hidden");
            }else{
                nav.classList.remove("nav-hidden");
            }

            lastScrollY = window.scrollY;
            if (window.scrollY <= 0) {
            nav.classList.remove('nav-hidden');
    }

        });