const tags = [
  
    {
        icon: `<i class="fa-brands fa-angular fa-sm mr-1 text-red-600"></i>`,
        name: "Angular"
    },
    {
        icon: `<i class="fa-brands fa-react fa-sm mr-1 text-blue-400"></i>`,
        name: "React"
    },
    {
        icon: `<i class="fa-brands fa-node fa-sm mr-1 text-green-600"></i>`,
        name: "Node.js"
    },
    {
        icon: `<i class="fa-solid fa-code fa-sm mr-1 text-yellow-500"></i>`,
        name: "JavaScript"
    },
    {
        icon: `<i class="fa-brands fa-php fa-sm mr-1 text-purple-600"></i>`,
        name: "PHP"
    },
    {
        icon: `<i class="fa-brands fa-microsoft fa-sm mr-1 text-indigo-700"></i>`,
        name: ".NET"
    },
    {
        icon: `<i class="fa-brands fa-docker fa-sm mr-1 text-blue-500"></i>`,
        name: "Docker"
    },
];

const parent = document.getElementById("header-tags");

const html = tags.map(tag =>
    `<button type="button" class="text-gray-900 bg-gray-100 border border-gray-100 hover:bg-gray-50 font-medium rounded-full text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-1 mb-2 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-700">
        ${tag.icon}
        ${tag.name}
    </button>`
);

parent.innerHTML = html.join(" ");


