// scripts/vlibras.js

(function () {

    // Cria a estrutura do VLibras
    const container = document.createElement("div");

    container.innerHTML = `
        <div vw class="enabled">
            <div vw-access-button class="active"></div>

            <div vw-plugin-wrapper>
                <div class="vw-plugin-top-wrapper"></div>
            </div>
        </div>
    `;

    document.body.appendChild(container);


    // Carrega o script do VLibras
    const script = document.createElement("script");

    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";

    script.onload = function () {
        new window.VLibras.Widget(
            "https://vlibras.gov.br/app"
        );
    };

    document.body.appendChild(script);

})();