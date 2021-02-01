var DOB = prompt('Please enter your Date of Birth in this format: March 1, 1995');
var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
var millisecondsBetweenNowAnd1970 = Date.now();
var ageInMilliseconds =
  millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;

var milliseconds = ageInMilliseconds;
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var month = day * 30;
var year = day * 365;

var years = Math.round(milliseconds / year);

function printResults() {
  var message = `Age in Years : ${years}`;
  
  if (years >= 14 && years <= 24) {
      window.alert(`${message}, You are Eligible`);
  } else {
     window.alert(`${message}, You are InEligible`);
  }
}

printResults();
