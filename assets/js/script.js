/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .5, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	jQuery(document).ready(function (o) {
		0 < o(".navSidebar-button").length &&
		o(".navSidebar-button").on("click", function (e) {
			e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
		}),
		0 < o(".close-side-widget").length &&
		o(".close-side-widget").on("click", function (e) {
			e.preventDefault(), o(".info-group").removeClass("isActive");
		}),
		o(".xs-sidebar-widget").on("click", function (e) {
			e.stopPropagation();
		})
	});
			// search-popup-start
	$('.search_btn_toggle').on('click', function() {
		$('.overlay, .search_box_active').addClass('active');
	});

	$('.overlay, .search_box_close').on('click', function() {
		$('.search_box_active').removeClass('active');
		$('.overlay').removeClass('active');
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.mc-scrollup').fadeIn();
		} else {
			$('.mc-scrollup').fadeOut();
		}
	});
	$('.mc-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	$('.mc-item-active').each(function () {
		var group = $(this);
		var items = group.find('.mc-active');

		items.mouseover(function () {
			items.removeClass('active');
			$(this).addClass('active');
		});
	});
	$('.marquee-left').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	// counter-activation
	$('.counter').counterUp({
		delay: 10,
		time: 5000
	});
	const all_btns = gsap.utils.toArray(".bi-btn-hover");
	const all_btn_circles = gsap.utils.toArray(".bi-btn-item");

	if (all_btns.length > 0) {
		all_btns.forEach((btn, i) => {
			$(btn).mousemove(function (e) {
				const rect = btn.getBoundingClientRect();
				const relX = e.clientX - rect.left;
				const relY = e.clientY - rect.top;

				gsap.to(all_btn_circles[i], {
					duration: 0.5,
					x: relX - rect.width / 2,
					y: relY - rect.height / 2,
					ease: "power2.out",
				});
			});

			$(btn).mouseleave(function () {
				gsap.to(all_btn_circles[i], {
					duration: 0.5,
					x: 0,
					y: 0,
					ease: "power2.out",
				});
			});
		});
	}
	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){

			CustomEase.create("ease1", ".645,.045,.355,1");

			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				const MCoxH1 = gsap.timeline();
				MCoxH1
				.from(".mc-hero1-text .hero-slug", { opacity: 0,  x: 100, duration: 1.5, transformOrigin: "center",  ease: "power1.out" })
				.from(".mc-hero1-text .mc-arrow-text p", { opacity: 0, x: -200,  duration: 1, transformOrigin: "left",   ease: "power1.inOut"})
				.from(".mc-arrow-text .cg-circle-btn", { opacity: 0,  x: -200, rotate: "-360deg", duration: 5, transformOrigin: "center",   ease: "elastic.inOut(1,0.3)"},"<= -1.6")
				.from(".mc-hero1-img-wrap .mc-hero1-img1 img", { scale: 2,  duration: 3, transformOrigin: "center",   ease: "power1.inOut"},"<= -.5")
				.from(".mc-hero1-img-wrap .mc-hero1-img2 img", { scale: 2,  duration: 3, transformOrigin: "center",   ease: "power1.inOut"},"<= -.4")
				.from(".mc-hero1-img-wrap .mc-hero1-img3 img", { scale: 2,  duration: 3, transformOrigin: "center",   ease: "power1.inOut"},"<= -.2")
				.from(".mc-hero1-img-wrap .mc-hero1-img4 img", { scale: 2,  duration: 3, transformOrigin: "center",   ease: "power1.inOut"},"<= -.05")
				.from(".mc-hero1-img-wrap .mc-hero1-img5", { scale: 2, rotate: "360deg",  duration: 3, transformOrigin: "center",   ease: "power1.inOut"},"<= -.05")
				.from(".mc-hero1-img-wrap .mc-hero1-shape", { scale: .5, xPercent: 100,   duration: 3, transformOrigin: "center",   ease: "power1.inOut"},"<= -.05")
				.from(".mc-hero1-sec .mc-hr1-shape", {  xPercent: -100,  duration: 4, transformOrigin: "left",   ease: "power3.in"},"<= -.05")
				if($(".hero_title").length) {
					var Mcoxherp = $(".hero_title");
					if(Mcoxherp.length == 0) return; gsap.registerPlugin(SplitText); Mcoxherp.each(function(index, el) {

						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});

						gsap.set(el, { perspective: 400 });
						if( $(el).hasClass('hero_title_1') ){
							gsap.set(el.split.chars, {
								x: 100,
								opacity: 0,
							});
						}
						if( $(el).hasClass('hero_title_2') ){
							gsap.set(el.split.chars, {
								y: 100,
								opacity: 0,
								scaleX: 0,
							});
						}
						if( $(el).hasClass('hero_title_3') ){
							gsap.set(el.split.chars, {
								x: 100,
								scaleX: 0,
								opacity: 0,
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								end: "top -100%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,
							y: 0,
							scaleX: 1,
							opacity: 1,
							duration: 1,
							stagger: .05,
							ease: "back.out",
						});

					});
				};

				const MCoxH2 = gsap.timeline();
				MCoxH2
				.from(".mc-hero2-img", { opacity: 0,  yPercent: 200, duration: 1.5, transformOrigin: "bottom",  ease: "power1.out" })
				.from(".mc-hr2-cta", { opacity: 0,  xPercent: 100, duration: 1, transformOrigin: "center",  ease: "power1.out" })
				.from(".mc-hr2-btn-text", { opacity:0, y: 100, duration: 1.5, transformOrigin: "left", force3D: true,  ease: "power1.out" },"<= .3")
				.from(".mc-hero2-content .mc-hr2-shape", {  yPercent: 100, duration: 1.5, transformOrigin: "left", force3D: true,  ease: "power1.out" },"<= .3")

				const MCoxH3 = gsap.timeline();
				MCoxH3
				.from(".mc-hero3-img .inner-img", { scale: 3,  xPercent: 100, xPercent: 100, duration: 2, transformOrigin: "top",  ease: "power1.out" })
				.from(".mc-hr3-desc p", { opacity: 0, yPercent: 100,  duration: 1, transformOrigin: "bottom",  ease: "back.out" },"<= .4")
				.from(".mc-hr3-desc .mc-btn-2", { opacity: 0,  scaleY: 0, yPercent: 100,  duration: 1, transformOrigin: "left",  ease: "back.out" },"<= .8")

			}, 700);
		})		
	});
