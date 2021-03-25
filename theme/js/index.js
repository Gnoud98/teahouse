
(function ($) {
  window.onload = function () {
    $(document).ready(function () {
     homeSlider();
     categorySlider();
     featureBlog()
     section__picture()
     tabProduct()
     productSame()
     menuDrink()
     backTop()
     menuMobile()
     asideNews()
     forgotpass()
     productThumbnail()
    });
  };
})(jQuery);


var homeSlider = function () {
    $(".home__slider").owlCarousel({
      loop: true,
      nav: false,
      dot: false,
      items: 1,
    });
  };
  var categorySlider = function () {
    $(".category__product-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  };

  var featureBlog = function () {
    $(".blog__content-list").owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });
  };
  var section__picture = function () {
    $(".section__picture").owlCarousel({
      loop: true,
      margin: 0,
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  };

  var tabProduct = function () {
    $(".tab-content-slider").owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  };
  var menuDrink = function () {
    $(".product-list-1").owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });

    $(".product-list-2").owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });

    $(".product-list-3").owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });

    $(".product-list-4").owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  };

  var productSame = function () {
    $(".product__same-list").owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  };

  var backTop = function () {
    var btn = $("#backTop");

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
    });

    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
  };

  var menuMobile = function () {
    $(document).ready(function () {
      $(".menubutton").on("click", function () {
        $(".menu__mb").addClass("open");
        $(".overlay").addClass("open");
      });
      $(".overlay").on("click", function () {
        $(".menu__mb").removeClass("open");
        $(".overlay").removeClass("open");
      });
      $(".menu-close-btn").on("click", function () {
        $(".menu__mb").removeClass("open");
        $(".overlay").removeClass("open");
      });
      $(".menu__mb-item").on("click", function () {
        $(this).find(".menu__mb-list-child").slideToggle();
      });
    });
  };

  var asideNews = function () {
    $(".slidedown").on("click", function () {
      $(".item_small").slideToggle();
    });
  };

  var forgotpass = function () {
    $(".forgot-btn").on("click", function () {
      $(".forgot-form").slideToggle();
    });
  };

  var productThumbnail = function () {
    $(document).ready(function () {
      var sync1 = $("#sync1");
      var sync2 = $("#sync2");
      var slidesPerPage = 4; //globaly define number of elements per page
      var syncedSecondary = true;

      sync1
        .owlCarousel({
          items: 1,
          slideSpeed: 2000,
          nav: false,
          autoplay: false,
          dots: false,
          loop: true,
          responsiveRefreshRate: 200,
          navText: [
            '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
            '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
          ],
        })
        .on("changed.owl.carousel", syncPosition);

      sync2
        .on("initialized.owl.carousel", function () {
          sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
          items: slidesPerPage,
          dots: false,
          nav: false,
          smartSpeed: 200,
          slideSpeed: 500,
          slideBy: slidesPerPage,
          responsiveRefreshRate: 100,
        })
        .on("changed.owl.carousel", syncPosition2);

      function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
          current = count;
        }
        if (current > count) {
          current = 0;
        }
        sync2
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
        var onscreen = sync2.find(".owl-item.active").length - 1;
        var start = sync2.find(".owl-item.active").first().index();
        var end = sync2.find(".owl-item.active").last().index();

        if (current > end) {
          sync2.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
          sync2.data("owl.carousel").to(current - onscreen, 100, true);
        }
      }

      function syncPosition2(el) {
        if (syncedSecondary) {
          var number = el.item.index;
          sync1.data("owl.carousel").to(number, 100, true);
        }
      }

      sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data("owl.carousel").to(number, 300, true);
      });
    });
  };
  
















//tab-product
function openTab(evt, tabContent) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" current", "");
  }
  document.getElementById(tabContent).style.display = "block";
  evt.currentTarget.className += " current";
}
// product number
(function () {
  window.inputNumber = function (el) {
    var min = el.attr("min") || false;
    var max = el.attr("max") || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function () {
      init($(this));
    });

    function init(el) {
      els.dec.on("click", minus);
      els.inc.on("click", plus);

      function minus() {
        var value = el[0].value;
        value--;
        if (!min || value >= min) {
          el[0].value = value;
        }
      }

      function plus() {
        var value = el[0].value;
        value++;
        if (!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  };
})();

inputNumber($(".pro-quantily"));
//tab chi tiết sản phẩm
function openTab1(evt, tabContent) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(tabContent).style.display = "block";
  evt.currentTarget.className += " active";
}

