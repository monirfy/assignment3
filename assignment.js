// https://github.com/monirfy/assignment3

//
// 01 - kilometerToMeter Problem Solving
//

function kilometerToMeter(kilometer) {
    var getMeter = kilometer * 1000;
    return getMeter;
}
var resultMeter = kilometerToMeter(1);

// Console Output
console.log(resultMeter);

//
// 02 - budgetCalculator Problem Solving
//

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var getTotalPrice = watchPrice + phonePrice + laptopPrice;
    return getTotalPrice;
}

var budgetResult = budgetCalculator(1, 2, 3);

// Console Output
console.log(budgetResult);

//
// 03 -  hotelCost Problem Solving
//

function hotelCost(night) {
    var totalPrice = 0;
    if (night <= 10) {
        totalPrice = night * 100;
    } else if (night <= 20) {
        var firstStayPrice = 10 * 100;
        var secondStay = night - 10;
        var secondStayPrice = secondStay * 80;
        var totalPrice = firstStayPrice + secondStayPrice;
    } else {
        var firstStayPrice = 10 * 100;
        var secondStayPrice = 10 * 80;
        var thirdStay = night - 20;
        var thirdStayPrice = thirdStay * 50;
        var totalPrice = firstStayPrice + secondStayPrice + thirdStayPrice;
    }
    return totalPrice;
}

var getHotelCost = hotelCost(21);

// Console Output
console.log(getHotelCost);

//
// 04 - megaFriend Problem Solving
//

function megaFriend(friendsName) {
    var longestName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (longestName.length < friendsName[i].length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}

// Friends Name
var getMegaFriend = megaFriend([
    'Monir Hossain',
    'Aisah Bint Monir',
    'Monira Akter',
]);

// Console Output
console.log(getMegaFriend);
