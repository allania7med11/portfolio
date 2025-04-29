const fs = require('fs');
const path = require('path');

function readProjectFile(projectName) {
    const filePath = path.join(__dirname, '../data/projects', `${projectName}.js`);
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanedContent = content.replace(/require\(["']@\/assets\/images\/[^"']+["']\)/g, '""');
    const match = cleanedContent.match(/export default ({[\s\S]*?});/);
    return match ? eval(`(${match[1]})`) : null;
}

function readExperienceFile(experienceName) {
    const filePath = path.join(__dirname, '../data/experiences', `${experienceName}.js`);
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanedContent = content.replace(/require\(["']@\/assets\/images\/[^"']+["']\)/g, '""');
    const match = cleanedContent.match(/export default ({[\s\S]*?});/);
    return match ? eval(`(${match[1]})`) : null;
}

function readEducationFile(educationName) {
    const filePath = path.join(__dirname, '../data/educations', `${educationName}.js`);
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanedContent = content.replace(/require\(["']@\/assets\/images\/[^"']+["']\)/g, '""');
    const match = cleanedContent.match(/export default ({[\s\S]*?});/);
    return match ? eval(`(${match[1]})`) : null;
}

function parseIndexFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Get all lines that start with 'import' to get the order
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    // Extract the variable names from import statements
    return importLines.map(line => {
        const match = line.match(/import\s+(\w+)\s+from/);
        return match ? match[1] : null;
    }).filter(Boolean);
}

function generateProfileText() {
    let text = `# 👋 Hi, I'm Ahmed Allani

[![Website](https://img.shields.io/badge/Website-about.effectivewebapp.com-blue)](https://about.effectivewebapp.com)
[![GitHub](https://img.shields.io/badge/GitHub-allania7med11-black)](https://github.com/allania7med11)
[![Email](https://img.shields.io/badge/Email-allania7med11@gmail.com-red)](mailto:allania7med11@gmail.com)

## 🚀 About Me
Full-stack developer with expertise in web development, AI integration, and DevOps. Experienced in building scalable applications using modern technologies and frameworks.

## 💻 Tech Stack
`;

    // Read projects index for order
    const projectsIndexPath = path.join(__dirname, '../data/projects/index.js');
    const projectsOrder = parseIndexFile(projectsIndexPath);

    // Read experiences index for order
    const experiencesIndexPath = path.join(__dirname, '../data/experiences/index.js');
    const experiencesOrder = parseIndexFile(experiencesIndexPath);

    // Read education index for order
    const educationIndexPath = path.join(__dirname, '../data/educations/index.js');
    const educationOrder = parseIndexFile(educationIndexPath);

    // Collect all unique technologies
    const technologies = new Set();
    const projects = [];

    // Read projects in the order specified in index.js
    projectsOrder.forEach(projectName => {
        const project = readProjectFile(projectName);
        if (project?.technologies) {
            project.technologies.forEach(tech => technologies.add(tech));
            projects.push(project);
        }
    });

    // Group technologies by category
    const techCategories = {
        'Frontend': ['Html', 'Css', 'Scss', 'Javascript', 'TypeScript', 'React.js', 'Next.js', 'Vue', 'Nuxt', 'Vuetify', 'Material UI', 'Redux'],
        'Backend': ['Django', 'Django REST Framework', 'Django Channels', 'Express', 'Celery', 'Redis'],
        'DevOps': ['Docker', 'Ansible', 'Digital Ocean', 'DigitalOcean', 'Heroku', 'Netlify', 'GitHub Pages', 'Semaphore UI', 'Sentry'],
        'AI/ML': ['OpenAI GPT-4 Turbo', 'FAISS', 'LangChain'],
        'Testing': ['Pytest', 'Playwright'],
        'Design': ['Figma', 'GIMP'],
        'Other': ['WebSockets', 'PWA', 'Stripe Integration']
    };

    // Add technologies grouped by category
    // Loop over each tech category
    for (const [category, keywords] of Object.entries(techCategories)) {
        // Precompute the lowercased keywords once
        const keywordsLowerCase = keywords.map(keyword => keyword.toLowerCase());
        const matchedTechs = [...technologies].filter(tech => {
            const techLower = tech.toLowerCase();
            return keywordsLowerCase.some(keywordLower => techLower.includes(keywordLower));
          });

        // If there are matches, add them under the category
        if (matchedTechs.length > 0) {
            text += `\n### ${category}\n`;
            text += matchedTechs.map(tech => `- ${tech}`).join('\n');
        }
    }

    text += `\n\n## 🎯 Featured Projects
`;

    // Add projects in the order from index.js
    projects.forEach(project => {
        text += `\n### ${project.name}
${project.overview || ''}

\`\`\`
Technologies: ${project.technologies?.join(', ') || ''}
\`\`\`

#### Key Features
`;
        if (project.groups) {
            Object.entries(project.groups).forEach(([groupName, group]) => {
                text += `\n**${groupName}**\n`;
                group.features?.forEach(feature => {
                    text += `- ${feature.replace(/^\/\/\s*[🍭🍒💬]\s*/, '').trim()}\n`;
                });
            });
        } else if (project.features) {
            project.features.forEach(feature => {
                text += `- ${feature.replace(/^\/\/\s*[🍭🍒💬]\s*/, '').trim()}\n`;
            });
        }

        // Add action buttons
        if (project.actions?.length) {
            text += '\n#### Links\n';
            project.actions.forEach(action => {
                text += `- [${action.text}](${action.href})\n`;
            });
        }
    });

    text += `\n## 💼 Professional Experience
`;

    // Add experiences in the order from index.js
    experiencesOrder.forEach(experienceName => {
        const experience = readExperienceFile(experienceName);
        if (experience) {
            const role = experience.title?.en || experience.title || '';
            const endDate = experience.dates?.end?.en || experience.dates?.end || '';
            text += `\n### ${experience.company}
**${role}** | ${experience.dates?.start || ''} - ${endDate}

${experience.description?.en || experience.description || ''}
`;
        }
    });

    text += `\n## 🎓 Education
`;

    // Add education in the order from index.js
    educationOrder.forEach(educationName => {
        const education = readEducationFile(educationName);
        if (education) {
            const degree = education.degree || '';
            const field = education.field || '';
            const school = education.school || '';
            const endDate = education.dates?.end || '';
            const description = education.description?.en || education.description || '';

            text += `\n### ${school}
**${degree}${field ? ` in ${field}` : ''}** | ${education.dates?.start || ''} - ${endDate}

${description}
`;
        }
    });

    text += `
## 🌟 Professional Interests
- Web Development & Modern Frameworks
- Artificial Intelligence & Machine Learning Integration
- DevOps & Cloud Infrastructure
- E-commerce Solutions & Payment Systems
- Real-time Applications & WebSockets
- Progressive Web Apps (PWA)
- Automated Testing & Quality Assurance

## 📫 Get in Touch
- Email: [allania7med11@gmail.com](mailto:allania7med11@gmail.com)
- Website: [about.effectivewebapp.com](https://about.effectivewebapp.com)
- GitHub: [github.com/allania7med11](https://github.com/allania7med11)
- Location: Tunisia

---

<div align="center">
  <sub>Built with ❤️ by Ahmed Allani</sub>
</div>`;

    // Write to README.md file
    const outputPath = path.join(__dirname, '../README.md');
    fs.writeFileSync(outputPath, text);
    console.log('README.md generated successfully!');
}

generateProfileText(); 