// function testFunc(a) {
//   console.log(a * 100);
// };

// testFunc(52);

// function testFunc2() {
//   console.log(new Date());
// };

// testFunc2();

// fatAdd = () => {
//   return 2 + 6;
// };

// console.log(fatAdd());

// fatTimes = (arg1, arg2) => {
//   return arg1 * arg2;
// };

// console.log(fatTimes(7,9));

const arrStuff = ["things", "bits & bobs", "items", "objects"];

let invoke = 0;

let adj = "";

addToArr = () => {
  arrStuff.push(`${adj}stuff`);
};

for (i=0; i <= 3; i++) {
  addToArr();
  invoke++;
  if (invoke == 1) {
    adj = "more "
  } else if (invoke == 2) {
    adj = "sentimental "
  } else if (invoke == 3) {
    adj = "extra "
  } else if (invoke == 4) {
    adj = "useless "
  } else if (invoke == 5) {
    adj = "unimportant "
  } else if (invoke == 6) {
    adj = "can't remember where we got this "
  } else {
    adj = "";
  }
}

console.log(arrStuff)

// could use an array and map
