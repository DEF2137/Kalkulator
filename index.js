"use strict";
const glowne_pole_oblizcen = document.getElementById("pole_glowne");
const pole_pamieci = document.getElementById("pole_pamieci")

let pierwsza_czesc_obliczen = "";
let operajca = "";


// wszystkie przyciski
const przycisk_modulo = document.getElementById("przycisk_%");
const przycisk_CE = document.getElementById("przycisk_CE");
const przycisk_C = document.getElementById("przycisk_C");
const przycisk_usuwajacy = document.getElementById("przycisk_usuwajacy");

const przycisk_n = document.getElementById("przycisk_n");
const przycisk_potega = document.getElementById("przycisk_potega");
const przycisk_pierwiastek = document.getElementById("przycisk_pierwiastek");
const przycisk_dzielenie = document.getElementById("przycisk_dzielenie");

const przycisk_mnozenie = document.getElementById("przycisk_mnozenie");
const przycisk_minus = document.getElementById("przycisk_minus");
const przycisk_plus = document.getElementById("przycisk_plus");

const przycisk_zmiana_znaku = document.getElementById("przycisk_zmiana_znaku");
const przycisk_0 = document.getElementById("przycisk_0");
const przycisk_kropka = document.getElementById("przycisk_kropka");
const przycisk_rownosc = document.getElementById("przycisk_rownosc");

const wszystkie_numeryczne = document.querySelectorAll(".numeryczny");

// nasłuchiwanie
console.log(wszystkie_numeryczne);

wszystkie_numeryczne.forEach( (przycisk_numeryczny) => {
    przycisk_numeryczny.addEventListener("click", () => {
        if (glowne_pole_oblizcen.textContent === "0"){
            glowne_pole_oblizcen.textContent = przycisk_numeryczny.textContent;
        }else{
            glowne_pole_oblizcen.textContent += przycisk_numeryczny.textContent;
        }
    })
})

przycisk_dzielenie.addEventListener("click", () => {
    pole_pamieci.textContent = `${glowne_pole_oblizcen.textContent} /`;
    pierwsza_czesc_obliczen = glowne_pole_oblizcen.textContent;
    glowne_pole_oblizcen.textContent = 0;
    operajca = "/";
})

przycisk_minus.addEventListener("click", () => {
    pole_pamieci.textContent = `${glowne_pole_oblizcen.textContent} -`;
    pierwsza_czesc_obliczen = glowne_pole_oblizcen.textContent;
    glowne_pole_oblizcen.textContent = 0;
    operajca = "-";
})

przycisk_plus.addEventListener("click", () => {
    pole_pamieci.textContent = `${glowne_pole_oblizcen.textContent} +`;
    pierwsza_czesc_obliczen = glowne_pole_oblizcen.textContent;
    glowne_pole_oblizcen.textContent = 0;
    operajca = "+";
})

przycisk_mnozenie.addEventListener("click", () => {
    pole_pamieci.textContent = `${glowne_pole_oblizcen.textContent} *`;
    pierwsza_czesc_obliczen = glowne_pole_oblizcen.textContent;
    glowne_pole_oblizcen.textContent = 0;
    operajca = "*";
})

przycisk_rownosc.addEventListener("click", () => {
    if (operajca === "/"){
        glowne_pole_oblizcen.textContent = Number(pierwsza_czesc_obliczen) / Number(glowne_pole_oblizcen.textContent);
    }else if (operajca === "*"){
        glowne_pole_oblizcen.textContent = Number(pierwsza_czesc_obliczen) * Number(glowne_pole_oblizcen.textContent);
    }else if (operajca === "+"){
        glowne_pole_oblizcen.textContent = Number(pierwsza_czesc_obliczen) + Number(glowne_pole_oblizcen.textContent);
    }else if (operajca === "-"){
        glowne_pole_oblizcen.textContent = Number(pierwsza_czesc_obliczen) - Number(glowne_pole_oblizcen.textContent);
    }
    pole_pamieci.textContent = "";
    pierwsza_czesc_obliczen = "";
    operajca = "";
})

// przycisk_9.addEventListener("click", () => {
//     glowne_pole_oblizcen.textContent += 9 ;
// })
