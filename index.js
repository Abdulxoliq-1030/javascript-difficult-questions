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

// THIS ------------------------
// This boshida window objectini ko'rsatadi uni oddiy chaqirsak yani konteksga bo'lgan yo'nalishni ko'rsatadi.
function myName() {
  console.log("My name: ", this); // window objectini ko'rsatadi
}

const car = {
  name: "Cobalt",
  year: 2022,
  sayName: myName, // bu holatda car ga murojat qiladi this qaysidur objectni ichida bo'lsa shu objectga murojaat qiladi agar global joyda turmagan bo'lsa
  sayNameWindow: myName.bind(window), // bu holatda endi windowga murojaat qiladi bind bu bizga yo'nalishni o'zgartirib berish uchun ishlatiladi unga qaysi objectni bersak shunga yo'nalish qilib beradi
  info: function () {
    console.log(`Car name is: ${this.name}`);
    console.log(`Year: ${this.year}`);
  },
};

const gentra = {
  name: "Gentra",
  year: 2020,
};

car.info.bind(gentra)(); // bu joyda endi car ning info funksiyasi bizga endi gentra uchun ishlaydi chunki biz info funksiyasini gentraga bind qilib qo'ydik 

// THIS ------------------------