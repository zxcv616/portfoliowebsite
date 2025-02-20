// Custom cursor
const cursor = {
    dot: document.getElementById('cursor-dot'),
    outline: document.getElementById('cursor-outline'),
    init: function() {
        document.addEventListener('mousemove', e => {
            this.dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
            this.outline.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
        });

        document.addEventListener('mouseenter', () => {
            this.dot.style.opacity = '1';
            this.outline.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            this.dot.style.opacity = '0';
            this.outline.style.opacity = '0';
        });

        // Add hover effect for interactive elements
        document.querySelectorAll('a, button, input, textarea').forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.outline.style.width = '48px';
                this.outline.style.height = '48px';
                this.outline.style.borderColor = 'rgb(59, 130, 246)';
            });
            
            el.addEventListener('mouseleave', () => {
                this.outline.style.width = '32px';
                this.outline.style.height = '32px';
                this.outline.style.borderColor = 'rgb(59, 130, 246)';
            });
        });
    }
};

cursor.init();

// Add nav-link hover effect
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-2px)';
        link.style.transition = 'transform 0.2s ease-in-out';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

// Company experience data
const companies = [
    {
        name: 'Tanium',
        role: 'Software Engineer Intern',
        period: '2024',
        logo: 'images/tanium-logo.png',
        color: '#0066CC'
    },
    {
        name: 'Gentian',
        role: 'ML Engineer',
        period: '2023 - Present',
        logo: 'images/gentian-logo.png',
        color: '#34D399'
    }
];

// About section stats
const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '8', label: 'Current Clients' }
];

const statsGrid = document.querySelector('.stats-grid');
if (statsGrid) {
    stats.forEach(stat => {
        const statDiv = document.createElement('div');
        statDiv.className = 'text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-transform hover:scale-105';
        statDiv.innerHTML = `
            <div class="text-2xl font-semibold text-blue-500">${stat.number}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">${stat.label}</div>
        `;
        statsGrid.appendChild(statDiv);
    });
}

