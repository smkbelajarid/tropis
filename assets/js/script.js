$(document).ready(function () {
  $("#tropis").hide();

  // // jika button cover di klik
  $("#btn-cover").click(function () {
    $("#tropis").show();
    $("#cover").hide();
  });

  // ==================== default =====================
  $(".btn-resepsi").css("color", "#7e7e7e");
  $(".btn-waktu-resepsi").css("color", "#7e7e7e");
  $("#maps-resepsi").hide();

  // ==================== btn waktu =====================
  $(".btn-waktu-resepsi").click(function () {
    $(".btn-waktu-resepsi").css("color", "#ffffff");
    $(".btn-waktu-pernikahan").css("color", "#7e7e7e");
  });

  $(".btn-waktu-pernikahan").click(function () {
    $(".btn-waktu-pernikahan").css("color", "#ffffff");
    $(".btn-waktu-resepsi").css("color", "#7e7e7e");
  });

  // ==================== btn pernikahan & respsi =====================
  $(".btn-resepsi").click(function () {
    $(".btn-pernikahan").css("color", "#7e7e7e");
    $(".btn-waktu-pernikahan").css("color", "#7e7e7e");
    $(".btn-resepsi").css("color", "#ffffff");
    $(".btn-waktu-resepsi").css("color", "#ffffff");
    $("#maps-resepsi").show();
    $("#maps-pernikahan").hide();
  });

  $(".btn-pernikahan").click(function () {
    $(".btn-resepsi").css("color", "#7e7e7e");
    $(".btn-waktu-resepsi").css("color", "#7e7e7e");
    $(".btn-pernikahan").css("color", "#ffffff");
    $(".btn-waktu-pernikahan").css("color", "#ffffff");
    $("#maps-pernikahan").show();
    $("#maps-resepsi").hide();
  });

  // ==================== music =====================
  var btnLanding = document.getElementById("btn-cover");
  var btnMusic = document.getElementById("btn-music");
  var audio = document.getElementById("player");

  audio.loop = true;

  btnLanding.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      btnLanding.innerHTML = '<i class="fa fa-volume-up"></i>';
    }
    return false;
  });

  btnMusic.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      btnMusic.innerHTML = '<i class="fa fa-volume-up"></i>';
    } else {
      audio.pause();
      btnMusic.innerHTML = '<i class="fa fa-volume-off"></i>';
    }

    return false;
  });

  windowScrollMainNav();

  function windowScrollMainNav() {
    $(window)
      .scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $(".section-bg").each(function (i) {
          if ($(this).position().top <= scrollDistance) {
            $(".navbar-container a.active").removeClass("active");
            $(".navbar-container a").eq(i).addClass("active");
          }
        });
      })
      .scroll();
  }

  $(document).on("click", 'a[href*="#"]', function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        600,
        function () {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
        }
      );

    return false;
  });

  // ==================== acara =====================
  $(".btn-waktu-resepsi").on("click", function () {
    $("#acara #acara-scroll .acara-detail").css("transform", "translateX(" + -250 + "px)");
    $("#btn-waktu-pernikahan").removeClass("active");
    $(this).addClass("active");
    console.log("ok");
  });
  $(".btn-waktu-pernikahan").on("click", function () {
    $("#acara #acara-scroll .acara-detail").css("transform", "translateX(" + 0 + "px)");
    $("#btn-waktu-resepsi").removeClass("active");
    $(this).addClass("active");
  });
});

// ==================== waktu =====================
var dateTimeEvent = "Apr 28, 2025 09:00:00";

var countDownDate = new Date(dateTimeEvent).getTime();

const clock = document.getElementById("waktu-container");
const daysSpan = clock.querySelector(".hari");
const hoursSpan = clock.querySelector(".jam");
const minutesSpan = clock.querySelector(".menit");
const secondsSpan = clock.querySelector(".detik");

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(x);
    daysSpan.innerHTML = 0;
    hoursSpan.innerHTML = 0;
    minutesSpan.innerHTML = 0;
    secondsSpan.innerHTML = 0;
  } else {
    daysSpan.innerHTML = days;
    hoursSpan.innerHTML = hours;
    minutesSpan.innerHTML = minutes;
    secondsSpan.innerHTML = seconds;
  }
}, 1000);

// ==================== maps pernikahan =====================
var platform = new H.service.Platform({
  app_id: "Qj0Oi2FClG9rVKn1iErQ",
  app_code: "lnY9R1x-_rJF4GBaxSEJzA",
  useCIT: true,
  useHTTPS: true,
});
var defaultLayers = platform.createDefaultLayers();
var maptypes = platform.createDefaultLayers();
var map = new H.Map(document.getElementById("maps-container-pernikahan"), maptypes.normal.map, {
  zoom: 14,
  center: {
    lng: 115.244156,
    lat: -8.644065,
  },
});
var icon = new H.map.Icon("https://www.weddingku.id/wp-content/themes/weddingku/images/webassets/map-marker.png");
var marker = new H.map.Marker(
  {
    lat: -8.644065,
    lng: 115.244156,
  },
  {
    icon: icon,
  }
);
map.addObject(marker);
var ui = H.ui.UI.createDefault(map, defaultLayers);

// ==================== maps resepsi =====================
var platform = new H.service.Platform({
  app_id: "Qj0Oi2FClG9rVKn1iErQ",
  app_code: "lnY9R1x-_rJF4GBaxSEJzA",
  useCIT: true,
  useHTTPS: true,
});
var defaultLayers = platform.createDefaultLayers();
var maptypes = platform.createDefaultLayers();
var map = new H.Map(document.getElementById("maps-container-resepsi"), maptypes.normal.map, {
  zoom: 14,
  center: {
    lng: 115.241769,
    lat: -8.636873,
  },
});
var icon = new H.map.Icon("https://www.weddingku.id/wp-content/themes/weddingku/images/webassets/map-marker.png");
var marker = new H.map.Marker(
  {
    lat: -8.636873,
    lng: 115.241769,
  },
  {
    icon: icon,
  }
);
map.addObject(marker);
var ui = H.ui.UI.createDefault(map, defaultLayers);
