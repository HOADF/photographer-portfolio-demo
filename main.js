const menuToggle = document.getElementById('menuToggle');
        const menuClose = document.getElementById('menuClose');
        const mobileMenu = document.getElementById('mobileMenu');
        const overlay = document.getElementById('overlay');
        
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('mobile-menu--open');
            overlay.classList.add('overlay--visible');
            document.body.style.overflow = 'hidden';
        });
        
        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('mobile-menu--open');
            overlay.classList.remove('overlay--visible');
            document.body.style.overflow = 'auto';
        });
        
        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('mobile-menu--open');
            overlay.classList.remove('overlay--visible');
            document.body.style.overflow = 'auto';
        });
        
        // Close menu when clicking on links
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('mobile-menu--open');
                overlay.classList.remove('overlay--visible');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
                this.reset();
            });
        }
