// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Toggle the display of each expandable list
    const toggles = [
        { id: "curator-toggle", listId: "curator-list" },
        { id: "tech-toggle", listId: "tech-list" },
        { id: "engineer-toggle", listId: "engineer-list" },
        { id: "research-toggle", listId: "research-list" },
        { id: "mystery-toggle", listId: "mystery-list" }
    ];

    toggles.forEach(toggle => {
        const element = document.getElementById(toggle.id);
        const list = document.getElementById(toggle.listId);

        element.addEventListener("click", function() {
            if (list.classList.contains("hidden")) {
                list.classList.remove("hidden");
            } else {
                list.classList.add("hidden");
            }
        });
    });
});
