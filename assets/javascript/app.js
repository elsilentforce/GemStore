(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});
	

	//Directiva tipo atributo para título
	app.directive('productTitle', function(){
		return {
			restrict: 'A',
			templateUrl: 'views/index/product-title.html'
		}
	});

	//Directiva tipo elemento para panel
	app.directive('productPanel',function(){
		return{
			restrict: 'E',
			templateUrl: 'views/index/product-panel.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				};

				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'tab'
		}
	});

	//Directiva tipo elemento para descripción
	app.directive('productDescription',function(){
		return{
			restrict: 'E',
			templateUrl: 'views/index/product-description.html'
		}
	});

	//Directiva tipo elemento para especificaciones
	app.directive('productSpecs',function(){
		return{
			restrict: 'E',
			templateUrl: 'views/index/product-specs.html'
		}
	});

	//Directiva tipo elemento para galería
	app.directive('productGallery', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/index/product-gallery.html',
			controller: function(){
				this.current = 0;
				this.setCurrent = function(imageNumber){
					this.current = imageNumber || 0;
				};
			},
			controllerAs: 'gallery'
		}
	});

	//Directiva tipo elemento para opiniones
	app.directive('productReview',function(){
		return{
			restrict: 'E',
			templateUrl: 'views/index/product-reviews.html',
			controller: function(){
				this.review = {};

				this.addReview = function(product){
					product.reviews.push(this.review);
					this.review = {};
				};
			},
			controllerAs: 'reviewCtrl'
		}
	});


	//Array de gemas
	var gems = [
		{
			name: 'Amatista',
			price: 15.65,
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
			],
			specs:[
				{shine: '4/10'},
			]
		},
		{
			name: 'Onix',
			price: 13.20,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut facilisis neque, vel cursus urna. Vestibulum dignissim mi sem, vel vulputate purus suscipit vel. Nullam quis risus mattis, vestibulum tortor a, euismod nisi. Curabitur vel magna sapien. Aliquam eu sem pretium, rhoncus tortor id, congue felis.',
			canPurchase: false,
			soldOut: true,
			images: [
				'assets/img/gem-05.gif',
				'assets/img/gem-04.gif',
				'assets/img/gem-06.gif',
			],
			reviews: []
		},
		{
			name: 'Jade',
			price: 10.80,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut facilisis neque, vel cursus urna. Vestibulum dignissim mi sem, vel vulputate purus suscipit vel. Nullam quis risus mattis, vestibulum tortor a, euismod nisi. Curabitur vel magna sapien. Aliquam eu sem pretium, rhoncus tortor id, congue felis.',
			canPurchase: false,
			soldOut: true,
			images: [
				'assets/img/gem-07.gif',
				'assets/img/gem-06.gif',
				'assets/img/gem-09.gif',
			],
			reviews: [],
			specs:[
				{shine: '6/10'},
			]
		}
	];
})();