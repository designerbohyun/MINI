$(document).ready(function(){

  media();

  function media(){

    var windowWidth = $(window).width();
    if(windowWidth >= 960){

      var swiper = new Swiper(".mySwiper", {
        loop:true,
        effect:"fade",
        autoplay:{
          delay:4500,
          disableOnInteraction: false,
        },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        });

        var swiper = new Swiper(".firstSwiper", {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
        });

        var swiper = new Swiper(".secondSwiper", {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
        });

        $(window).scroll(function(){
          const sct = $(window).scrollTop();
          if(sct >= 1890){
            console.log('스크롤추가');
              $('.header-box').addClass('active');
              $('.logo').addClass('active');
              $('.menu li a').addClass('active');
              $('.user li a').addClass('active');
          }else{
            $('.header-box').removeClass('active');
              $('.logo').removeClass('active');
              $('.menu li a').removeClass('active');
              $('.user li a').removeClass('active');
          }
        });

    }else{

      var swiper = new Swiper(".mySwiper", {
        loop:true,
        effect:"fade",
        autoplay:{
          delay:4500,
          disableOnInteraction: false,
        },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        });

        var swiper = new Swiper(".firstSwiper", {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
        });

        var swiper = new Swiper(".secondSwiper", {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
        });

        $(window).scroll(function(){
          const sct = $(window).scrollTop();
          if(sct >= 900){
            consol.log('스크롤추가');
              $('.header-box').addClass('active');
              $('.logo').addClass('active');
              $('#hamburger span').addClass('active');
          }else{
            $('.header-box').removeClass('active');
              $('.logo').removeClass('active');
              $('#hamburger span').removeClass('active');
          }
        });

      $('#hamburger').click(function(){
        $('.menu-mo').addClass('active');
      });

      $('#hamburger2').click(function(){
        $('.menu-mo').removeClass('active');
      });

    }


  }

  });