$(document).ready(function() {
	$(document).on('click', '.js-zoom-switcher', function() {
		$(this).closest('.section-frame').toggleClass('zoomed');
		return false;
	});
	$(document).on('click', '.popup .close', function() {
		$(this).parent().hide().parent().hide();
		$('#popup-form .field').find('input').qtip('destroy');
		return false;
	});
	var validator = $('#popup-form form').validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			phone: {
				required: true,
				phone: true
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required: 'Представьтесь пожалуйста',
				minlength: 'Слишком короткое имя'
			},
			phone: {
				required: 'Ваш телефон необходим для обратной связи',
				phone: 'Введите корректный номер телефона'
			},
			email: {
				required: 'Введите ваш email',
				email: 'Введите корректный email адрес'
			}
		},
		submitHandler: function(form) {
			$('#popup-form').hide();
			$('#popup-form-sent').show();
			$.post('/sendmail.php', $(form).serialize());
		},
		onfocusout: false,
		showErrors: function(map, list) {
			if (list.length) {
				var $errorElement = $(list[0].element);
				$errorElement.closest('.field').siblings().removeClass('field-error')
					.find('input').qtip('destroy');
				if ($errorElement.data('qtip')) {
					$errorElement.qtip('option', 'content.text', list[0].message);
				} else {
					$errorElement.qtip({
						show: true,
						hide: false,
						content: {
							text: list[0].message
						},
						position: {
							my: 'bottom center',
							at: 'top center'
						}
					}).closest('.field').addClass('field-error');
				}
			} else {
				$('#popup-form .field').removeClass('field-error')
					.find('input').qtip('destroy');
			}
		}
	});
	if (localStorage['lotId']) {
		$('.js-zoom-switcher').eq(0).click();
	}
});

document.getElementById('details').onload = function() {
	var
		$details = $('#details'),
		$svg = $details.contents().find('svg');

	$(document).on('click', '.master-plan-aside-info-content-button', function() {
		$('#popup-form').show().siblings().hide().parent().show();
	});
	lots.forEach(function(lot) {
		var $lot = $svg.find('#' + lot.id);

		$lot.attr('class', 'lot-on-sale');
		$lot.mouseover(function() {
			var
				$this = $(this)
				$selected = $this.siblings('.lot-on-sale.selected');
			$this.appendTo($svg);
			if ($selected.length) {
				$selected.appendTo($svg);
			}
			$svg.find('#pin').appendTo($svg);
		}).click(function() {
			var
				$this = $(this),
				bcr = $this[0].getBBox(),
				$content = $('<div class="master-plan-aside-info-content"></div>'),
				$formInfo = $('.popup-form-info').empty();

			$this.appendTo($svg);
			$this.attr('class', 'lot-on-sale selected').siblings('.lot-on-sale.selected').attr('class', 'lot-on-sale');
			$('.js-aside-info').empty().append($content);
			$content.append('<b>' + lot.name + '</b>');
			$formInfo.prev().text(lot.name);
			lot.text.forEach(function(string) {
				$content.append('<span>' + string + '</span>');
				$formInfo.append('<span>' + string + '</span>');
			});
			$formInfo.next().find('#form-lot').val(lot.name);
			$content.append('<div class="master-plan-aside-info-content-img"><img src="' + lot.img + '" alt="" /></div>');
			if (lot.file) {
				$content.append('<div class="master-plan-aside-info-content-file"><a target="_blank" href="' + lot.file.url + '">' + lot.file.name + '</a></div>');
			}
			$content.append('<button class="master-plan-aside-info-content-button">Заявка на осмотр</button>');
			$svg.find('#pin').attr('transform', 'translate(' + (bcr.x + bcr.width / 2 + (lot.shift ? lot.shift.x : 0) - 14) + ' ' + (bcr.y + bcr.height / 2 + (lot.shift ? lot.shift.y : 0) - 30) + ')').appendTo($svg);
		});
	});
	ths.forEach(function(th) {
		var $lot = $svg.find('#' + th.id);

		$lot.attr('class', 'th-on-sale');
		$lot.mouseover(function() {
			var
				$this = $(this);

			$this.appendTo($svg);
			$svg.find('#pin').appendTo($svg);
		}).click(function() {
			$svg.find('#pin').attr('transform', 'translate(-100 -100)');
			$svg.find('.lot-on-sale.selected').attr('class', 'lot-on-sale');
			$('.js-aside-info').empty().append('<div class="master-plan-aside-info-tip">Выберите интересующий вас объект, чтобы получить дополнительную информацию</div>');
			$('#' + th.popup).show().siblings().hide().parent().show();
		});
	});

	if (localStorage['lotId'] && localStorage['lotId'].indexOf(':') < 0) {
		$svg.find('#' + localStorage['lotId']).click();
		if (localStorage['lotAction'] == 'app') {
			$('.master-plan-aside-info-content-button').click();
		}
		localStorage.removeItem('lotId');
		localStorage.removeItem('lotAction');
	} else if (localStorage['lotId']) {
		$svg.find('#' + localStorage['lotId'].substr(0, localStorage['lotId'].indexOf(':'))).click();
	}

	perspective.forEach(function(lot) {
		var $lot = $svg.find('#' + lot.id);

		$lot.attr('class', 'fut');
		$lot.mouseover(function() {
			var $this = $(this);
			$this.appendTo($this.parents('svg'));
		})
	});
};

