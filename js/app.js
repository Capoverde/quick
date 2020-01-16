$(function () {
  console.log('#########################################')
  console.log('######## jQuery 3.4.1.slim.min.js #######')
  console.log('#########################################')

  /*  ------ aos object --------
   link to documentation: https://github.com/michalsnik/aos
  */
  AOS.init()

  // ----- totop ------ //
  if ($('#totop').length) {
    var scrollTrigger = 300; // px
      var backToTop = function () {
        var scrollTop = $(window).scrollTop()
        if (scrollTop > scrollTrigger) {
          $('#totop').addClass('showTop')
        } else {
          $('#totop').removeClass('showTop')
        }
      }
    backToTop()
    $(window).on('scroll', function () {
      backToTop()
    })
    $('#totop').on('click', function (e) {
      e.preventDefault()
      $('html,body').animate({
        scrollTop: 0
      }, 700)
    })
  }

  // ------ smooth scroll to secion
  $(document).on('click', 'a', function (event) {
    event.preventDefault()
    $('html,body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800)
  })
})
