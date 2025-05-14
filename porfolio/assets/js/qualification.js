const qualifications = [
    {
        title: "Técnico en Desarrollo de Aplicaciones Web (DAW)",
        year: 2024,
        description: "Formación técnica en desarrollo de aplicaciones web, abarcando desde lenguajes de programación como JavaScript, PHP, y Java, hasta el uso de frameworks como Symfony y Laravel.",
        institute: {
            name: "TRASSIERRA",
            shortName: "TRASSIERRA",
            duration: "2022 - 2024"
        }
    },
    {
        title: "Técnico en Sistemas Microinformáticos y Redes (SMR)",
        year: 2021,
        description: "Formación técnica centrada en redes y administración de sistemas, con énfasis en seguridad informática, administración de servidores, y automatización industrial.",
        institute: {
            name: "JEREZ Y CABALLERO",
            shortName: "JEREZ Y CABALLERO",
            duration: "2019 - 2021"
        }
    },
    {
        title: "Graduado en Educación Secundaria Obligatoria (ESO)",
        year: 2019,
        description: "Formación básica en diversas áreas académicas.",
        institute: {
            name: "LOS PEDROCHES",
            shortName: "LOS PEDROCHES",
            duration: "2015 - 2019"
        }
    }
];

const parent = document.getElementById('qualification');

const html = qualifications.map(quali =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-red-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}</h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title="${quali.institute.name}">${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`);

parent.innerHTML = html.join(" ");
