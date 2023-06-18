// Code your solution in this file!

const returnFirstTwoDrivers = function (names) {
    return names.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function (names) {
    return names.slice(-2);
  };
  
  // const selectingDrivers = function (drivers) {
  //   returnFirstTwoDrivers(drivers);
  //   returnLastTwoDrivers(drivers);
  // };\
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function (int) {
    function multiply() {
      return int * 5;
    }
    return multiply;
  };
  
  const fareDoubler = function (fare) {
    return fare * 2;
  };
  const fareTripler = function (fare) {
    return fare * 3;
  };
  
  const selectDifferentDrivers = function (arr, fn) {
    return fn(arr);
  };