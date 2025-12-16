const projects = {
    "future-fitness": {
        title: "Future Fitness Website",
        subtitle: "Revolutionary fitness platform with personalized workout plans",
        category: "UI/UX",
        heroImage: "img/gym-cover.png",
        client: "Future Fitness",
        year: "2024",
        role: "Lead Designer",
        duration: "3 months",
        liveLink: "https://futurefitnessgymnellore.com/",
        description: "Future Fitness is a comprehensive platform designed to revolutionize how people approach their health journey. The goal was to create an intuitive, motivating interface that guides users through personalized workout plans.",
        description2: "We focused on creating a high-energy visual language that motivates users while maintaining clarity in complex data visualization for workout tracking and progress monitoring.",
        technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    "notes-taking": {
        title: "Notes Taking - AI Powered App",
        subtitle: "Smart note-taking app with AI-driven organization",
        category: "Case Study",
        heroImage: "img/cover.png",
        client: "Personal Project",
        year: "2024",
        role: "UI/UX Designer",
        duration: "2 months",
        liveLink: "https://medium.com/@giri.s572004/think-less-note-more-a-ui-ux-case-study-on-intelligent-digital-note-taking-d2af70452a9a",
        description: "An intelligent note-taking application that uses AI to automatically categorize and summarize notes. The interface is designed to be distraction-free while offering powerful organization tools.",
        description2: "The challenge was to integrate complex AI features without overwhelming the user. We used a clean, minimalist design with progressive disclosure of advanced features.",
        technologies: ["Figma", "OpenAI API", "React Native", "User Testing"]
    },
    "bw-perfume": {
        title: "B&W Perfume Website",
        subtitle: "Elegant fragrance showcase with immersive shopping experience",
        category: "UI/UX",
        heroImage: "img/latest-portfolio-img/img-1.png",
        client: "B&W Fragrances",
        year: "2023",
        role: "Web Designer",
        duration: "1.5 months",
        liveLink: "latest.html",
        description: "A luxury e-commerce experience for a boutique perfume brand. The design emphasizes storytelling and sensory appeal through high-quality imagery and smooth micro-interactions.",
        description2: "We created a custom shopping experience that guides users through fragrance notes and collections, making the online scent selection process intuitive and engaging.",
        technologies: ["Figma", "Webflow", "3D Modeling", "Brand Identity"]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Get the project ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId && projects[projectId]) {
        const project = projects[projectId];

        // Update DOM elements
        const titleElement = document.querySelector('.project-title');
        const subtitleElement = document.querySelector('.project-subtitle');
        const categoryElement = document.querySelector('.category-tag');
        const imageElement = document.querySelector('.hero-image');

        // Use specific IDs for info items to be safe during refactor
        const clientElement = document.getElementById('info-client');
        const yearElement = document.getElementById('info-year');
        const roleElement = document.getElementById('info-role');
        const durationElement = document.getElementById('info-duration');
        const liveLinkElement = document.getElementById('live-project-btn');

        // Description paragraphs
        const desc1Element = document.querySelectorAll('.section-text')[0];
        const desc2Element = document.querySelectorAll('.section-text')[1];

        // Tech stack
        const techGrid = document.querySelector('.tech-grid');

        if (titleElement) titleElement.textContent = project.title;
        if (subtitleElement) subtitleElement.textContent = project.subtitle;
        if (imageElement) imageElement.src = project.heroImage;

        if (clientElement) clientElement.textContent = project.client;
        if (yearElement) yearElement.textContent = project.year;
        if (roleElement) roleElement.textContent = project.role;
        if (durationElement) durationElement.textContent = project.duration;

        if (liveLinkElement) {
            liveLinkElement.href = project.liveLink;
            liveLinkElement.style.opacity = "1";
            liveLinkElement.style.pointerEvents = "auto";
            // Change button text based on project type
            let buttonText = 'View Live Project';
            if (projectId === 'notes-taking') {
                buttonText = 'View Case Study';
            } else if (projectId === 'bw-perfume') {
                buttonText = 'View Project';
            }
            liveLinkElement.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square" style="margin-right: 8px;"></i> ${buttonText}`;
        }

        if (desc1Element) desc1Element.textContent = project.description;
        if (desc2Element) desc2Element.textContent = project.description2;

        if (techGrid && project.technologies) {
            techGrid.innerHTML = project.technologies.map(tech =>
                `<span class="tech-badge">${tech}</span>`
            ).join('');
        }

        // Dynamic Next Project Logic
        const projectOrder = Object.keys(projects);
        const currentIndex = projectOrder.indexOf(projectId);
        const nextIndex = (currentIndex + 1) % projectOrder.length;
        const nextProjectId = projectOrder[nextIndex];
        const nextProject = projects[nextProjectId];

        if (nextProject) {
            const nextCard = document.querySelector('.next-project-card');
            const nextImage = document.querySelector('.next-project-image img');
            const nextTitle = document.querySelector('.next-project-title');
            const nextDesc = document.querySelector('.next-project-desc');

            if (nextCard) nextCard.href = `project-detail.html?id=${nextProjectId}`;
            if (nextImage) nextImage.src = nextProject.heroImage;
            if (nextTitle) nextTitle.textContent = nextProject.title;
            if (nextDesc) nextDesc.textContent = nextProject.subtitle; // Using subtitle as short desc
        }
    }
});
