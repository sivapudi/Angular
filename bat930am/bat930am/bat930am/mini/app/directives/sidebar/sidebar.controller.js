
    angular.module('app')
        .controller('SidebarController', SidebarController);

   // SidebarController.$inject = ['$rootScope', 'brandService'];
    function SidebarController($rootScope, brandService) {

        var vm = this;
        vm.sidebarItems = null;
        vm.selectBrand = _selectBrand;

        _activate();
        function _activate()
        {
//alert(vm.sidebarItems)
            vm.sidebarItems = brandService.getAllBrands();
//			console.log(vm.sidebarItems)
//alert(vm.sidebarItems)
            $rootScope.selectedBrandId = vm.sidebarItems[1].Id;
alert($rootScope.selectedBrandId )
        }

        function _selectBrand(brand)
        {
			alert(brand.Id)
            $rootScope.selectedBrandId = brand.Id;
			alert($rootScope.selectedBrandId)

        }
    }

