const techSkills = [
    {
      title: "Lenguajes",
      skills: [
        { icon: `<i class="fa-brands fa-square-js text-yellow-500"></i>`, name: "JavaScript", label: "Experto" },
        { icon: `<i class="fa-brands fa-html5 fa-lg text-green-600"></i>`, name: "HTML5", label: "Experto" },
        { icon: `<i class="fa-brands fa-css3-alt fa-lg text-blue-600"></i>`, name: "CSS3", label: "Experto" },
        { icon: `<i class="fa-brands fa-php fa-sm text-red-600"></i>`, name: "PHP", label: "Experto" },
        { icon: `<i class="fa-brands fa-markdown fa-2xs text-slate-600"></i>`, name: "Markdown", label: "Junior" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { icon: `<i class="fa-brands fa-react text-yellow-600"></i>`, name: "React", label: "Junior" },
        { icon: `<i class="fa-solid fa-fire text-red-600"></i>`, name: "Firebase", label: "Junior" },
        { icon: `<i class="fa-brands fa-bootstrap text-green-600"></i>`, name: "Bootstrap", label: "Experto" },
        { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "Tailwind", label: "Intermedio" },
        { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "jQuery", label: "Experto" },
        { icon: `<i class="fa-brands fa-angular text-red-600"></i>`, name: "Angular", label: "Junior" }
      ]
    },
    {
      title: "Frameworks Backend",
      skills: [
        { icon: `<i class="fa-brands fa-symfony text-black"></i>`, name: "Symfony", label: "Junior" },
        { icon: `<i class="fa-brands fa-laravel text-red-600"></i>`, name: "Laravel", label: "Junior" },
        { icon: `<i class="fa-solid fa-cubes-stacked text-blue-600"></i>`, name: "Spring Boot", label: "Junior" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { icon: `<i class="fa-brands fa-node fa-sm text-green-600"></i>`, name: "Node.js", label: "Intermedio" },
        { icon: `<i class="fa-brands fa-node-js text-green-600"></i>`, name: "Express.js", label: "Junior" },
        { icon: `<i class="fa-brands fa-dotnet text-blue-600"></i>`, name: ".NET", label: "Junior" }
      ]
    },
    {
      title: "Bases de datos",
      skills: [
        { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "MongoDB", label: "Junior" },
        { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "MySQL", label: "Experto" },
        { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "Mongoose", label: "Junior" }
      ]
    },
    {
      title: "DevOps y Contenedores",
      skills: [
        { icon: `<i class="fa-brands fa-docker text-blue-500"></i>`, name: "Docker", label: "Junior" },
        { icon: `<i class="fa-solid fa-network-wired text-green-500"></i>`, name: "Redes y Ciberseguridad", label: "Intermedio" },
        { icon: `<i class="fa-solid fa-terminal text-gray-700"></i>`, name: "CLI / Bash", label: "Junior" }
      ]
    },
    {
      title: "Control de Versiones y CI/CD",
      skills: [
        { icon: `<i class="fa-brands fa-git text-yellow-500"></i>`, name: "Git", label: "Experto" },
        { icon: `<i class="fa-brands fa-github"></i>`, name: "GitHub", label: "Experto" },
        { icon: `<i class="fa-brands fa-gitlab text-orange-500"></i>`, name: "GitLab", label: "Intermedio" },
        { icon: `<i class="fa-solid fa-gear text-gray-600"></i>`, name: "CI/CD", label: "Junior" }
      ]
    },
    {
      title: "Cloud y Hosting",
      skills: [
        { icon: `<i class="fa-brands fa-aws text-orange-400"></i>`, name: "AWS (EC2, S3)", label: "Junior" },
        { icon: `<i class="fa-brands fa-google text-red-500"></i>`, name: "Firebase Hosting", label: "Junior" },
        { icon: `<i class="fa-solid fa-cloud-arrow-up text-blue-600"></i>`, name: "Netlify / Vercel", label: "Experto" }
      ]
    },
    {
      title: "Testing y Calidad",
      skills: [
        { icon: `<i class="fa-solid fa-vial text-purple-500"></i>`, name: "Jest", label: "Junior" },
        { icon: `<i class="fa-solid fa-vial text-purple-500"></i>`, name: "PHPUnit", label: "Junior" },
        { icon: `<i class="fa-solid fa-check-double text-green-700"></i>`, name: "Inspección de código", label: "Experto" }
      ]
    },
    {
        title: "Herramientas de Desarrollo",
        skills: [
          { icon: `<i class="fa-sharp fa-solid fa-laptop-code fa-xs text-blue-500"></i>`, name: "VS Code", label: "Experto" },
          { icon: `<i class="fa-solid fa-code text-purple-500"></i>`, name: "PhpStorm", label: "Experto" },
          { icon: `<i class="fa-solid fa-code text-green-600"></i>`, name: "NetBeans", label: "Experto" },
          { icon: `<i class="fa-solid fa-code text-gray-600"></i>`, name: "Eclipse", label: "Junior" },
          { icon: `<i class="fa-solid fa-bug-slash text-red-500"></i>`, name: "Postman", label: "Junior" },
          { icon: `<i class="fa-solid fa-terminal text-gray-700"></i>`, name: "Terminal / Bash", label: "Junior" }
        ]
      },
      
    {
      title: "Herramientas de Diseño",
      skills: [
        { icon: `<i class="fa-solid fa-bezier-curve fa-xs text-yellow-400"></i>`, name: "Adobe Photoshop", label: "Intermedio" },
        { icon: `<i class="fa-solid fa-bezier-curve fa-xs text-orange-600"></i>`, name: "Adobe Illustrator", label: "Intermedio" },
        { icon: `<i class="fa-brands fa-figma  text-orange-400"></i>`, name: "Figma", label: "Experto" },
        { icon: `<i class="fa-solid fa-file-powerpoint  text-blue-400"></i>`, name: "MS PowerPoint", label: "Intermedio" }
      ]
    },
    {
      title: "Habilidades Blandas",
      skills: [
        { icon: `<i class="fa-solid fa-comments text-blue-400"></i>`, name: "Comunicación", label: "Alta" },
        { icon: `<i class="fa-solid fa-brain text-purple-400"></i>`, name: "Resolución de Problemas", label: "Alta" },
        { icon: `<i class="fa-solid fa-users text-green-600"></i>`, name: "Trabajo en Equipo", label: "Alta" }
      ]
    }
  ];
  

const parent = document.getElementById("tech-skills");

const getSkill = (skills) => {
    const skillHtml = skills.map(skill =>
        `<p class="text-md text-gray-700 dark:text-gray-200">
            ${skill.icon}
            ${skill.name}
            <code class="text-sm text-gray-500 dark:text-gray-300">${skill.label}</code>
        </p>`);

    return skillHtml.join(" ");
}

const html = techSkills.map(tech =>
    `<div>
        <h2 class="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">${tech.title}</h2>
        ${getSkill(tech.skills)}
    </div>`
);

parent.innerHTML = html.join(" ");
