(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController(HomeFactory) {
		var vm = this;

HomeFactory.getBooks().then(function(res){
	vm.books = res;
	console.log("whats up");
});


vm.deleteBook = function(bookToDelete){
	HomeFactory.deleteBook(bookToDelete._id)
	.then(function(){
		// console.log("Made it back to controller. about to splice!");
		vm.books.splice(vm.books.indexOf(bookToDelete),1);
	});
};
	}
})();
