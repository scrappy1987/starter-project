
(function() {

    var TransActionController =  function() {
        
    	var vm = this;
    	vm.bestTrainer = 'John';
    	vm.worstTrainer = 'no';
    	
            
    };

    angular.module('accountApp').controller('transactionController', [TransActionController]);
}());