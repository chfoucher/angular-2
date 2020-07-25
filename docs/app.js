(function () {
'use strict';

angular.module('myApp', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  this.list = ShoppingListCheckOffService.getNeededItems();
  ShoppingListCheckOffService.addItem({name: "cookies", quantity:10});
  ShoppingListCheckOffService.addItem({name: "eggplants", quantity:2});
  ShoppingListCheckOffService.addItem({name: "bottles of milk", quantity:4});
  ShoppingListCheckOffService.addItem({name: "bread", quantity:1});
  ShoppingListCheckOffService.addItem({name: "bottles of orange juice", quantity:2});
  ShoppingListCheckOffService.addItem({name: "salad", quantity:1});
  ShoppingListCheckOffService.addItem({name: "potatoes", quantity:15});
  this.buy = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  }
}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  this.list = ShoppingListCheckOffService.getOwnedItems();
}

function ShoppingListCheckOffService() {
  var neededItems = [];
  var ownedItems = [];
  this.addItem = function(item) {neededItems.push(item)};
  this.getNeededItems = function() {return neededItems;};
  this.getOwnedItems = function() {return ownedItems;};
  this.buyItem = function(index) {
    var item = neededItems[index];
    neededItems.splice(index, 1);
    ownedItems.push(item);
  }
}

})();
