(function(){
	var app = angular.module('store', ['product-directives']);

	app.controller('StoreController',['$http',function($http){
		//this.products = gems;
		var store = this;
		store.products = gems;

	}]);
	

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