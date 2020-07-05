app.controller('menuController', [
    '$scope',
    function($scope){
        $scope.model = {title: 'Our Menu'};
        $scope.model.mainDish = {};

        $scope.changeMainDish = function (item) {
            $scope.model.mainDish.name = item;

            if (item  === 'Cheese Pizza') {
                $scope.model.mainDish.price = '$7.99';
            } else if (item  === 'Pepperoni Pizza') {
                $scope.model.mainDish.price = '$8.99';
            } else if (item  === 'Margherita Pizza') {
                $scope.model.mainDish.price = '$9.99';
            } else if (item === 'BBQ Chicken Pizza') {
                $scope.model.mainDish.price = '$10.99';
            } else {
                $scope.model.mainDish.price = '$13.99';
            }

        }

        $scope.$watch('model.mainDish', function (newValue, oldValue) {
            if (newValue === 'BBQ Chicken Pizza') {
                alert('You have selected the BBQ Chicken Pizza!');
            }
        });

    }
]);