function adoptPet(petName) {
    const message = petName
        ? `Adopted: ${petName}`
        : "Adoption request!";
    showYellowPopup(message);
}

function showYellowPopup(msg) {
    const popup = document.createElement('div');
    popup.textContent = msg;
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.background = 'yellow';
    popup.style.color = 'black';
    popup.style.padding = '16px 32px';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    popup.style.zIndex = 1000;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 2000);
}
