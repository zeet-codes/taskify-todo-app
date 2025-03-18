const addTaskBtn = document.querySelector<HTMLButtonElement>("#add-task-btn");
const modal = document.querySelector<HTMLDivElement>("#add-task-modal");
const cancelBtn = document.querySelector<HTMLButtonElement>("#cancelBtn");
const closeBtn = document.querySelector<HTMLButtonElement>("#closeBtn");
const confirmBtn = document.querySelector<HTMLButtonElement>("#confirmBtn");

function showModal() {
    modal?.classList.add("active");
}

function removeModal() {
    modal?.classList.remove("active");
}

addTaskBtn?.addEventListener("click", () => {
    showModal();
});

cancelBtn?.addEventListener("click", () => {
    removeModal();
});

closeBtn?.addEventListener("click", () => {
    removeModal();
});

confirmBtn?.addEventListener("click", () => {
    removeModal();
});

window.addEventListener("click", (e: Event) => {
    if (e.target === modal) {
        removeModal();
    }
});
