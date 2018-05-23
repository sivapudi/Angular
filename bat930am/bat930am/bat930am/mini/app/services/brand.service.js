    angular.module('app')
        .factory('brandService', brandService);
    function brandService() {

        var service = {
            getAllBrands: _getAllBrands,
            getBrand: _getBrand
        };
        function _getAllBrands () {
            return [
                { Id: 100, Name: "Nokia" },
                { Id: 200, Name: "Dell" },
                { Id: 300, Name: "Sony" },
                { Id: 400, Name: "HP" },
                { Id: 500, Name: "Apple" }
            ];
        }
        function _getBrand (id) {
            if(id == 100)
                return { Id: 100, Name: "Nokia", Website: "http://www.nokia.com" };
            else if(id == 200)
                return { Id: 200, Name: "Dell", Website: "http://www.dell.com" };
            else if(id == 300)
                return { Id: 300, Name: "Sony", Website: "http://www.sony.com" };
            else if(id == 400)
                return { Id: 400, Name: "HP", Website: "http://www.hp.com" };
            else if(id == 500)
                return { Id: 500, Name: "Apple", Website: "http://www.apple.com" };
        }
        return service;
    }
