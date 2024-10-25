let oyuncuSayac = 0;
let bilgisayarSayac = 0;

function bilgisayarHamlesi() {
  return ["Taş", "Kağıt", "Makas"][Math.floor(Math.random() * 3)];
}

function tasHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle === "Kağıt") {
    bilgisayarSayac++;
    bilgHamle.innerText = hamle;
    bilgisayar.innerText = "Bilgisayar: " +        bilgisayarSayac;
    kazananKisi.innerText = "Kazanan BİLGİSAYAR";
  } else if (hamle === "Makas") {
    oyuncuSayac++;
    bilgHamle.innerText = hamle;
    oyuncu.innerText = "Oyuncu: " + oyuncuSayac;
    kazananKisi.innerText = "Kazanan OYUNCU";
  } else {
    bilgHamle.innerText = hamle;
    kazananKisi.innerText = "BERABERE";
  }
}

function kagitHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle === "Taş") {
    oyuncuSayac++;
    bilgHamle.innerText = hamle;
    oyuncu.innerText = "Oyuncu: " + oyuncuSayac;
    kazananKisi.innerText = "Kazanan OYUNCU";
  } else if (hamle === "Makas") {
    bilgisayarSayac++;
    bilgHamle.innerText = hamle;
    bilgisayar.innerText = "Bilgisayar: " + bilgisayarSayac;
    kazananKisi.innerText = "Kazanan BİLGİSAYAR";
  } else {
    bilgHamle.innerText = hamle;
    kazananKisi.innerText = "BERABERE";
  }
}

function makasHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle === "Taş") {
    bilgisayarSayac++;
    bilgHamle.innerText = hamle;
    bilgisayar.innerText = "Bilgisayar: " + bilgisayarSayac;
    kazananKisi.innerText = "Kazanan BİLGİSAYAR";
  } else if (hamle === "Kağıt") {
    oyuncuSayac++;
    bilgHamle.innerText = hamle;
    oyuncu.innerText = "Oyuncu: " + oyuncuSayac;
    kazananKisi.innerText = "Kazanan OYUNCU";
  } else {
    bilgHamle.innerText = hamle;
    kazananKisi.innerText = "BERABERE";
  }
}
function sifirlama(){
  kazananKisi.innerText = "Kazanan:";
  bilgHamle.innerText = "Hamle seçiniz...";
  oyuncuSayac = 0;
  bilgisayarSayac = 0;
  oyuncu.innerText = "Oyuncu: " + oyuncuSayac;
  bilgisayar.innerText = "Bilgisayar: " + bilgisayarSayac;

}

tas.addEventListener("click", tasHamlesi);
kagit.addEventListener("click", kagitHamlesi);
makas.addEventListener("click", makasHamlesi);
sifirla.addEventListener("click", sifirlama);