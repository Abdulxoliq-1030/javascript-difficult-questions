// EVENT LOOP ------------------
// Event loop bu queuelarni call stackga ketma ket joylab turadi qachonki call stack bo'sh bo'lsa
// Javascript single thread bo'lgani uchun birinchi o'ziga tegishli funksiyalarni bajaradi setTimeOut va yana shunga o'xshash browser api larni browser web api ga jo'natib yuboradi va ular o'z ishini u joyda bajarib bo'ladi va birinchi call stack ga ketmaydi oldin callback queue ga tushadi va callback queueda ular navbatda turadi keyin event loop call stack bo'shligiga qarab ularni birin ketinlik bilan call stackga jo'natadi
// EVENT LOOP ------------------

// HOISTING --------------------
// Hoisting bu kodimizda e'lon qilingan o'zgaruvchini nomini eng yuqoriga olib chiqib qo'yish. U qiymati bilan ko'tarib qo'ymaydi faqat nomini o'zini olib chiqadi va e'lon qilingandan oldin uni ishlatsak undefined qaytadi javascript bu nomdagi o'zgaruvchi borligini sezada faqat nomini.Lekin agar o'zgaruvchini pastda yozdik lekin uni qiymatini console.log dan tepada berib o'zgartirdik bu holatda console.log ga qiymat chiqadi

// Name function larda ham hoisting ishlaydi e'lon qilinish joyidan oldin chaqirsak ham ishlayveradi chunki funksiya ham tepaga chiqgan bo'ladi hoisting bo'lgan bo'ladi

// Anonym funksiyalarda lekin hoisting ishlamaydi

// Hoisting ozgina funksiyalarda ozgina kodlarda ta'sir qilmaydi dasturimizga lekin agar kodimiz logikamiz ko'p bo'lib ketadigan bo'lsa bu holatda ancha dasturimiz sekinlashadi shuning uchun biron bir funksiyani ichida o'zgaruvchi ishlatayotgan bo'lsak uni shu funksiyani ichida e'lon qilsak hoistingdan qutilamiz
// HOISTING --------------------

// THIS,BIND,CALL,APPLY ------------------------
// This boshida window objectini ko'rsatadi uni oddiy chaqirsak yani konteksga bo'lgan yo'nalishni ko'rsatadi.
function myName() {
  console.log("My name: ", this); // window objectini ko'rsatadi
}

const car = {
  name: "Cobalt",
  year: 2022,
  sayName: myName, // bu holatda car ga murojat qiladi this qaysidur objectni ichida bo'lsa shu objectga murojaat qiladi agar global joyda turmagan bo'lsa
  sayNameWindow: myName.bind(window), // bu holatda endi windowga murojaat qiladi bind bu bizga yo'nalishni o'zgartirib berish uchun ishlatiladi unga qaysi objectni bersak shunga yo'nalish qilib beradi
  info: function (model, color) {
    console.log(`Car name is: ${this.name}`);
    console.log(`Year: ${this.year}`);
    console.log(`Model ${model}`);
    console.log(`Color ${color}`);
  },
};

const gentra = {
  name: "Gentra",
  year: 2020,
};

// car.info.bind(gentra, "Chevrolet","White")(); // bu joyda endi car ning info funksiyasi bizga endi gentra uchun ishlaydi chunki biz info funksiyasini gentraga bind qilib qo'ydik bunga argumentlarni , bilan berib ketsak bo'ladi

// car.info.call(gentra, "Chevrolet","White"); // call ham bind bilan bir xil lekin call ning bind dan farqi funksiyani darxol chaqirib yuboradi bu ham car ning info funksiyasini gentraga o'tkazib yo'naltirib berdi bunga argumentlarni , bilan berib ketsak bo'ladi

// car.info.apply(gentra, ["Chevrolet", "White"]); // bu ham callkabi  ishlaydi lekin bunga argumentlarni [] ko'rinishida berishimiz kerak bu ham darhol chaqirib yuboriladi.

let arr = [1, 2, 3, 4, 5];

/*
function plusTo(arr, num) {
  return arr.map((el) => el + num);
}
*/

Array.prototype.plustTo = function (n) {
  return this.map((el) => el + n);
};

// console.log(plusTo(arr, 2));

console.log(arr.plustTo(2));

// THIS,BIND,CALL,APPLY ------------------------

// PROTOTYPE -----------------------------------
// Javascript da hamma narsa object hisoblanadi javascriptning asosi objectdur.
const user = {
  name: "John",
  email: "john@gmail.com",
  age: 25,
  hello: function () {
    console.log("Hello");
  },
};

Object.prototype.myAge = function () {
  console.log("My age 25");
};

const john = Object.create(user); // Bu joyda johnning prototypida userning protosi bor john agar o'zidan hello funksiyasini topa olmasa u userdan oladi agar toString() funksiyasini bersak johnga agar u o'zida yo'q bo'lsa userga boradi agar userda ham yo'q bo'lsa Object prototypega boradi bu global object
// Propertylarni izlayotganda yuqoridan boshlab izlaydi agar yo'q bo'lsa keyin ichiga kiradi.
const str = new String("Bu string"); // buning o'zini prototype bor lekin uning ham ichida Object prototype bor
// PROTOTYPE -----------------------------------

// SPREAD --------------------------------------
// Spread operatori copy qiladi va bir biriga qo'shishda ishlatiladi
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];
console.log(newArray); // [1, 2, 3, 4, 5]
// SPREAD --------------------------------------

// REST ----------------------------------------
// Rest operator esa massivning qolgan elementlarini olishda ishlatiladi. U funksiya parametrlarida ko'p argumetlarni qo'llashda qulaylik yaratadi. Misol:
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
// REST ----------------------------------------

// Clousure ------------------------------------
// Ichki funksiyalarga tashqi funksiyalarga kirishni imkonini beradi bu oddiy atama clousure avtomatik ravishda yaratiladi funksiya yaratilishi bilan

function foo() {
  let b = 1;
  function inner() {
    return b;
  }
  return inner;
}
// Clousure ------------------------------------
