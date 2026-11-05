    const toggle = document.querySelector('#profile-toggle');
    const card = document.querySelector('#profile-card');
    const layout = document.querySelector('#site-layout');

    function setProfileOpen(open) {
      card.hidden = !open;
      layout.classList.toggle('profile-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      const label = open ? 'Hide profile photo' : 'Show profile photo';
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
      if (open && card.getBoundingClientRect().top < toggle.getBoundingClientRect().bottom) {
        card.scrollIntoView({ block: 'center' });
      }
    }

    toggle.hidden = false;
    toggle.addEventListener('click', () => setProfileOpen(card.hidden));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !card.hidden) {
        setProfileOpen(false);
        toggle.focus();
      }
    });

    const navLinks = document.querySelectorAll('nav a');
    function updateNavigation() {
      const current = location.hash || '#home';
      navLinks.forEach(link => {
        if (link.getAttribute('href') === current) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    window.addEventListener('hashchange', updateNavigation);
    updateNavigation();
  
