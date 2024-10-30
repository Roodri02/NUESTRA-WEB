document.getElementById("redeem-btn").addEventListener("click", function () {
    const code = document.getElementById("gift-code").value;
    const correctCode = "REGALO2024"; // Cambia aquí el código correcto

    if (code === correctCode) {
        const redeemContainer = document.querySelector(".redeem-container");
        const prizeContainer = document.querySelector(".prize-container");
        const finalContainer = document.querySelector(".container");

        // Fade out para el formulario de canje
        redeemContainer.classList.remove("visible");
        redeemContainer.classList.add("fade");

        // Muestra el mensaje de premio después de la animación fade-out
        setTimeout(() => {
            redeemContainer.classList.add("hidden"); // Ocultar el formulario de canje

            // Configura y muestra la página de premio
            prizeContainer.classList.remove("hidden");
            prizeContainer.classList.add("visible");
        }, 1000); // Espera hasta que termine el fade-out inicial



        // Después de 2 segundos, haz el fade-out de la página de premio y muestra la página final
        setTimeout(() => {
            prizeContainer.classList.remove("visible");
            prizeContainer.classList.add("fade");

            // Fade in para la página final
            setTimeout(() => {
                prizeContainer.classList.add("hidden"); // Ocultar la página de premio
                finalContainer.classList.remove("hidden");
                finalContainer.classList.add("visible");
            }, 1000); // Espera hasta que termine el fade-out
        }, 0);

    } else {
        // Muestra el mensaje de error si el código es incorrecto
        document.getElementById("error-message").classList.remove("hidden");
    }
});