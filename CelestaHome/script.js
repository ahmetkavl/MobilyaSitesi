const kalanSureEl = document.getElementById("kalanSure");
const bitisTarihi = new Date("2025-07-23T23:59:59").getTime();

setInterval(() => {
    const simdi = new Date().getTime();
    const fark = bitisTarihi - simdi;

    if (fark <= 0) {
        kalanSureEl.textContent = "kampanya sona erdi!";
    } else {
        const gun = Math.floor(fark / (1000 * 60 * 60 * 24));
        const saat = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const dakika = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));
        kalanSureEl.textContent = `${gun} gün ${saat} saat ${dakika} dakika`;
    }
}, 1000);
