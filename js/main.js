$(window).bind({
    load:function(){
        /* preloader */
        $('#preloader').delay(1000).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});

        /* main swiper */
        var mySwiper = new Swiper('.swiper-container',{
            pagination: '.my-pagination',
            paginationClickable: true,
            mode:'vertical',
            loop: false,
            mousewheelControl: true,
            keyboardControl: true,
            watchSlideProgress: true,
            watchVisibility: true,
            hashNav: true,
            onSlideChangeStart: function (swiper) {
                /* toggle navbar */
                var all_slides = $('#swiper-wrapper > .swiper-slide').length - 1;
                var navbarBrand = $(".navbar-header .navbar-brand");

                if (swiper.activeIndex == 0 || swiper.activeIndex == all_slides) {
                    $('.navbar').show();
                    $(".icon-bar").css("background-color", "#fff");
                    $(navbarBrand).css("background-image", "url(./img/logo-white.png)");
                    $(".navbar-nav li a").addClass("text-white");
                    $(".navbar-nav li a").removeClass("text-black");

                } else if ($("#swiper-wrapper > .swiper-slide-active").css('background-color')
                    =="rgb(255, 255, 255)") {
                    $(".navbar-nav li a").removeClass("text-white");
                    $(".navbar-nav li a").addClass("text-black");
                    $(".navbar").show();
                    $(".icon-bar").css("background-color", "#000");
                    $(navbarBrand).css("background-image", "url(./img/logo.png)");
                } else {
                    $('.navbar').hide();
                }

                /* change text-color in navbar */
                var swiperId = swiper.activeIndex;

                $("#nav li a#"+ swiperId).addClass("active-link");
                $("#nav li a#"+ swiper.previousIndex).removeClass("active-link");
                $(".icon-list-item#" + swiperId).addClass("active-link");
                $(".icon-list-item#"+ swiper.previousIndex).removeClass("active-link");

                /* text animations for authors section */
                $(".authors-heading-container").hide();
                $(".authors-icons-container").hide();
        
                var authorsScenes = [ "#scene3","#scene4", "#scene5" ];

                $.each(authorsScenes, function(i, scene){
                    var element = $(scene);

                    element.mouseenter(function(){
                        var layerHeading = $(this).find(".authors-heading-container"),
                            layerIcons =  $(this).find(".authors-icons-container");
                            layerHeading.show();
                            layerHeading.removeClass("animated fadeOut");
                            layerHeading.addClass("animated fadeInDown");

                            layerIcons.show();
                            layerIcons.removeClass("animated fadeOut");
                            layerIcons.addClass("animated fadeInUp");
                    })

                    element.mouseleave(function(){
                        var layerHeading = $(this).find(".authors-heading-container"),
                            layerIcons =  $(this).find(".authors-icons-container");

                            layerHeading.removeClass("animated fadeInDown")
                            layerHeading.addClass("animated fadeOut")

                            layerIcons.removeClass("animated fadeInUp")
                            layerIcons.addClass("animated fadeOut")          
                        })
                    })

                /* text animations for portfolio section */
                var currentPortfolioSlide = $(".portfolio-slide");

                $.each(currentPortfolioSlide, function(i, slide) {
                    /*console.log(slide);*/

                    var currentPortfolioHeading = $(this).find(".portfolio-heading"),
                        currentPortfolioSubtext = $(this).find(".portfolio-subtext")              
                    /*console.log(currentPortfolioSubtext);*/
                    
                    if ($(slide).hasClass("swiper-slide-active")) {
                        /*console.log("active")*/  
                        $(currentPortfolioHeading).addClass("animated fadeInDown");
                        $(currentPortfolioSubtext).addClass("animated fadeInUpBig");
                    } else {
                        $(currentPortfolioHeading).removeClass("animated fadeInDown");
                        $(currentPortfolioSubtext).removeClass("animated fadeInUpBig");
                    }       
                })

                /* text animations for contact section */
                var contactSupertext = $(".contact-supertext"),
                    contactHeading = $(".contact-heading")
                if($("#swiper-wrapper > .swiper-slide-active").hasClass("contact")) {
                    contactSupertext.addClass("animated fadeInDown");
                    contactHeading.addClass("animated fadeInUp");
                } else {
                    contactSupertext.removeClass("animated fadeInDown");
                    contactHeading.removeClass("animated fadeInUp");
                }

                 /* text animations for other sections */
                var pMission = $(".mission-paragraph"),
                    missionSubtext = $(".mission-subtext"),
                    servicesHeading = $(".services-heading"),
                    circleMission = $(".mission .circle"),
                    circleImgClients = $(".clients .circle"),
                    clientsContainers = $(".clients-container"),
                    servicesContainers = $(".services .col-sm-4"),
                    aboutParagraph = $(".about-paragraph"),
                    aboutSuperText = $(".about-supertext")

                if($("#swiper-wrapper > .swiper-slide-active").css('background-color') =="rgb(255, 255, 255)") {
                    pMission.addClass("animated fadeInUpBig");
                    missionSubtext.addClass("animated fadeInUpBig");
                    circleMission.addClass("animated fadeInUp");
                    aboutParagraph.addClass("animated fadeInUp");
                    aboutSuperText.addClass("animated fadeInDown");
                    $(clientsContainers[0]).addClass("animated fadeInUp")
                    $(clientsContainers[1]).addClass("animated fadeInUpBig")
                    $(servicesContainers[0]).addClass("animated fadeInUp");
                    $(servicesContainers[1]).addClass("animated fadeInUpBig");
                    $(servicesContainers[2]).addClass("animated fadeInUpBig delayed")           
                } else { 
                    pMission.removeClass("animated fadeInUpBig")
                    missionSubtext.removeClass("animated fadeInUpBig");
                    circleMission.removeClass("animated fadeInUp");
                    aboutParagraph.removeClass("animated fadeInUp");              
                    aboutSuperText.removeClass("animated fadeInDown");
                    $(clientsContainers[0]).removeClass("animated fadeInUp")
                    $(clientsContainers[1]).removeClass("animated fadeInUpBig")
                    $(servicesContainers[0]).removeClass("animated fadeInUp");
                    $(servicesContainers[1]).removeClass("animated fadeInUpBig");
                    $(servicesContainers[2]).removeClass("animated fadeInUpBig delayed")
                }           
            } /*  onSlideChangeStart */
        }); /* mySwiper */

        /* change bg header image based on width and height of window */
        if ($(window).width() / $(window).height() > 2) {
            $(".layer-header-parallax").addClass("change-bg-size");
            $(".layer-header-parallax").removeClass("default-bg-size");
            $(".authors-parallax-image").addClass("change-bg-size");
            $(".authors-parallax-image").removeClass("default-bg-size");
        } else {
            $(".layer-header-parallax").removeClass("change-bg-size");
            $(".layer-header-parallax").addClass("default-bg-size");
            $(".authors-parallax-image").removeClass("change-bg-size");
            $(".authors-parallax-image").addClass("default-bg-size");
        }  

        /* small swiper */
        var mySwiper2 = new Swiper('.swiper-small', {
            pagination: '.swiper-small-pagination',
            paginationClickable: '.swiper-small-pagination',
            mode: 'horizontal',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            keyboardControl: true,
            mousewheelControl: false,
            spaceBetween: 30,
            loop: false,
        });

        $('.swiper-button-next').click(function(){
            mySwiper2.swipeNext();
        })
        $('.swiper-button-prev').click(function(){
            mySwiper2.swipePrev();
        })

        /* news swiper */
        var mySwiper3 = new Swiper('.swiper-news', {
            pagination: '.swiper-news-pagination',
            paginationClickable: '.swiper-news-pagination',
            mode: 'horizontal',
            keyboardControl: true,
            mousewheelControl: false,
            spaceBetween: 30,
            loop: true,
        });
       
       /* parallax */
       var sceneNames = [
         "scene", "scene0", "scene1", "scene2", "scene3",
          "scene4", "scene5", "scene6", "scene7",
          "scene8"
       ];

       $.each(sceneNames, function(i, sceneName){
        var element = document.getElementById(sceneName);

        element.parallax = new Parallax(element);
         
        /* enable parallax in portfolios when mouse is on text */
        $(".portfolio-heading, .portfolio-subtext").addClass("parallax-enable");

        $(".mission").mouseover(function(){
            element.parallax.disable();
        })

        $(".parallax-enable").mouseover(function(){
            element.parallax.enable();
        })

        $(".parallax-enable").mouseout(function(){
            element.parallax.disable();
        })

        $(element).mouseover(function(){
           element.parallax.enable();
        });

        $(element).mouseout(function(){
           element.parallax.disable();
         });
       });

       /* flexslider */
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: false,
            animationLoop: true,
            direction: 'vertical',
            start: function(slider){
                $('body').removeClass('loading');
            }
        });

        /* navigation */
        $("#nav li a, .icon-list-item, .scroll-anchor, .btn-transparent, .navbar-brand").click(function(e){
            var anchor = $(this),
            numberAnchorId = anchor.attr('id');
            mySwiper.swipeTo(numberAnchorId, 1000);
            e.preventDefault();
        })

        $(".icon-list a, .news-link").click(function(e){
            e.preventDefault();
        })

        $(".icon").mouseover(function(){
            $(this).addClass("increase-size");
            $(this).removeClass("decrease-size")
        })

        $(".icon").mouseout(function(){
            $(this).removeClass("increase-size");
            $(this).addClass("decrease-size")
        })

    }, 
    /* end load */
    resize:function(){
        location.reload();
    }
});