// Initialize company display
const codePreview = document.getElementById('code-preview');
if (codePreview) {
    codePreview.innerHTML = `
        <div class="relative p-6 space-y-8">
            <h3 class="text-lg font-semibold text-gray-200 mb-6">Experience</h3>
            <div class="company-grid grid grid-cols-2 gap-6">
                ${companies.map(company => `
                    <div class="company-card group relative overflow-hidden rounded-lg bg-gray-800/50 p-6 transition-all duration-300 hover:scale-105 hover:bg-gray-800">
                        <div class="relative z-10 flex flex-col items-center text-center">
                            <div class="w-16 h-16 mb-4 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                                <img src="${company.logo}" alt="${company.name}" class="w-full h-full object-contain">
                            </div>
                            <h4 class="text-gray-100 font-medium">${company.name}</h4>
                            <p class="text-sm text-gray-400 mt-1">${company.role}</p>
                            <p class="text-xs text-gray-500 mt-1">${company.period}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Add hover effects to company cards
    document.querySelectorAll('.company-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Typing animation
document.addEventListener('DOMContentLoaded', () => {
    const typedText = new Typed('.typing-text', {
        strings: ['Welcome to'],
        typeSpeed: 70,
        showCursor: false,
        onComplete: function() {
            new Typed('.typing-name', {
                strings: ['my portfolio'],
                typeSpeed: 100,
                showCursor: false,
                onComplete: function() {
                    new Typed('.typing-role', {
                        strings: [
                            'FPGA Development',
                            'Firmware Engineering',
                            'Software Architecture',
                            'Systems Programming'
                        ],
                        typeSpeed: 80,        // Increased typing speed
                        backSpeed: 50,        // Increased backspace speed
                        loop: true,
                        showCursor: true,
                        cursorChar: '|',
                        smartBackspace: false, // Disabled smart backspace
                        backDelay: 1500,      // Reduced back delay
                        startDelay: 100,      // Reduced start delay
                        loopCount: false,
                        fadeOut: false,       // Disabled fade out
                        fadeOutClass: false,   // Disabled fade out class
                        fadeOutDelay: 0,      // Disabled fade out delay
                        autoInsertCss: true,  // Enable auto CSS insertion
                    });
                }
            });
        }
    });
});

// Dynamic CTA buttons
const ctaButtons = [
    {
        text: 'View Work',
        href: '#projects',
        class: 'bg-blue-500 hover:bg-blue-600 text-white'
    },
    {
        text: 'Get in Touch',
        href: '#contact',
        class: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700'
    }
];

const ctaContainer = document.getElementById('cta-buttons');
if (ctaContainer) {
    ctaButtons.forEach(button => {
        const btn = document.createElement('a');
        btn.href = button.href;
        btn.className = `${button.class} px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105`;
        btn.textContent = button.text;
        ctaContainer.appendChild(btn);
    });
}

// Smooth scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listener for the 'view work' button
const viewWorkButton = document.getElementById('view-work');
if (viewWorkButton) {
    viewWorkButton.addEventListener('click', function() {
        smoothScroll('#projects'); 
    });
}

// Projects data with minimal design
const projects = [
    {
        title: 'Quantitative Analysis Tool',
        description: 'A fully quantitative approach to financial analysis and modeling via utilizing ML and market backtesting.',
        tags: ['Python', 'Django', 'Yfinance'],
        link: 'quantitative-analysis-tool.html'
    },
    {
        title: 'VQA Model',
        description: 'A highly efficient Computer Vision Model for object detection and classification',
        tags: ['OpenCV', 'Python', 'PyTorch'],
        link: 'vqa-model.html'
    },
    {
        title: 'Coming Soon',
        description: 'Coming Soon',
        tags: ['Coming Soon', 'Coming Soon'],
        link: 'project-beta.html'
    }
];

// Render projects with minimal design
const projectsContainer = document.getElementById('projects-container');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'group relative bg-transparent border border-gray-200 dark:border-gray-700 p-6 rounded-lg transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400';
    projectCard.setAttribute('data-aos', 'fade-up');
    
    projectCard.innerHTML = `
        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-2">${project.title}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
            ${project.tags.map(tag => 
                `<span class="text-sm text-gray-600 dark:text-gray-400">#${tag}</span>`
            ).join('')}
        </div>
        <a href="${project.link}" class="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
            View Project <i class="fas fa-arrow-right ml-2 transition-transform duration-300 transform group-hover:translate-x-1"></i>
        </a>
    `;
    projectsContainer.appendChild(projectCard);
});

// Skills data organized by category
const skillsByCategory = {
    Frontend: ['React', 'TypeScript', 'Tailwind CSS'],
    Backend: ['Node.js', 'Django', 'PostgreSQL'],
    Tools: ['Git', 'Docker', 'AWS'],
    Other: ['UI/UX', 'System Design', 'Agile', 'Slack']
};

// Render skills by category with hover effect
Object.entries(skillsByCategory).forEach(([category, skills]) => {
    const container = document.getElementById(`${category.toLowerCase()}-skills`);
    if (!container) return;

    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'group flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors';
        skillItem.innerHTML = `
            <span class="text-sm group-hover:translate-x-1 transition-transform duration-300">${skill}</span>
        `;
        container.appendChild(skillItem);
    });
});

// Form animations
document.querySelectorAll('.form-group').forEach(group => {
    const input = group.querySelector('input, textarea');
    const indicator = group.querySelector('.form-indicator');
    
    input.addEventListener('focus', () => {
        indicator.style.width = '100%';
        indicator.style.opacity = '1';
    });
    
    input.addEventListener('blur', () => {
        indicator.style.width = '0';
        indicator.style.opacity = '0';
    });
});

// Social links
const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com' }
];

const socialContainer = document.querySelector('.social-links');
if (socialContainer) {
    socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors';
        a.innerHTML = `<i class="${link.icon} text-xl"></i>`;
        socialContainer.appendChild(a);
    });
}

// Initialize AOS
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
}

// Contact form handling with minimal animation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = contactForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i> Sending...';
    
    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check mr-2"></i> Sent!';
        contactForm.reset();
        
        setTimeout(() => {
            button.disabled = false;
            button.textContent = originalText;
        }, 2000);
    }, 1500);
});
