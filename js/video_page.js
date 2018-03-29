var
	galleries = [
		{
			name: 'Образцово зима',
			pictures: [
				{
					preview: 'img/gallery_page/video/video_winter_10_year_2017.jpg',
					video: 'https://www.youtube.com/embed/jtGVdhqzaZw?autoplay=1&wmode=opaque',
					alt: '10-й День рождения Образцово (Декабрь 2017, съемка с дрона)'
				},
				{
					preview: 'img/gallery_page/video/video_winter_kids_2017.jpg',
					video: 'https://www.youtube.com/embed/Oo0N_tSh9V8?autoplay=1&wmode=opaque',
					alt: 'Образцовые дети! (Коттеджный поселок Образцово, декабрь 2017, съемка с дрона)'
				},
				{
					preview: 'img/gallery_page/video/video_winter_jaguar_2017.jpg',
					video: 'https://www.youtube.com/embed/6KmMtxfC8eQ?autoplay=1&wmode=opaque',
					alt: 'Тест драйв JAGUAR F-PACE в Образцово (Декабрь 2017)'
				},
				{
					preview: 'img/gallery_page/video/video_winter_2017.jpg',
					video: 'https://www.youtube.com/embed/tkvN55fomjk?autoplay=1&wmode=opaque',
					alt: 'Поселок Образцово, Зима 2017, съемка с дрона'
				}
			]
		},		
		{
			name: 'Образцово лето',
			pictures: [
				{
					preview: 'img/gallery_page/video/video_osen_2017.jpg',
					video: 'https://www.youtube.com/embed/XS_PkF26JyE?autoplay=1&wmode=opaque',
					alt: 'Поселок Образцово, Октябрь-2017, съемка с дрона. Климанов Метеорит.'
				},
				{
					preview: 'img/gallery_page/video/video_summer_2017.jpg',
					video: 'https://www.youtube.com/embed/rgpiDr1r_ZU?autoplay=1&wmode=opaque',
					alt: 'Поселок Образцово, Лето-2017, съемка с дрона. Климанов Метеорит.'
				},
				{
					preview: 'img/gallery_page/video/video_summer_2016_short.jpg',
					video: 'https://www.youtube.com/embed/WvG3d97cuw4?autoplay=1&wmode=opaque',
					alt: 'Промо ролик Образцово, лето 2016. (c) РБК Недвижимость, Екатеринбург.'
				},
				{
					preview: 'img/gallery_page/video/video_summer_2016_long.jpg',
					video: 'https://www.youtube.com/embed/rbNY7n2R8K8?autoplay=1&wmode=opaque',
					alt: 'Видео обзор коттеджного поселка "Образцово", лето 2016. (c) РБК Недвижимость, Екатеринбург.'
				},
				{
					preview: 'img/gallery_page/video/video_summer_2012_short.jpg',
					video: 'https://www.youtube.com/embed/goVPg1_qqFM?autoplay=1&wmode=opaque',
					alt: 'Промо ролик Образцово, лето 2012.'
				}
			]
		},
		{
			name: 'Праздники в Образцово',
			pictures: [
				{
					preview: 'img/gallery_page/video/video_winter_10_year_2017.jpg',
					video: 'https://www.youtube.com/embed/jtGVdhqzaZw?autoplay=1&wmode=opaque',
					alt: '10-й День рождения Образцово (Декабрь 2017, съемка с дрона)'
				},
				{
					preview: 'img/gallery_page/video/video_winter_kids_2017.jpg',
					video: 'https://www.youtube.com/embed/Oo0N_tSh9V8?autoplay=1&wmode=opaque',
					alt: 'Образцовые дети! (Коттеджный поселок Образцово, декабрь 2017, съемка с дрона)'
				},
				{
					preview: 'img/gallery_page/video/video_winter_jaguar_2017.jpg',
					video: 'https://www.youtube.com/embed/6KmMtxfC8eQ?autoplay=1&wmode=opaque',
					alt: 'Тест драйв JAGUAR F-PACE в Образцово (Декабрь 2017)'
				},
				{
					preview: 'img/gallery_page/video/video_winter_2017_lazertag.jpg',
					video: 'https://www.youtube.com/embed/8M9wTsjYQ4g?autoplay=1&wmode=opaque',
					alt: 'Лазертаг-2017, Volkswagen и другие в Образцово!'
				},
				{
					preview: 'img/gallery_page/video/video_winter_2017_amarok.jpg',
					video: 'https://www.youtube.com/embed/DM27ynYa8RU?autoplay=1&wmode=opaque',
					alt: 'Тест драйв Новый Volkswagen Amarok 2017 в поселке Образцово'
				},
				{
					preview: 'img/gallery_page/video/video_winter_2016_oleni.jpg',
					video: 'https://www.youtube.com/embed/4honjOWWUus?autoplay=1&wmode=opaque',
					alt: 'Сказочные олени в Образцово! Образцово - это Счастье! Образцово - это Сказка! Самые Крутые Выходные! Новый Год в Образцово'
				}
			]
		},		
		{
			name: 'Образцово в СМИ',
			pictures: [
				{
					preview: 'img/gallery_page/video/video_summer_2016_long.jpg',
					video: 'https://www.youtube.com/embed/rbNY7n2R8K8?autoplay=1&wmode=opaque',
					alt: 'Видео обзор коттеджного поселка "Образцово", лето 2016. (c) РБК Недвижимость, Екатеринбург.'
				},
				{
					preview: 'img/gallery_page/video/video_summer_2014_long.jpg',
					video: 'https://www.youtube.com/embed/oB7ZPo2MbiQ?autoplay=1&wmode=opaque',
					alt: 'Видео обзор коттеджного поселка "Образцово", лето 2014.'
				}
			]
		},		
	],
	prepareGallery = function(index) {
		var
			itemsCount = galleries[index].pictures.length,
			$previews = $('.js-gallery-previews'),
			$shadow = $('.js-gallery-previews-shadow'),
			i;

		$previews.trigger('destroy.owl.carousel').removeClass('owl-carousel').empty();
		$shadow.trigger('destroy.owl.carousel').removeClass('owl-carousel').empty();
		$('.js-gallery-list .gallery-list-item').eq(index).addClass('active');

		if (galleries[index].pictures[0].video) {
			$('.js-gallery-large').empty().append('<iframe class="gallery-large-video" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="auto" src="' + galleries[index].pictures[0].video + '"></iframe>');
		} else {
			$('.js-gallery-large').empty().append('<img src="' + galleries[index].pictures[0].src + '" alt="' + galleries[index].pictures[0].alt + '">');
		}

		galleries[index].pictures.forEach(function(picture, index) {
			if (picture.src) {
				$previews.append('<div class="gallery-previews-item"><a class="gallery-previews-link" href="' + picture.src + '"><img src="' + picture.preview + '" alt="' + picture.alt + '"/></a></li>');
			} else {
				$previews.append('<div class="gallery-previews-item"><a class="gallery-previews-link gallery-previews-video" href="' + picture.video + '"><span><img src="' + picture.preview + '" alt="' + picture.alt + '"/></span></a></li>');
			}
			if (index < 8) {
				$shadow.append('<div class="gallery-previews-shadow-item">');
			}
		});
		$previews.find('.gallery-previews-link').eq(0).addClass('active');
		if (galleries[index].pictures.length > 8) {
			$previews.addClass('owl-carousel').owlCarousel({
				items: 8,
				loop: true,
				nav: true,
				dots: false
			});
		}
	};

$(document).ready(function() {
	galleries.forEach(function(gallery) {
		$('.js-gallery-list').append('<li class="gallery-list-item"><a class="gallery-list-link" href="#">' + gallery.name + '</a></li>');
	});
	prepareGallery(0);

	$(document).on('click', '.js-gallery-previews .gallery-previews-link', function() {
		var $this = $(this);

		if ($this.hasClass('gallery-previews-video')) {
			$('.js-gallery-large').empty().append('<iframe class="gallery-large-video" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="auto" src="' + $this.attr('href') + '"></iframe>');
		} else {
			$('.js-gallery-large').empty().append('<img src="' + $this.attr('href') + '" alt="' + ($this.attr('alt') || '') + '">');
		}
		$('.js-gallery-previews .gallery-previews-link').removeClass('active');
		$('.js-gallery-previews .gallery-previews-link[href="' + $this.attr('href') + '"]').addClass('active');
		return false;
	});
	$(document).on('click', '.js-gallery-list .gallery-list-link', function() {
		var $this = $(this);
		$this.parent().addClass('active').siblings().removeClass('active');
		prepareGallery($this.parent().index());
		return false;
	});
});