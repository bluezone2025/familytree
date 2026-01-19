window.onload = function() {
    // 1. إخفاء الشاشة الافتتاحية
    const loader = document.getElementById('loading-screen');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = 'none', 1000);
        }, 4000);
    }

    // 2. البوب آب (Popups)
    const allInfo = document.querySelectorAll(".info");
    const openPopup = document.querySelector(".popup");
    const closeBtn = document.querySelector(".close");

    allInfo.forEach(btn => {
        btn.onclick = () => {
            if (openPopup) openPopup.classList.add("active");
        };
    });

    if (closeBtn) {
        closeBtn.onclick = () => {
            if (openPopup) openPopup.classList.remove("active");
        };
    }

    // 3. أزرار One & Two
    const btnOne = document.querySelector(".one");
    const btnTwo = document.querySelector(".two");
    const contentOne = document.querySelector(".show-one");
    const contentTwo = document.querySelector(".show-two");

    if (btnOne) {
        btnOne.onclick = () => {
            contentOne?.classList.toggle("active");
            contentTwo?.classList.remove("active");
        };
    }

    if (btnTwo) {
        btnTwo.onclick = () => {
            contentTwo?.classList.toggle("active");
            contentOne?.classList.remove("active");
        };
    }
};