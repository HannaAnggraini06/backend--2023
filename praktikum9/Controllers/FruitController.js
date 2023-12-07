// import fruits dari data/fruits.js
const fruits = require("../data/fruits.js");

/**
 * buat method index
 * refactor function ke ES6 arrow function
 * tampilkan data fruits
 * @hint gunakan looping for of
 */
const index = () => {
    for(const fruit of fruits) {
        console.log(fruit);
    }
}

/**
 * 0buat method store
 * refactor function ke ES6 arrow function
 * menambahkan data baru
 * @param {string} name - Nama buah
 * @hint gunakan method push
 */

const store = (name) => {
    fruits.push(name);
    index();
}

/**
 * 0buat method update
 * refactor function ke ES6 arrow function
 * memperbarui data fruits
 * @param {string} name - Nama buah
 * @param {number} position - posisi index yg ingin diperbarui
 */
const update = (position, name) => {
    fruits[position] = name;
    index();
}

/**
 * 0buat method destroy
 * refactor function ke ES6 arrow function
 * menghapus data baru
 * @param {number} position - posisi index yg ingin dihapus
 * @hint gunakan method splice
 */
const destroy = (position) => {
    fruits.splice(position, 1);
}

// export semua method
module.exports = {index, store, update, destroy};