if($('.tx-split-text').length) {
	var st = jQuery(".tx-split-text");
	if(st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function(index, el) {
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		gsap.set(el, { perspective: 400 });
		if( jQuery(el).hasClass('split-in-up') ){
			gsap.set(el.split.chars, {
				opacity: 0,
				x: 15,
				ease: "back.out",
			});
		}
		if( jQuery(el).hasClass('split-in-left') ){
			gsap.set(el.split.chars, {
				opacity: 0,
				y: 30,
				ease: "back.out",
			});
		}
		if( jQuery(el).hasClass('split-in-right') ){
			gsap.set(el.split.chars, {
				opacity: 0,
				y: 30,
				ease: "back.out",
			});
		}
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			x: "0",
			y: "0",
			rotateX: "0",
			rotationX: "0",
			color: 'inherit',
			webkitTextStroke: "0px white",
			scale: 1,
			opacity: 1,
			duration: .5, 
			stagger: 0.05,
		});
	});
};
if($('.tx-split-line').length) {
	var st = jQuery(".tx-split-line");
	if(st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function(index, el) {
		el.split = new SplitText(el, { 
			type: "words,lines",
			linesClass: "split-line"
		});
		gsap.set(el, { perspective: 400 });
		if( jQuery(el).hasClass('split-in-line') ){
			gsap.set(el.split.lines, {
				opacity: 0,
				y: 50,
				ease: "back.out",
			});
		}
		el.anim = gsap.to(el.split.lines, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			x: "0",
			y: "0",
			rotateX: "0",
			rotationX: "0",
			color: 'inherit',
			webkitTextStroke: "0px white",
			scale: 1,
			opacity: 1,
			duration: 0.5, 
			stagger: 0.3,
		});
	});
};
document.addEventListener("mousemove", (e) => {
	window.requestAnimationFrame(() => {
		document.querySelectorAll(".img_move").forEach((move) => {
			const movingValue = parseFloat(move.dataset.value);
			const x = (e.clientX * movingValue) / 250;
			const y = (e.clientY * movingValue) / 250;

			move.style.transform = `translate(${x}px, ${y}px)`;
		});
	});
});
if($('.title_text').length) {
	gsap.utils.toArray(".title_text").forEach(e => {
		let i = gsap.timeline({
			scrollTrigger: {
				trigger: e,
				start: "top 90%",
				duration: 2,
				end: "bottom 60%",
				scrub: !1,
				markers: !1,
				toggleActions: "play none none none"
			}
		}),
		t = new SplitText(e, {
			type: "lines"
		});
		gsap.set(e, {
			perspective: 400
		}), t.split({
			type: "lines"
		}), i.from(t.lines, {
			duration: 1,
			delay: .5,
			opacity: 0,
			rotationX: -80,
			force3D: !0,
			transformOrigin: "top center -50",
			stagger: .1
		})
	})
}
if($(".mc-sub-head").length) {
	var tzSplit = $(".mc-sub-head");
	if(tzSplit.length == 0) return; gsap.registerPlugin(SplitText); tzSplit.each(function(index, el) {

		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line",
		});

		let delayValue = $(el).attr("data-split-delay") || "0s";
		delayValue = parseFloat(delayValue) || 0; 

		if( $(el).hasClass('mc-sub-head') ){
			gsap.set(el.split.chars, {
				xPercent: -100 , 
			});
		}

		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 86%",
				toggleActions: 'play none none reverse',
			},
			opacity: 1,
			yPercent: 0,
			xPercent: 0,
			duration: .8,
			ease: "back.out(2)",
			stagger: {
				amount: .7, 
				from: "random", 
			},
			delay: delayValue, 
		});

	});
}
gsap.utils.toArray(' .left_view').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top 30%",
			start: "top 100%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1, scale: 1, xPercent: "-100"}, {opacity: 1, xPercent: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray(' .right_view').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top 30%",
			start: "top 100%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1,  xPercent: "100"}, {opacity: 1, xPercent: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray('.cta-img img').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top 30%",
			start: "top 100%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.from(el, { scale: 1.3 , y: 50, x: 30, filter: "blur(5px)"})
});
if (window.matchMedia("(min-width: 1400px)").matches) { 
	gsap.utils.toArray(' .top_view_2').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 3,
				start: "top 40%",
				end: "top -100%",
				toggleActions: "play none none reverse",
				markers: false,
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.fromTo(el, { opacity: 1,  y: "-=0"}, {opacity: 1, yPercent: 150, duration: 1, immediateRender: false})
	}); 
}
gsap.utils.toArray('.zoom_view').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 2,
			end: "top -10%",
			start: "top 90%",
			ease: "back.out(1.5)",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0, scale: .5, }, {opacity: 1, scale: 1, duration: 1, immediateRender: false})
});
jQuery(window).on('load', function(){
	const boxes = gsap.utils.toArray('.txt_item_active');
	boxes.forEach(svg => {
		gsap.to(svg, {
			scrollTrigger: {
				trigger: svg,
				start: "top 100%",
				end: "bottom bottom",
				toggleClass: "active",
				duration: 3,
				delay:1,
				toggleActions: "play play play reverse",
				once: true,
			}
		});
	});
});
gsap.utils.toArray(".img-parallax").forEach(function(container) {
	let image = container.querySelector("img");

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			scrub: true,
			pin: false,
		},
	}); 
	tl.from(image, {
		yPercent: -30,
		ease: "none",
	}).to(image, {
		yPercent: 30,
		ease: "none",
	}); 
});
gsap.utils.toArray(' .top_view').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top 100%",
			start: "top 100%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1, scale: 1, y: "100"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray(' .slide_view_1').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top -80%",
			start: "top 0%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'top'})
	.from(el, { opacity: 1, scale: 1,  y: "-=500"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray(' .slide_view_2').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top -100%",
			start: "top 200%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'bottom bottom'})
	.from(el, { opacity: 1, scale: 1, y: "+=500"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
});
if (window.matchMedia("(min-width: 767px)").matches) { 
	const links = document.querySelectorAll('.eye-link');

	links.forEach(link => {
		const span = link.querySelector('.eye-icon');

		link.addEventListener('mousemove', (e) => {
			const rect = link.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;

			gsap.to(span, {
				x: x * 1,
				y: y * 1,
				duration: 0.5,
				ease: "power2.out"
			});
		});

		link.addEventListener('mouseleave', () => {
			gsap.to(span, {
				x: 0,
				y: 0,
				duration: 0.5,
				ease: "power2.out"
			});
		});
	});
}
gsap.utils.toArray(' .list_top').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top 80%",
			start: "top 100%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0,  y: "100"}, {opacity: 1, xPercent: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray(' .bottom_text').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top 80%",
			start: "top 100%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0, scale: .5,  y: "100"}, {opacity: 1, xPercent: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray('.mc-item1').forEach((el) => {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1,
			start: "top 100%",
			end: "bottom 70%",
			toggleActions: "play none none reverse",
			markers: false
		}
	});

	tl.set(el, {
		perspective: 2000,
		transformStyle: "preserve-3d",
		transformOrigin: "0% 50%"
	}).from(el, {
		xPercent: 100,
		opacity: 1
	});
});
gsap.utils.toArray('.mc-item2').forEach((el, index) => {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1,
			start: "top 120%",
			end: "bottom 100%",
			toggleActions: "play none none reverse",
			markers: false
		}
	});

	tl.set(el, {
		perspective: 2000,
		transformStyle: "preserve-3d",
		transformOrigin: "100% 50%"
	}).from(el, {
		xPercent: -100,
		opacity: 1
	});
});
if (window.matchMedia("(min-width: 1200px)").matches) { 
	var Testi_pin = document.querySelectorAll(".mc-testi3-text-wrap")
	Testi_pin.forEach((item) => {
		gsap.to(item, {
			scrollTrigger: {
				trigger: item,
				markers: false,
				pin: true,
				pinSpacing: false,
				start: "top 10%",
				end: "bottom 70%",
			},
		});
	});
}
	// Team Slider		
