const translations = {
    az: {
        nav_home: "Ana səhifə",
        nav_contacts: "Kontaktlar",
        nav_about: "Haqqımızda",

        home_title: "Lensstory saytına xoş gəlmisiniz",
        photo_sample: "Nümunə foto",
        photo_vignette: "Vinetka foto",
        photo_svadba: "Toy Foto",

        contacts_title: "Kontaktlar",
        phone: "Əlaqə nömrəsi və Whatsapp: +994 50 546 94 50",

        about_title: "Haqqımızda",
        about_text: "Baku photographer\nObyektivdə həyatın gözəlliyi | Bakı\nFototurlar və yaradıcı çəkilişlər.\nHər kadrda duyğu və hekayə."
    },

    ru: {
        nav_home: "Главная",
        nav_contacts: "Контакты",
        nav_about: "О нас",

        home_title: "Добро пожаловать на сайт Lensstory",
        photo_sample: "Пример фото",
        photo_vignette: "Фото виньетка",
        photo_svadba: "Свадебное фото",

        contacts_title: "Контакты",
        phone: "Номер для связи и WhatsApp: +994 50 546 94 50",

        about_title: "О нас",
        about_text: "Фотограф из Баку\nКрасота жизни через объектив | Баку\nФототуры и творческие съёмки.\nЭмоции и история в каждом кадре."
    }
};

// текущий язык
let currentLang = localStorage.getItem("lang") || "az";
setLanguage(currentLang);

// кнопки языка
document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
    });
});

function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        el.textContent = translations[lang][key];
    });

    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
}

// вкладки
function showTab(tabId) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.style.display = "none";
    });
    document.getElementById(tabId).style.display = "block";
}

// по умолчанию
showTab("home");
