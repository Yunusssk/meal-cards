// HTML belgesindeki tüm ".panel" sınıfına sahip öğeleri seçiyoruz.
const panels = document.querySelectorAll(".panel");

// Her bir ".panel" öğesi için bir olay dinleyicisi ekliyoruz.
panels.forEach(panel => {
    // Her panel öğesine tıklandığında çalışacak bir olay dinleyicisi ekleniyor.
    panel.addEventListener("click", ()=> {
        // Öncelikle tüm ".panel" öğelerinden "active" sınıfını kaldırıyoruz.
        removeActive();
        // Ardından tıklanan panel öğesine "active" sınıfını ekliyoruz, böylece aktif hale getiriyoruz.
        panel.classList.add("active");
    })
})

// Tüm ".panel" öğelerinden "active" sınıfını kaldıran bir fonksiyon tanımlıyoruz.
function removeActive() {
    // ".panel" sınıfına sahip tüm öğeleri seçiyoruz ve her birinden "active" sınıfını kaldırıyoruz.
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}