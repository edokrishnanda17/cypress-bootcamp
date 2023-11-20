//cara bukat terminal control+`

var tester = 'air'; //siapin tempat dan mengisi 

let nama = 'axel'; //string
let angka = 4; //angka/integer
let isLogin = true; //boolean
let manusia= {
    nama : 'David',
    umur : 18
}; //objek


const bulan = 'mei';


// console.log(tester); // output ke console
// console.log(angka);

// drag, lalu teken cmd+/
// bulan = 'january'

// console.log(bulan);

let angka1 = 5;
let angka2 = 5;

// console.log(angka1 == angka2);

//array
// let mobil = ['BMW', 'Kijang' , 'Ferari'];

// let mobilSaya = mobil[2];

// console.log(mobilSaya);



//if else
let umur = 17;
let tinggi = 170;

// < > <= >= == != , && ||
// if(umur <= 17 && tinggi < 175){
//     console.log('Boleh join ke club');
// }else{
//     console.log('Gabole join');
// }

// if(umur < 17){
//     console.log('ga dapet KTP');
// }else if(umur > 25){
//     console.log('dapet KTP Lagi');
// }else{
//     console.log('boleh dapet KTP :)');
// }

//looping for
// for (let i = 0; i < 5; i++) {
//     console.log(i);  
// }

//looping while
// let i = 0
// while (i < 5) {
//     console.log(i);
//     i++
// }

// function foo(namaPanjang){
//     // for (let i = 0; i < 5; i++) {
//     //     console.log(i);  
//     // }
//     console.log(namaPanjang);
// }

// function bar(angka3,angka4){
//     let hasil;
//     hasil = angka3+angka4;
//     return hasil;
// }

// foo('Kevin Axel');

// console.log(bar(10,15));


class Mobil{
    roda; //attribute

    jalanMobil(){ //method
        console.log('Mobil Berjalan');
    }

}

let bmw = new Mobil();
let bajaj = new Mobil();

bajaj.roda = 3;
bmw.roda = 4; //assign ke roda bmw

console.log(bmw.roda);
console.log(bajaj.roda);
bmw.jalanMobil();

function doError(){
    throw new Error(
        'Kamu kena error'
    );
}

try {
    doError();
} catch (e) {
    console.log(e);
}

console.log('codingan berikutnya');