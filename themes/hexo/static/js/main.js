$(function () {
  $('.post-content img').addClass('slb');
  $('.slb').simplebox({
    fadeSpeed: 100
  });

  $(document).on('scroll', function () {
    var $pageScrollTop = $(this).scrollTop()
    if ($pageScrollTop > 200) {
      $('.gotop').addClass('act')
    } else {
      $('.gotop').removeClass('act')
    }
  })

  $('.gotop').on('click', function () {
    $('html, body').stop().animate({
      scrollTop: 0
    })
  })

  $('nav em').click(function () {
    $(this).toggleClass('act');
    $('nav ul').slideToggle();
  })

  $('nav ul a').each(function () {
    if ($(this).attr('href') == window.location.pathname) {
      $(this).addClass('active');
    }
  })

})

$("#searchTerm").focus();

// 评论切换
function comments() {
  $('.comments-title>li:nth-child(1)').addClass('active');
  $('.comments-content>.item:nth-child(1)').show();

  $('.comments-title>li').each(function () {
    $(this).click(function () {
      $('.comments-title>li').removeClass('active');
      $(this).addClass('active');
      var index = $(this).index() + 1;
      $('.comments-content>.item').hide();
      $('.comments-content>.item:nth-child(' + index + ')').show();
    })
  })
}
comments();

// 黑夜模式
function themedark() {
  var themedark = localStorage.getItem('themedark');
  if (themedark == 'dark') {
    $('body').addClass('dark');
  }
  $('#theme-toggle').click(function () {
    $('body').toggleClass('dark');
    if ($('.dark').length > 0) {
      localStorage.setItem('themedark', 'dark');
    } else {
      localStorage.setItem('themedark', 'light');
    }

  })
}
themedark();