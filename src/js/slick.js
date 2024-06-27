$(document).ready(function () {
	$('.header-boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
		mobileFirst: true,
	})
})

$(document).ready(function () {
	$('.webinar-boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2300,
		arrows: false,
		mobileFirst: true,
		responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],
	})
})
$(document).ready(function () {
	$('.worksheets-boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2800,
		arrows: false,
		mobileFirst: true,
		responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],
	})
})

$(document).ready(function () {
    $('.reviews__boxes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],

    });
})
