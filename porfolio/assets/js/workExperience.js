const workExperience = [
    {
      title: "Programador FullStack / Programador de Base de Datos / Programador PLC",
      company: "ROVIMATICA",
      location: "España",
      duration: "2024",
      dates: "Del 01/10/2024 al 23/12/2024",
      description: "Desarrollo de herramientas internas y aplicaciones web para productos industriales, incluyendo programación PLC para automatización y optimización de procesos, mejorando el flujo técnico y reduciendo tiempos de entrega."
    },
    {
      title: "Desarrollador Web FullStack",
      company: "OLBIA SYSTEM",
      location: "España",
      duration: "2021",
      dates: "Del 01/03/2021 al 24/06/2021",
      description: "Desarrollo de herramientas internas y aplicaciones web con programación PLC para automatizar y optimizar procesos industriales, mejorando el flujo técnico y acortando los tiempos de entrega."
    }
  ];
  
  // Asociación de empresas a sus logos
  const companyLogos = {
    "ROVIMATICA": "https://francobosg.netlify.app/logos/rovimatica.png",
    "OLBIA SYSTEM": "https://francobosg.netlify.app/logos/olbia.png"
  };
  
  const parent = document.getElementById('work-experience');
  
  const html = workExperience.map(work => {
    const logo = companyLogos[work.company] || "";
  
    return `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-yellow-500 dark:bg-gray-600">${work.duration}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${work.title}</h3>
        </div>
        <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">${work.dates}</p>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${work.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
            <span title="${work.company}">
                ${logo ? `<img src="${logo}" alt="${work.company} logo" class="inline-block h-6 mr-2 align-middle" style="max-width: 100px;" />` : ""}
                ${work.company}
            </span> &bull; ${work.location}
        </p>
    </li>`;
  });
  
  
  parent.innerHTML = html.join(" ");
  