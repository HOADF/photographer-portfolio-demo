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
       document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.portfolio-image');
        
        images.forEach(img => {
            img.addEventListener('error', function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkZhbWlseSBQaG90bzwvdGV4dD48L3N2Zz4=';
                this.alt = 'Изображение не загружено';
            });
        });
    });
