// home.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Custom Cursor Logic ---
    const customCursor = document.getElementById('custom-cursor');
    const projectHoverAreas = document.querySelectorAll('.card-container');

    // Move the cursor to follow the mouse pointer across the whole page
    document.addEventListener('mousemove', (e) => {
        // Update the position of the custom cursor
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    // Add the '.visible' class on hover to show the cursor
    projectHoverAreas.forEach(area => {
        area.addEventListener('mouseenter', () => {
            customCursor.classList.add('visible');
        });

        // Remove the '.visible' class when the mouse leaves
        area.addEventListener('mouseleave', () => {
            customCursor.classList.remove('visible');
        });
    });

    // --- Modal Logic (This part remains the same) ---
    const openModalButtons = document.querySelectorAll('.card-content');
    const closeModalButtons = document.querySelectorAll('.close-x-btn');

    // Open Modal Functionality
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-target');
            if (modalId) {
                const modal = document.querySelector(modalId);
                if (modal) {
                    modal.classList.add('show');
                }
            }
        });
    });

    // Close Modal with X Button Functionality
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal-container').classList.remove('show');
        });
    });
    
    // Close Modal by clicking the background overlay
    document.querySelectorAll('.modal-container').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    });
});