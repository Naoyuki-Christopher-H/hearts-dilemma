// JavaScript with Allman style and improved functionality

// DOM Elements
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Constants for configuration
const CONFIG = 
{
    yesText: "You got Rickrolled 😘.",
    yesGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif",
    moveThreshold: 0.8 // 80% chance to move on hover
};

// Yes button click handler
yesBtn.addEventListener("click", () => 
{
    question.innerHTML = CONFIG.yesText;
    gif.src = CONFIG.yesGif;
    
    // Add minimal celebration effect
    question.style.color = "#ff6b81";
    question.style.transform = "scale(1.05)";
    
    // Reset after animation
    setTimeout(() => 
    {
        question.style.transform = "scale(1)";
    }, 300);
});

// No button hover handler with improved movement logic
noBtn.addEventListener("mouseover", () => 
{
    // Only move 80% of the time for better UX
    if (Math.random() > CONFIG.moveThreshold)
    {
        return;
    }

    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate safe movement area (considering padding)
    const safeArea = 
    {
        x: wrapperRect.width - noBtnRect.width - 40, // 20px padding on each side
        y: wrapperRect.height - noBtnRect.height - 40
    };

    // Calculate random position within safe area
    const randomX = Math.floor(Math.random() * safeArea.x) + 20;
    const randomY = Math.floor(Math.random() * safeArea.y) + 20;

    // Smooth movement with transition
    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.transition = "all 0.3s ease";
});

// Reset position when mouse leaves for better UX
noBtn.addEventListener("mouseleave", () => 
{
    setTimeout(() => 
    {
        noBtn.style.position = "relative";
        noBtn.style.left = "auto";
        noBtn.style.top = "auto";
    }, 300);
});