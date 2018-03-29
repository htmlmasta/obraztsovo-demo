var
	addToList = function($list, objId, tds) {
		var
			$table = $('<table class="on-sale-item">'),
			$tr = $('<tr>'),
			$tools = $('<td class="on-sale-item-tools">');
		$tr.append('<td class="on-sale-item-address">' + tds[0] + '</td>');
		$tr.append('<td class="on-sale-item-info">' + tds[1] + '</td>');
		$tr.append('<td class="on-sale-item-info">' + tds[2] + '</td>');
		$tools.append('<div class="on-sale-item-button place" title="Посмотреть на карте" data-lot="' + objId + '"></div>');
		$tools.append('<div class="on-sale-item-button app" title="Записаться на осмотр" data-lot="' + objId + '"></div>');
		$tr.append($tools);
		$table.append($tr);
		$list.append($table);
	};

$(document).ready(function() {
	lots.forEach(function(lot) {
		addToList($('#lots-on-sale'), lot.id, lot.table);
	});
	ths.forEach(function(th) {
		th.lots.forEach(function(lot) {
			addToList($('#ths-on-sale'), th.id + ':' + lot.id, lot.table);
		});
	});
	if ($('.box-wrap').data('antiscroll')) {
		$('.box-wrap').each(function() {
			$(this).data('antiscroll').rebuild();
		});
	}
	$(document).on('click', '.on-sale-item-button.place', function() {
		localStorage['lotId'] = $(this).data('lot');
		localStorage['lotAction'] = 'place';
		window.location = 'master_plan.html';
	});
	$(document).on('click', '.on-sale-item-button.app', function() {
		localStorage['lotId'] = $(this).data('lot');
		localStorage['lotAction'] = 'app';
		window.location = 'master_plan.html';
	});
});