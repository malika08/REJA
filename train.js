console.log(`Train page starts!`);
import moment from "moment";
/* callback and asynch fuction lessons:
console.log("Jack Ma maslahatlari!");

const list = [
  "yaxshi talaba bo'ling", //0-20
  "to'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
  "o'zingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bo'lgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yo'q endi", // 60
];
CAll Back function
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
  /?   else {
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
  }); 
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
console.log(`passed here 1`); */

/*A_TASK: 
Masalani izohi
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
 
function raqamlarSanash(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      count++;
    }
  }

  return count;
}

console.log(raqamlarSanash("ad2a54y79wet0sfgb9")); */

/* C_TASK: Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud! */
class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }
  qoldiq() {
    const vaqt = moment().format("HH:mm");
    console.log(
      `Qoldiq: Hozir: ${vaqt}  ${this.non} ta non, ${this.lagmon} ta lagmon, va ${this.cola} ta cola mavjud.`
    );
  }

  sotish(mahsulot, miqdor) {
    const vaqt = moment().format("HH:mm");

    if (mahsulot === "non") {
      if (this.non >= miqdor) {
        this.non -= miqdor;
        console.log(` ${miqdor} ta non  ${vaqt} da sotildi!`);
      } else {
        console.log(` ${vaqt} da sotishga yetarli non yo'q!`);
      }
    } else if (mahsulot === "lagmon") {
      if (this.lagmon >= miqdor) {
        this.lagmon -= miqdor;
        console.log(` ${miqdor} ta lagmon  ${vaqt} da sotildi!`);
      } else {
        console.log(`${vaqt} da sotishga yetarli lagmon yo'q!`);
      }
    } else if (mahsulot === "cola") {
      if (this.cola >= miqdor) {
        this.cola -= miqdor;
        console.log(`${miqdor} ta cola  ${vaqt} da sotildi!`);
      } else {
        console.log(`${vaqt} da sotishga yetarli cola yo'q!`);
      }
    }
  }
  qabul(mahsulot, miqdor) {
    const vaqt = moment().format("HH:mm");

    if (mahsulot === "non") {
      this.non += miqdor;
      console.log(` ${miqdor} ta non  ${vaqt} da qabul qilindi!`);
    } else if (mahsulot === "lagmon") {
      this.lagmon += miqdor;
      console.log(`${miqdor} ta lagmon  ${vaqt} da qabul qilindi!`);
    } else if (mahsulot === "cola") {
      this.cola += miqdor;
      console.log(`${miqdor} ta cola  ${vaqt} da qabul qilindi!`);
    }
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();