ths.forEach(function(th) {
	document.getElementById(th.svg).onload = function() {
		var
			$details = $('#' + th.svg),
			$svg = $details.contents().find('svg'),
			thId, thLotId;

		$(document).on('click', '#' + th.popup + ' .th-button', function() {
			$(this).closest('.overlay').hide();
			$('#popup-form').show().siblings().hide().parent().show();
		});
		th.lots.forEach(function(lot, index) {
			var $lot = $svg.find('#' + lot.id);

			$lot.attr('class', 'th-on-sale');
			$lot.mouseover(function() {
				var
					$this = $(this);

				$this.appendTo($svg);
				$svg.find('#pin').appendTo($svg);
				$svg.find('.th-on-sale.selected').appendTo($svg);
			}).click(function() {
				var
					$this = $(this),
					$popup = $('#' + th.popup),
					$formInfo = $('.popup-form-info').empty();

				$this.appendTo($svg);
				$this.attr('class', 'th-on-sale selected').siblings('.th-on-sale.selected').attr('class', 'th-on-sale');
				$popup.find('.th-info').empty();
				$popup.find('.th-address').text(lot.address);
				$popup.find('.th-plan').attr('href', lot.plan);
				$popup.find('.th-name').text(th.name);
				$formInfo.prev().text(th.name);
				$formInfo.append('<span>' + lot.address + '</span>');
				$formInfo.next().find('#form-lot').val(lot.address);
				lot.text.forEach(function(string) {
					$popup.find('.th-info').append('<span>' + string + '</span>');
					$formInfo.append('<span>' + string + '</span>');
				});
				$popup.find('.th-info').append('<b>' + lot.price + '</b>');
				$formInfo.append('<b>' + lot.price + '</b>');
			});

			if (index + 1 == th.start) {
				$lot.click();
			}
		});

		if (localStorage['lotId'] && localStorage['lotId'].indexOf(':') > 0) {
			thId = localStorage['lotId'].substr(0, localStorage['lotId'].indexOf(':'));
			thLotId = localStorage['lotId'].substr(localStorage['lotId'].indexOf(':') + 1);
			if (thId == th.id) {
				$svg.find('#' + thLotId).click();
				if (localStorage['lotAction'] == 'app') {
					$('.th-button').click();
				}
				localStorage.removeItem('lotId');
				localStorage.removeItem('lotAction');
			}
		}
	};
});