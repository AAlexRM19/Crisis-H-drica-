// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- CONTENIDO Y LÓGICA DE LAS PESTAÑAS (TABS) ---
    const tabData = {
        exceso: "Debido a las precipitaciones extremas que generan inundaciones u otras consecuencias catastróficas.",
        falta: "Por sequías prolongadas, sobreexplotación de recursos hídricos y falta de lluvias constantes.",
        noapta: "Por contaminación química, biológica o falta de tratamiento adecuado para consumo humano."
    };

    const tabButtons = {
        exceso: document.getElementById('tab-exceso'),
        falta: document.getElementById('tab-falta'),
        noapta: document.getElementById('tab-noapta')
    };

    const tabContentEl = document.getElementById('tab-content');

    function switchTab(tabKey) {
        // Actualizar texto de la pestaña
        if (tabData[tabKey] && tabContentEl) {
            tabContentEl.textContent = tabData[tabKey];
        }

        // Actualizar estilos visuales de los botones de pestañas
        Object.keys(tabButtons).forEach(key => {
            const btn = tabButtons[key];
            if (!btn) return;

            if (key === tabKey) {
                btn.classList.add('bg-white/20', 'font-bold', 'opacity-100');
                btn.classList.remove('opacity-80', 'hover:bg-white/10');
            } else {
                btn.classList.remove('bg-white/20', 'font-bold', 'opacity-100');
                btn.classList.add('opacity-80', 'hover:bg-white/10');
            }
        });
    }

    // Registrar eventos de clic para las pestañas
    if (tabButtons.exceso) tabButtons.exceso.addEventListener('click', () => switchTab('exceso'));
    if (tabButtons.falta) tabButtons.falta.addEventListener('click', () => switchTab('falta'));
    if (tabButtons.noapta) tabButtons.noapta.addEventListener('click', () => switchTab('noapta'));


    // --- LÓGICA DE ACORDEONES DESPLEGABLES ---
    function toggleAccordion(accId, iconId) {
        const content = document.getElementById(accId);
        const icon = document.getElementById(iconId);

        if (!content || !icon) return;

        if (content.classList.contains('open')) {
            content.classList.remove('open');
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        } else {
            content.classList.add('open');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    }

    // Registrar eventos de clic para los acordeones
    const acc1Btn = document.getElementById('acc1-btn');
    const acc2Btn = document.getElementById('acc2-btn');

    if (acc1Btn) {
        acc1Btn.addEventListener('click', () => toggleAccordion('acc1', 'icon-acc1'));
    }

    if (acc2Btn) {
        acc2Btn.addEventListener('click', () => toggleAccordion('acc2', 'icon-acc2'));
    }


    // --- BOTÓN DE SCROLL SUAVE ---
    const scrollDownBtn = document.getElementById('scrollDownBtn');
    const tabSection = document.getElementById('tabSection');

    if (scrollDownBtn && tabSection) {
        scrollDownBtn.addEventListener('click', () => {
            tabSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});