console.log(`Train page starts!`);
console.log("Jack Ma maslahatlari!");

const list = [
  "yaxshi talaba bo'ling", //0-20
  "to'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
  "o'zingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bo'lgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yo'q endi", // 60
];
/*CAll Back function
function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    callback(null, list[5]);
  }
  //   else {
  //     setTimeout(function () {
  //       callback(null, list[5]);
  //     }, 5000);
  //   }
}
console.log("passed here 0");

maslahatBering(66, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log(`passed here 1`);
*/
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  // else {
  //   return list[5];
  // }
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 1000);
    });
  }
}
console.log("passed here 0");

/* then and catch yo'li orqali call qilish 
maslahatBering(25)
  .then((data) => {
    console.log("javob:", data);
  })

  .catch((err) => {
    console.log("Error:", err);
  }); */
// call sectionda asyn function ishlatish
async function run() {
  let javob = await maslahatBering(65);
  console.log(javob);
  javob = await maslahatBering(31);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();
console.log(`passed here 1`);

/*Masalani izohi
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

function countLetter(harf, soz) {
  let count = 0;
  for (let i = 0; i < soz.length; i++) {
    if (soz[i] === harf) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("e", "engineer")); */

/*B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
 */
function raqamlarSanash(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      count++;
    }
  }

  return count;
}

console.log(raqamlarSanash("ad2a54y79wet0sfgb9"));
