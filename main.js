document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.querySelector("#language");
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const savedMessage = document.querySelector("#saved-message");

    const translations = {
        it: {
            title: "Benvenuto!",
            description: "Seleziona la tua lingua preferita.",
            saved: "Lingua salvata correttamente."
        },
        en: {
            title: "Welcome!",
            description: "Select your preferred language.",
            saved: "Language saved successfully."
        },
        es: {
            title: "¡Bienvenido!",
            description: "Selecciona tu idioma preferido.",
            saved: "Idioma guardado correctamente."
        }
    };

    let savedLanguage = localStorage.getItem("language");

    if (savedLanguage === null) {
        savedLanguage = "it";
    }

    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage, false);

    languageSelect.addEventListener("change", () => {
        const selectedLanguage = languageSelect.value;

        localStorage.setItem("language", selectedLanguage);

        updateLanguage(selectedLanguage, true);
    });

    function updateLanguage(language, showMessage) {
        title.textContent = translations[language].title;
        description.textContent = translations[language].description;

        if (showMessage) {
            savedMessage.textContent = translations[language].saved;
        }
    }
});