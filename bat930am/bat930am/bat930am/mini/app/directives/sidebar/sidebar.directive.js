    angular.module('app')
        .directive('mySidebar', mySidebar);

    function mySidebar() {
        var directive = {
            restrict: 'E',
			controller: 'SidebarController',
            controllerAs: 'sidebar',
            templateUrl: 'app/directives/sidebar/sidebar.html'
        };

        return directive;
    }


