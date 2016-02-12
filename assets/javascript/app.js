(function(){
	var app = angular.module('store', []);


	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
	
	app.controller('GalleryController', function(){
		this.image = 0;
		this.counter = 0;

		this.setImage = function(setImage){
			this.image = setImage;
		};


	


	});

	app.controller('ReviewController',function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	

	var gems = [
		{
			name: 'Amatista',
			price: 3.00,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut facilisis neque, vel cursus urna. Vestibulum dignissim mi sem, vel vulputate purus suscipit vel. Nullam quis risus mattis, vestibulum tortor a, euismod nisi. Curabitur vel magna sapien. Aliquam eu sem pretium, rhoncus tortor id, congue felis.',
			canPurchase: true,
			soldOut: false,
			images: [
				'assets/img/gem-01.gif',
				'assets/img/gem-02.gif',
				'assets/img/gem-03.gif',
			],
			reviews: [
				{stars: 3, body: "Muy linda gema, recomendada", author: "mail@gmail.com"},
				{stars: 4, body: "Me encantó! excelente atención en la tienda", author: "rosa@testuser.com"},
			]
		},
		{
			name: 'Onix',
			price: 3.50,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut facilisis neque, vel cursus urna. Vestibulum dignissim mi sem, vel vulputate purus suscipit vel. Nullam quis risus mattis, vestibulum tortor a, euismod nisi. Curabitur vel magna sapien. Aliquam eu sem pretium, rhoncus tortor id, congue felis.',
			canPurchase: false,
			soldOut: true,
			images: [
				'assets/img/gem-05.gif',
				'assets/img/gem-04.gif',
				'assets/img/gem-06.gif',
			],
			reviews: []
		}
	];
})();