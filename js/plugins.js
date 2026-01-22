const plugins = [
    {
        name: "TAB",
        description: "Custom player list UI with live updates and group styling.",
        platform: "Hytale",
        version: "v1.0.0",
        links: {
            GitHub: "https://github.com/",
            CurseForge: "https://curseforge.com/hytale/mods/tab"
        }
    },
    {
        name: "CorePlus",
        description: "Soon",
        platform: "Hytale",
        version: "v0.0.1",
        links: {
        }
    }
];

const container = document.getElementById("plugin-list");

plugins.forEach(plugin => {
    const card = document.createElement("div");
    card.className = "plugin-card";

    const links = Object.entries(plugin.links)
        .map(([name, url]) => `<a href="${url}" target="_blank">${name}</a>`)
        .join("");

    card.innerHTML = `
    <h3>${plugin.name}</h3>
    <p>${plugin.description}</p>
    <span class="meta">${plugin.platform} • ${plugin.version}</span>
    <div class="plugin-links">${links}</div>
  `;

    container.appendChild(card);
});
