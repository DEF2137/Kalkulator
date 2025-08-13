"use strict";
const glowne_pole_oblizcen = document.getElementById("pole_glowne");
const pole_pamieci = document.getElementById("pole_pamieci")
const pole_pamiec_M = document.getElementById("wartosc_Pamieci_M")

let pierwsza_czesc_obliczen = "";
let pamiec_M = "";
let operajca = "";

// wszystkie przyciski
const przycisk_modulo = document.getElementById("przycisk_%");
const przycisk_CE = document.getElementById("przycisk_CE");
const przycisk_C = document.getElementById("przycisk_C");
const przycisk_usuwajacy = document.getElementById("przycisk_usuwajacy");
const miejsca_po_przecinku = document.getElementById("miejsca_po_przecinku")

const przycisk_silnia = document.getElementById("przycisk_silnia");
const przycisk_potega = document.getElementById("przycisk_potega");
const przycisk_pierwiastek = document.getElementById("przycisk_pierwiastek");
const przycisk_dzielenie = document.getElementById("przycisk_dzielenie");
const przycisk_MC = document.getElementById("przycisk_MC")

const przycisk_mnozenie = document.getElementById("przycisk_mnozenie");
const przycisk_minus = document.getElementById("przycisk_minus");
const przycisk_plus = document.getElementById("przycisk_plus");
const przycisk_MR = document.getElementById("przycisk_MR")


const przycisk_zmiana_znaku = document.getElementById("przycisk_zmiana_znaku");
const przycisk_0 = document.getElementById("przycisk_0");
const przycisk_kropka = document.getElementById("przycisk_kropka");
const przycisk_rownosc = document.getElementById("przycisk_rownosc");
const przycisk_M_minus = document.getElementById("przycisk_M_minus");
const przycisk_M_plus = document.getElementById("przycisk_M_plus");

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

// przyciski działań

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

przycisk_modulo.addEventListener("click", () => {
    pole_pamieci.textContent = `${glowne_pole_oblizcen.textContent} %`;
    pierwsza_czesc_obliczen = glowne_pole_oblizcen.textContent;
    glowne_pole_oblizcen.textContent = 0;
    operajca = "%"; 
})

// przyciski zaawansowanych operacji

przycisk_zmiana_znaku.addEventListener("click", () => {
    glowne_pole_oblizcen.textContent = Number(glowne_pole_oblizcen.textContent) * (-1)
})

przycisk_kropka.addEventListener("click", () => {
    // ile kropek
    let ile_kropek = glowne_pole_oblizcen.textContent.split("").filter(l => l === ".").length
    console.log(ile_kropek);
    
    if (ile_kropek === 0){
        glowne_pole_oblizcen.textContent = `${glowne_pole_oblizcen.textContent}.`;
    }
})

przycisk_potega.addEventListener("click", () => {
    pole_pamieci.textContent = `${glowne_pole_oblizcen.textContent} **`;
    pierwsza_czesc_obliczen = glowne_pole_oblizcen.textContent;
    glowne_pole_oblizcen.textContent = 0;
    operajca = "**"; 
})

przycisk_pierwiastek.addEventListener("click", () => {
    pole_pamieci.textContent = `√${glowne_pole_oblizcen.textContent}`;
    pierwsza_czesc_obliczen = glowne_pole_oblizcen.textContent;
    glowne_pole_oblizcen.textContent = 0;
    operajca = "√"; 
})

przycisk_silnia.addEventListener("click", () => {
    // pole_pamieci.textContent = `${glowne_pole_oblizcen.textContent} !`;
    // pierwsza_czesc_obliczen = glowne_pole_oblizcen.textContent;
    const funkcja_silni = (liczba) => {
        if (liczba <= 1){
            return 1;
        }else{
            return liczba * funkcja_silni(liczba - 1);
        }
    }
    glowne_pole_oblizcen.textContent = funkcja_silni(Number(glowne_pole_oblizcen.textContent));
})

przycisk_usuwajacy.addEventListener("click", () => {
    if (glowne_pole_oblizcen.textContent.length === 1){
        glowne_pole_oblizcen.textContent = "0";
    }else if(glowne_pole_oblizcen.textContent !== '0'){
        glowne_pole_oblizcen.textContent = glowne_pole_oblizcen.textContent.slice(0, -1);
    }
})

przycisk_CE.addEventListener("click", () => {
    glowne_pole_oblizcen.textContent = "0";
})

przycisk_C.addEventListener("click", () => {
    glowne_pole_oblizcen.textContent = "0";
    pole_pamieci.textContent = "";
    operajca = "";
})

przycisk_MR.addEventListener("click", () => {
    glowne_pole_oblizcen.textContent = Number(pamiec_M);
})

przycisk_MC.addEventListener("click", () => {
    pamiec_M = 0;
    pole_pamiec_M.textContent = pamiec_M;
})

przycisk_M_plus.addEventListener("click", () => {
    pamiec_M += Number(glowne_pole_oblizcen.textContent);
    pole_pamiec_M.textContent = pamiec_M;
})

przycisk_M_minus.addEventListener("click", () => {
    pamiec_M -= Number(glowne_pole_oblizcen.textContent);
    pole_pamiec_M.textContent = pamiec_M;
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
    }else if (operajca === "%"){
        glowne_pole_oblizcen.textContent = Number(pierwsza_czesc_obliczen) % Number(glowne_pole_oblizcen.textContent);  
    }else if (operajca === "**"){
        glowne_pole_oblizcen.textContent = Number(pierwsza_czesc_obliczen) ** Number(glowne_pole_oblizcen.textContent);  
    }else if (operajca === "√"){
        glowne_pole_oblizcen.textContent = Math.pow(Number(pierwsza_czesc_obliczen), 1 / Number(glowne_pole_oblizcen.textContent));  
    }
    ucinacz();
    pole_pamieci.textContent = "";
    pierwsza_czesc_obliczen = "";
    operajca = "";
})

function ucinacz(){
    let miejsca;
    if (miejsca_po_przecinku.value === ""){
        miejsca = 8
    }else{
        miejsca = Number(miejsca_po_przecinku.value);
    }
    const zaokraglone = Number(glowne_pole_oblizcen.textContent).toFixed(miejsca);
    console.log(zaokraglone);
    glowne_pole_oblizcen.textContent = zaokraglone;
}