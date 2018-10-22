const FadePageTransition = Barba.BaseTransition.extend({
  start: function () {
    Promise.all([this.newContainerLoading,
      this.fadeOut()]).then(this.fadeIn.bind(this))
  },
  fadeOut: function () {
    const oldContainer = this.oldContainer;
    return new Promise(function (resolve) {
      anime({
        targets: oldContainer,
        opacity: 0,
        translateY: 100,
        easing: 'easeInCubic',
        duration: 300,
        complete: function () {
          resolve()
        }
      })
    })
  },
  fadeIn: function () {
    const _this = this;
    const oldContainer = this.oldContainer;
    const newContainer = this.newContainer;
    window.scrollTo(0, 0);
    oldContainer.style.display = 'none';
    newContainer.style.visibility = 'visible';
    newContainer.style.opacity = 0;
    newContainer.style.transform = 'translateY(100px)';
    anime({
      targets: newContainer,
      opacity: 1,
      translateY: 0,
      easing: 'easeOutCubic',
      duration: 600,
      complete: function () {
        _this.done()
      }
    })
  }
});
Barba.Pjax.getTransition = function () {
  return FadePageTransition
};

Barba.Prefetch.init();

document.addEventListener('DOMContentLoaded', function (e) {
  Barba.Pjax.start();
});
