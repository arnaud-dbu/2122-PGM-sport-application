(() => {
  const app = {

    init() {
      console.log("working!");
      this.cacheElements();
      this.addEventListener();
    },
    cacheElements() {
      this.$mobileNav = document.querySelector('.mobile-nav');
      this.$hamburger = document.querySelector('.header__hamburger');
      this.$mobileClose = document.querySelector('.mobile-nav__close');
      this.$mobileClose = document.querySelector('.mobile-nav__close');
      this.$filters = document.querySelectorAll('.grid-top__btn');
      this.$filtersOptions = document.querySelectorAll('.filter-options');
    },
    addEventListener() {

      this.$hamburger.addEventListener('click', (ev) => {
        this.$mobileNav.classList.remove('js-hidden');
      })

      this.$mobileClose.addEventListener('click', (ev) => {
        this.$mobileNav.classList.add('js-hidden');
      })

      this.$filters.forEach((btn) => {
        btn.addEventListener('click', (ev) => {
          ev.preventDefault();
          this.$currentBtn = btn.querySelector('.filter-options');

          this.$filtersOptions.forEach((filter) => {
            if (filter == this.$currentBtn) {
              this.$currentBtn.classList.toggle('js-hidden');
            } else {
              filter.classList.add('js-hidden');
            }
          })
        })
      });
    }
  };

  app.init();
})();