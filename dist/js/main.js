//var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };


$(document).ready(function() {
	// === Burger Handler =====================================================================
{
	let isOpen = false;

	function burgerBtnAnimation(e) {
		$('.burger span:nth-child(1)').toggleClass('first');
		$('.burger span:nth-child(2)').toggleClass('second');
		$('.burger span:nth-child(3)').toggleClass('third');
		$('.burger span:nth-child(4)').toggleClass('fourth');
		let classNameElem = document.querySelector('.burger').dataset.activel;

		if(!isOpen) {
			document.querySelector(`.${classNameElem}`).classList.add('open');
			 document.querySelector('.top-header').classList.add('open');
			isOpen = true;
		} else {
			document.querySelector(`.${classNameElem}`).classList.remove('open');
			 document.querySelector('.top-header').classList.remove('open');
			 // document.querySelector(`.${classNameElem}`).classList.add('close');

			 // 	setTimeout(() => {
			 // 		document.querySelector(`.${classNameElem}`).classList.remove('close');
			 // 	}, 400)
			isOpen = false;
		}

	}
	$('.burger').click((e) => burgerBtnAnimation(e));
}
// === Burger Handler =====================================================================	;
	document.querySelector('body').classList.add('isload');

// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

// === // Проверка, поддержка браузером формата webp ==================================================================

//RATING
$('.rating.edit .star').hover(function() {
		var block=$(this).parents('.rating');
	block.find('.rating__activeline').css({width:'0%'});
		var ind=$(this).index()+1;
		var linew=ind/block.find('.star').length*100;
	setrating(block,linew);
},function() {
		var block=$(this).parents('.rating');
	block.find('.star').removeClass('active');
		var ind=block.find('input').val();
		var linew=ind/block.find('.star').length*100;
	setrating(block,linew);
});
$('.rating.edit .star').click(function(event) {
		var block=$(this).parents('.rating');
		var re=$(this).index()+1;
		block.find('input').val(re);
		var linew=re/block.find('.star').length*100;
	setrating(block,linew);
});
$.each($('.rating'), function(index, val) {
		var ind=$(this).find('input').val();
		var linew=ind/$(this).parent().find('.star').length*100;
	setrating($(this),linew);
});
function setrating(th,val) {
	th.find('.rating__activeline').css({width:val+'%'});
}


// ==== accordion =======================================================
if ($('.accordion').length>0) {
	$.each($('.spoller.active'), function (index, val) {
		$(this).next().show();
	});
	$('body').on('click', '.spoller', function (event) {
		if ($(this).hasClass('mob') && !isMobile.any()) {
			return false;
		}

		if ($(this).parents('.one').length > 0) {
			$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
			$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
		}

		if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
			$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
				$(this).removeClass('active');
				$(this).next().slideUp(300);
			});
		}
		$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
			if ($(this).parent().find('.slick-slider').length > 0) {
				$(this).parent().find('.slick-slider').slick('setPosition');
			}
		});
		return false;
	});
}

// ==== // accordion =======================================================

// === movile menu handler ==================================================================
{
	let btn = document.querySelector('.bottom-header__mobile-menu-btn');
	if(btn) {
		let menu = document.querySelector('.bottom-header__menu-wrap');
		let btnClose = document.querySelector('.bottom-header__close-menu');
		
		btn.addEventListener('click', () => {
			menu.classList.toggle('_open');
		})

		btnClose.addEventListener('click', () => {
			menu.classList.remove('_open');
		})
	}
}
// === // movile menu handler ==================================================================


// === slider-visit ==================================================================
{

	function pauseVideo() {
		let slider = document.querySelector('.main-slider');
		slider.querySelectorAll('.slick-slide').forEach(item => {
			let video = item.querySelector('video');
			if(video) {
				video.pause();
			}
		})
	}

	if($('.main-slider').length>0) {
		$('.main-slider').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: `<div class="slick-arrow slick-prev"><img src="${global.home_url}/assets/img/icons/arrow-slider-left.svg" alt=""></div>`,
		  nextArrow: `<div class="slick-arrow slick-next"><img src="${global.home_url}/assets/img/icons/arrow-slider-right.svg" alt=""></div>`,
		  asNavFor: '.bottom-slider',	
		})
		.on('afterChange', function(slick, currentSlide) {
			let video = document.querySelector('.main-slider .slick-slide.slick-current video');
			if(video) {
				if(video.paused) {
					pauseVideo();
					video.play();
				}
			} else {
				pauseVideo();
			}
		})
	}

	// prevArrow: `<div class="slick-arrow slick-prev"><img src="img/icons/arrow-slider-left.svg" alt=""></div>`,
	// nextArrow: `<div class="slick-arrow slick-next"><img src="img/icons/arrow-slider-right.svg" alt=""></div>`,

	if($('.bottom-slider').length>0) {
		$('.bottom-slider').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.main-slider',
		});
	}
}
// === // slider-visit ==================================================================


// === Плавная прокрута якорей ==================================================================
if($('.anchor').length>0) {

	$(".anchor").click(function() {
	  var elementClick = $(this).attr("href")
	  var destination = $(elementClick).offset().top;
	  jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	  }, 400);
	  return false;
	});

}
// === // Плавная прокрута якорей ==================================================================


// === sub menu handler ==================================================================
{
	let subMenu = document.querySelector('.sub-menu');
	if(subMenu) {
		let btn = document.querySelector('.sub-menu__mobile-btn');
		let list = document.querySelector('.sub-menu__list');

		if(btn) {
			btn.addEventListener('click', () => {
				list.classList.toggle('_open');
				btn.classList.toggle('_open');

				if(list.clientHeight <= 44) {
					list.style.maxHeight = list.scrollHeight + 19 + 'px';
				} else {
					list.style.maxHeight = '44px';
				}
			})
		}
	}
}

// === // sub menu handler ==================================================================

// === form-search ==================================================================
{
	let form = document.querySelector('.form-search'); 
	if(form) {
		form.querySelector('.input').addEventListener('focus', function() {
			this.classList.add('_focus');
			this.parentElement.classList.add('_focus');
		});

		form.querySelector('.input').addEventListener('blur', function() {
			this.classList.remove('_focus');
			this.parentElement.classList.remove('_focus');
		})
	}
}
// === // form-search  ==================================================================


});

// ====  google map ===============

{


	let isMap = document.getElementById("map");
	if(isMap) {
		var map;

		let center = {
			lat: 58.254286,
			lng: 22.489827,
		}

		let markerPosition = {
			lat: 58.254286,
			lng: 22.489827,
		}

		// Функция initMap которая отрисует карту на странице
		function initMap() {

			// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
			map = new google.maps.Map(document.getElementById('map'), {
				// При создании объекта карты необходимо указать его свойства
				// center - определяем точку на которой карта будет центрироваться
				center: {lat: center.lat, lng: center.lng},
				// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.

				zoom: 17,

				// Добавляем свои стили для отображения карты
				//styles: 
			});

			// Создаем маркер на карте
			var marker = new google.maps.Marker({

				// Определяем позицию маркера
			    position: {lat: markerPosition.lat, lng: markerPosition.lng},

			    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
			    map: map,

			    // Пишем название маркера - появится если навести на него курсор и немного подождать
			    title: 'бульвар Генерала Карбышева',
			    label: '',

			    // Укажем свою иконку для маркера
			   // icon: 'img/contact/googlMarker.svg',
			});

		}
	}
}

