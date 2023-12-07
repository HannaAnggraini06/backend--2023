/**
 * import semua method FruitController
 * refactor variable ke ES6 Variable
 *
 * @hint - Gunakan Destructing Object
 */

const {index,store,update,destroy} = require("./Controllers/FruitController.js");

/**
  * Fungsi main tidak perlu diubah
  * Jalankan program: nodejs app.js
  */
const main = () => {
console.log("Method index - Menampilkan Buah");
index();
console.log("\nMethod store - Menambahkan buah naga");
store("buah naga");
console.log("\nMethod update - Update data 0 menjadi apel");
update(0, "apel");
console.log("\nMethod destroy - Menghapus data 0");
destroy(0);
};

main();