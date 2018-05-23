    angular.module('app')
        .controller('BrandDetailController', BrandDetailController);
    function BrandDetailController($rootScope, brandService) {
        var vm = this;
        vm.brand = null;
        _activate();
        function _activate()
        {
            $rootScope.$watch("selectedBrandId", _loadBrand);
        }
        function _loadBrand()
        {
			alert("hi")
            vm.brand = brandService.getBrand($rootScope.selectedBrandId);
        }
    }

