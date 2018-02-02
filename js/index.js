$(function(){
	var mySwiper1 = new Swiper('.swiper-container-1', {
		loop: true,
		pagination: '.swiper-pagination',
		onInit: function(swiper) {
			$('.thum1Box').on('click', function() {
				var index = $(this).index();
				$(this).find('div').show();
				$(this).siblings('.thum1Box').find('div').hide();
				swiper.slideTo(index + 1, 1000, false);
				if(index+1 <= $('.thum1Box').length / 2) {
					$('#part01 .thum1').animate({
						scrollLeft: 0
					}, 500);
				} else {
					$('#part01 .thum1').animate({
						scrollLeft: ($('.thum1>div').width() - $(window).width())
					}, 500);
				}
			});
		},
		onSlideChangeEnd: function(swiper) {
			var index = parseInt(swiper.activeIndex % ($('.thum1Box').length));
			if(index == 0) {
				$('.thum1Box').eq(index + $('.thum1Box').length - 1).find('div').show();
				$('.thum1Box').eq(index + $('.thum1Box').length - 1).siblings('.thum1Box').find('div').hide();
				$('#part01 .thum1').animate({
					scrollLeft: ($('.thum1>div').width() - $(window).width())
				}, 500);
			} else {
				$('.thum1Box').eq(index - 1).find('div').show();
				$('.thum1Box').eq(index - 1).siblings('.thum1Box').find('div').hide();
				if(index <= $('.thum1Box').length / 2) {
					$('#part01 .thum1').animate({
						scrollLeft: 0
					}, 500);
				} else {
					$('#part01 .thum1').animate({
						scrollLeft: ($('.thum1>div').width() - $(window).width())
					}, 500);
				}
			}
		}
	});
	$('.thum1').find('.thum1Box').width($(window).width()*0.2667);
	$('.thum1').find('.thum1Box').css({'margin-left':$(window).width()*0.0267,'margin-top':$(window).width()*0.0267,'margin-bottom':$(window).width()*0.0267});
	$('.thum1>div').width($(window).width()*(0.2667*4+0.0267*5));
	
	var mySwiper2 = new Swiper('.swiper-container-2', {
		loop: true,
		pagination: '.swiper-pagination',
		onInit: function(swiper) {
			$('.thum2Box').on('click', function() {
				var index = $(this).index();
				$(this).find('div').show();
				$(this).siblings('.thum2Box').find('div').hide();
				swiper.slideTo(index + 1, 1000, false);
				if(index+1 <= $('.thum2Box').length / 2) {
					$('.thum2').animate({
						scrollLeft: 0
					}, 500);
				} else {
					$('.thum2').animate({
						scrollLeft: ($('.thum2>div').width() - $(window).width())
					}, 500);
				}
			});
		},
		onSlideChangeEnd: function(swiper) {
			var index = parseInt(swiper.activeIndex % ($('.thum2Box').length));
			if(index == 0) {
				$('.thum2Box').eq(index + $('.thum2Box').length - 1).find('div').show();
				$('.thum2Box').eq(index + $('.thum2Box').length - 1).siblings('.thum2Box').find('div').hide();
				$('#part01 .thum1').animate({
					scrollLeft: ($('.thum1>div').width() - $(window).width())
				}, 500);
			} else {
				$('.thum2Box').eq(index - 1).find('div').show();
				$('.thum2Box').eq(index - 1).siblings('.thum2Box').find('div').hide();
				if(index <= $('.thum2Box').length / 2) {
					$('.thum2').animate({
						scrollLeft: 0
					}, 500);
				} else {
					$('.thum2').animate({
						scrollLeft: ($('.thum2>div').width() - $(window).width())
					}, 500);
				}
			}
		}
	});
	$('.thum2').find('.thum2Box').width($(window).width()*0.2667);
	$('.thum2').find('.thum2Box').css({'margin-left':$(window).width()*0.0267,'margin-top':$(window).width()*0.0267,'margin-bottom':$(window).width()*0.0267});
	$('.thum2>div').width($(window).width()*(0.2667*$('.thum2').find('.thum2Box').length+0.0267*($('.thum2').find('.thum2Box').length+1)));
	
	var mySwiper3 = new Swiper('.swiper-container-3', {
		loop: true,
		pagination: '.swiper-pagination',
		onInit: function(swiper) {
			$('.thum3Box').on('click', function() {
				var index = $(this).index();
				$(this).find('div').show();
				$(this).siblings('.thum3Box').find('div').hide();
				swiper.slideTo(index + 1, 1000, false);
				if(index+1 <= $('.thum3Box').length / 2) {
					$('.thum3').animate({
						scrollLeft: 0
					}, 500);
				} else {
					$('.thum3').animate({
						scrollLeft: ($('.thum3>div').width() - $(window).width())
					}, 500);
				}
			});
		},
		onSlideChangeEnd: function(swiper) {
			var index = parseInt(swiper.activeIndex % ($('.thum3Box').length));
			if(index == 0) {
				$('.thum3Box').eq(index + $('.thum3Box').length - 1).find('div').show();
				$('.thum3Box').eq(index + $('.thum3Box').length - 1).siblings('.thum1Box').find('div').hide();
				$('.thum3').animate({
					scrollLeft: ($('.thum3>div').width() - $(window).width())
				}, 500);
			} else {
				$('.thum3Box').eq(index - 1).find('div').show();
				$('.thum3Box').eq(index - 1).siblings('.thum3Box').find('div').hide();
				if(index <= $('.thum3Box').length / 2) {
					$('.thum3').animate({
						scrollLeft: 0
					}, 500);
				} else {
					$('.thum3').animate({
						scrollLeft: ($('.thum3>div').width() - $(window).width())
					}, 500);
				}
			}
		}
	});
	$('.thum3').find('.thum3Box').width($(window).width()*0.2667);
	$('.thum3').find('.thum3Box').css({'margin-left':$(window).width()*0.0267,'margin-top':$(window).width()*0.0267,'margin-bottom':$(window).width()*0.0267});
	$('.thum3>div').width($(window).width()*(0.2667*4+0.0267*5));
});
