var app = angular.module('product-directives', []);

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