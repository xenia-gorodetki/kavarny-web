document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img, .aside-photo img");
    if (images.length === 0) return;

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = '<button type="button" class="lightbox-close" aria-label="Zavřít">×</button><img src="" alt=""><p class="lightbox-caption"></p>';
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector("img");
    const lightboxCaption = lightbox.querySelector(".lightbox-caption");
    const closeBtn = lightbox.querySelector(".lightbox-close");

    images.forEach((img) => {
        img.style.cursor = "zoom-in";
        const trigger = img.closest("a") || img;

        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            const figcaption = img.closest("figure")?.querySelector("figcaption");
            lightboxCaption.textContent = figcaption ? figcaption.textContent : img.alt;
            lightbox.classList.add("open");
        });
    });

    const closeLightbox = () => lightbox.classList.remove("open");

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });
});