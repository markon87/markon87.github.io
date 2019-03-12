$(function(){
	$(".welcome-msg .line").addClass("expanded");
});

$(document).ready(function(){
    // window.setTimeout(function () {
    //     $(".welcome-msg .line").addClass("expanded");
    // }, 500);

    if($(window).scrollTop() > 250){
        $("header").css("background", "rgba(39, 39, 39, 1)");
        $("nav").addClass("dark-txt");
    }
    $(window).scroll(function () {
        var $that = $(this);
        if ($(this).scrollTop() > 100) {
            $("nav").addClass("dark-txt");
        }
        else {
            $("nav").removeClass("dark-txt");
        }
        var myFunction = function () {
            var currOp = ($that.scrollTop() / 500);
            var op;
            if (currOp <= 0.2) {
                op = 0;
            } else if (currOp >= 1) {
                op = 1;
            } else {
                op = currOp;
            }
            return op;
        }

        //      Animate overlay div opacity
        $("header").css("background", "rgba(39, 39, 39," + myFunction() + ")");

        //  Active menu item on page scroll
        var windscroll = $(window).scrollTop();
        if (windscroll >= 617) {
            $('main section.section-block').each(function(i) {
                if ($(this).position().top <= windscroll + 100) {
                    $('nav li.active').removeClass('active');
                    $('nav li').eq(i).addClass('active');
                }
            });
        } else {
            $('nav li.active').removeClass('active');
        }
        //toTop show and hide on scroll
        if (windscroll >= 250) {
            $(".toTop").show(300);

        } else {
            $(".toTop").hide(300);
        }
    }).scroll();

    $("nav ul li a").on("click", function(){
        $("nav ul li a").parent().removeClass("active");
        $(this).parent().addClass("active");
        var linkTo = $(this).attr("data-link");
        $('html, body').animate({
            scrollTop: $("#" + linkTo).offset().top
        }, 600, "swing");
    });
    $(".toTop").on("click", function(){
    	$('html, body').animate({ scrollTop: 0 }, 'fast');
    });
    // $(window).scroll(function() {
    //     var windscroll = $(window).scrollTop();
    //     if (windscroll >= 617) {
    //         $('main section.section-block').each(function(i) {
    //             if ($(this).position().top <= windscroll + 100) {
    //                 // console.log(($(this).position().top) + " : " + (windscroll - 60));
    //                 $('nav li.active').removeClass('active');
    //                 $('nav li').eq(i).addClass('active');
    //             }
    //         });

    //     } else {
    //         $('nav li.active').removeClass('active');
    //     }

    // }).scroll();
    new WOW().init();

    var $grid = $('.grid').imagesLoaded( function() {
	    $grid.isotope({
	        // options
	        itemSelector: '.grid-item',
	        layoutMode: 'fitRows',
	        filter: '.work',
	        masonry: {
			    columnWidth: 10
			  }
	    });
	});
	// filter items on button click
	$('.button-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	  setTimeout(function(){ 
	  	$(".grid-item .work-item-header img").each(function(){
			var imgHeight = $(this).height();
			//console.log(imgHeight);
			$(this).css("bottom", 200 - imgHeight);
		});
	  }, 1000);
	  
		//console.log($("grid-item.hobi .work-item-header img").css(''));
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});


 	$("[data-fancybox]").fancybox({
		// Options will go here
	});

    $('#nav-icon1, nav ul li a').click(function(){
		$('#nav-icon1').toggleClass('open');
        $('header nav').toggleClass('on')
	});


    /* Progress bar init */
    $.fn.skillBarAnimation = function(){
        $(this).each(function(i) {
            var bar = new ProgressBar.Line(this, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#DD8C4E',
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: {
                    width: '100%',
                    height: '100%'
                },
                text: {
                    style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    right: '0',
                    top: '12px',
                    padding: 0,
                    margin: 0,
                    transform: null
                    },
                    autoStyleContainer: false
                },
                from: {
                    color: '#FFEA82'
                },
                to: {
                    color: '#ED6A5A'
                },
                step: (state, bar) => {
                    bar.setText(Math.round(bar.value() * 100) + ' %');
                }
                });

                var value = ($(this).attr('value') / 100);

                bar.animate(value); // Number from 0.0 to 1.0
        });
    }
    // Activate progress bar when it comes in viewport
    // console.log($(".skill-bar").offset().top);
    var barOffset = parseInt($(".skill-bar").offset().top);
    var sectionOffset = parseInt($(".about-me-page").offset().top);
    var sectionHeight = parseInt($(".about-me-page").height());
    // console.log(sectionHeight/2);
    var i=0;
    if($(window).scrollTop() > sectionOffset - 50 && $(window).scrollTop() < barOffset + sectionHeight/2){
        $(".skill-bar").skillBarAnimation();
    }else{
        $(window).scroll(function(){
            var windowScrollTop = $(this).scrollTop();
            if(windowScrollTop > barOffset - sectionHeight){
                if(i < 1){
                    $(".skill-bar").skillBarAnimation();
                    i++;
                }
            }
        });
    }
    
    //Preloader
    // $("body").imagesLoaded( function() {
	  $("body").addClass("loaded");
	// });



	//Scroling images on hover -- setting bottom offset
	$(".grid-item").imagesLoaded( function() {
		$(".grid-item .work-item-header img").each(function(){
			var imgHeight = $(this).height();
			$(this).css("bottom", 200 - imgHeight);
		});	
	});

});