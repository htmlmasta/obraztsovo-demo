var
	lots = [
		{
			id: 'lot55',
			name: 'Участок под ИЖС №81',
			text: [
				'Площадь участка - 24,40 соток',
				'ул. Альпийская, 39'
			],
			img: 'img/gallery_master_plan/05_preview.jpg',
			table: [
				'ул. Альпийская, 39',
				'Участок №81',
				'Площадь<br>24,40 соток'
			]
		},
		{
			id: 'lot59',
			name: 'Участок под ИЖС №85',
			text: [
				'Площадь участка - 22 соток',
				'ул. Альпийская, 47'
			],
			img: 'img/gallery_master_plan/03_preview.jpg',
			table: [
				'ул. Альпийская, 47',
				'Участок №85',
				'Площадь<br>22 соток'
			]
		},
		{
			id: 'lot56',
			shift: {
				x: -2,
				y: -6
			},
			name: 'Участок под ИЖС №88',
			text: [
				'Площадь участка - 22,04 сотки',
				'ул. Альпийская, 41'
			],
			img: 'img/gallery_master_plan/03_preview.jpg',
			table: [
				'ул. Альпийская, 41',
				'Участок №88',
				'Площадь<br>22,04 сотки'
			]
		},
		{
			id: 'lot5',
			name: 'Участок под ИЖС №99',
			text: [
				'Площадь участка - 26,99 соток',
				'ул. Альпийская, 58'
			],
			img: 'img/gallery_master_plan/03_preview.jpg',
			table: [
				'ул. Альпийская, 58',
				'Участок №99',
				'Площадь<br>26,99 соток'
			]
		},
		{
			id: 'lot1',
			name: 'Участок под ИЖС №122а',
			text: [
				'Площадь участка - 17,30 соток',
				'ул. Альпийская, 70'
			],
			img: 'img/gallery_master_plan/04_preview.jpg',
			table: [
				'ул. Альпийская, 70',
				'Участок №122а',
				'Площадь<br>17,30 соток'
			]
		},
		{
			id: 'lot3',
			name: 'Участок под ИЖС №118',
			text: [
				'Площадь участка - 26,98 сотки',
				'ул. Альпийская, 66'
			],
			img: 'img/gallery_master_plan/01_preview.jpg',
			table: [
				'ул. Альпийская, 66',
				'Участок №118',
				'Площадь<br>26,98 сотки'
			]
		},
		{
			id: 'lot120',
			name: 'Участок под ИЖС №136*',
			text: [
				'Площадь участка - 16,05 сотки',
				'ул. Альпийская, 96/1'
			],
			img: 'img/gallery_master_plan/01_preview.jpg',
			table: [
				'ул. Альпийская, 96/1',
				'Участок №136*',
				'Площадь<br>16,05 сотки'
			],
		}
	],
	ths = [
		{
			id: 'lot116',
			popup: 'popup-th-1',
			name: 'Последний готовый таунхаус с видом на пруд',
			svg: 'th1svg',
			lots: [
				{
					id: 'th1_04',
					address: 'ул. Эдельвейсовая, 15-4',
					text: [
						'Площадь 322 м<sup>2</sup>',
						'Терраса 60 м<sup>2</sup>'
					],
					price: 'Стоимость 13,5 млн. рублей',
					plan: 'obraztsovo_taun_cokol.pdf',
					table: [
						'<b>Готовый таунхаус с видом на пруд</b><br>ул. Эдельвейсовая, 15 кв. 4',
						'Площадь<br>322 м<sup>2</sup><br>Терраса 60 м<sup>2</sup>',
						'Стоимость 13,5 млн. рублей'
					]
				}
			],
			start: 1
		},
		{
			id: 'lot77',
			popup: 'popup-th-4',
			name: 'Скоро в продаже таунхаусы в сданном доме в первой очер.',
			svg: 'th4svg',
			lots: [
				{
					id: 'th4_01',
					address: 'ул. Эдельвейсовая, 2',
					text: [
						'',
						'Скоро в продаже'
					],
					price: '',
					table: [
						'<b>Дом сдан</b><br>ул. Эдельвейсовая, 2',
						'',
						'Скоро в продаже'
					]
				},
			],
			start: 1
		},
		{
			id: 'lot118',
			popup: 'popup-th-3',
			name: 'Таунхаус с мансардой',
			svg: 'th3svg',
			lots: [
				{
					id: 'th3_01',
					address: 'ул. Эдельвейсовая, 11',
					text: [
						'',
						'Все продано'
					],
					price: '',
					plan: 'obraztsovo_taun_t4_type_1.pdf',
					table: [
						'<b>Все продано</b><br>ул. Эдельвейсовая, 11',
						'',
						'Все продано'
					]
				}
			],
			start: 1
		},
		{
			id: 'lot117',
			popup: 'popup-th-2',
			name: 'Таунхаус с цокалем',
			svg: 'th2svg',
			lots: [
				{
					id: 'th2_01',
					address: 'ул. Эдельвейсовая, 13',
					text: [
						'',
						'Все продано'
					],
					price: '',
					plan: 'obraztsovo_taun_t5.pdf',
					table: [
						'<b>Все продано</b><br>ул. Эдельвейсовая, 13',
						'',
						'Все продано'
					]
				}
			],
			start: 1
		}
	],
	perspective = [
		{
			id: 'lot124'
		},
		{
			id: 'lot122'
		}
	];