if($(".mc-team1-slider").length) {
	const swiper = new Swiper(".mc-team1-slider" , {
		speed: 500,
		loop: true,
		spaceBetween: 0,
		autoplay:  {
			delay: 5000,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 3,
			},
			1800: {
				slidesPerView: 3,
			},
		},
	})
}
	// Testimonial Slider		
if($(".mc-testi4-img-slide, .mc-testi4-text-slide").length) {
	const swiper = new Swiper(".mc-testi4-img-slide, .mc-testi4-text-slide" , {
		speed: 500,
		loop: true,
		spaceBetween: 0,
		slidesPerView: 1,
		navigation: {
			nextEl: ".mc-testi4-next",
			prevEl: ".mc-testi4-prev",
		},
	})
}
if($(".mc-team3-slider").length) {
	const swiper = new Swiper(".mc-team3-slider" , {
		speed: 500,
		spaceBetween: 30,
		loop: true,
		autoplay:  {
			delay: 5000,
		},
		pagination: {
			el: ".mc-team3--pagi",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 3,
			},
			1800: {
				slidesPerView: 3,
			},
		},
	})
}

if ($("#beforeafter").length) {
	$(window).load(function() {
		$("#beforeafter").twentytwenty();
	});
} 
$(document).on('click', '.cg-faq3-item-area .accordion-item', function(){
	$(this).addClass('faq_active').siblings().removeClass('faq_active')
});
})(jQuery);