# 📝 How to Update Your Portfolio with Your CV Information

## Step 1: Copy Your Information from Canva

Since I cannot access your Canva CV directly, please:

1. Open your Canva CV: https://www.canva.com/design/DAGya9fmqN4/jA2v5mrSShilo0FH0nwkKw/edit
2. Copy the text content
3. Use the information below as a guide

## Step 2: Update `src/data/portfolioData.js`

Open the file and replace the placeholder data with your actual information:

### Personal Information
```javascript
export const personalInfo = {
  name: "Your Full Name",           // From your CV
  title: "Your Job Title",          // e.g., "Full Stack Developer"
  tagline: "Your tagline",          // Brief description
  email: "your@email.com",          // Your email
  phone: "+1234567890",             // Your phone
  location: "City, Country",        // Your location
  bio: "Your bio...",               // About you paragraph
  image: "/profile.jpg",            // Add your photo to public folder
  
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username",
    facebook: "https://facebook.com/username",
  },
  
  resumeUrl: "/resume.pdf"          // Add your PDF resume to public folder
};
```

### About Section
```javascript
export const about = {
  description: `Copy your about/summary section from your CV here.
    Make it engaging and highlight your key strengths.`,
  
  highlights: [
    "Key achievement 1",
    "Key achievement 2",
    "Key achievement 3",
    "Key achievement 4"
  ],
  
  stats: [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Technologies" }
  ]
};
```

### Skills
```javascript
export const skills = [
  {
    category: "Frontend Development",
    icon: "💻",
    description: "Description of your frontend skills",
    technologies: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  // Add more skill categories from your CV
];
```

### Work Experience
```javascript
export const experience = [
  {
    id: 1,
    title: "Job Title",                    // From your CV
    company: "Company Name",               // From your CV
    location: "City, Country",             // From your CV
    period: "Start Date - End Date",       // e.g., "2022 - Present"
    description: [
      "Responsibility or achievement 1",
      "Responsibility or achievement 2",
      "Responsibility or achievement 3"
    ]
  },
  // Add all your work experience
];
```

### Education
```javascript
export const education = [
  {
    id: 1,
    degree: "Your Degree",                 // From your CV
    school: "University/College Name",     // From your CV
    location: "City, Country",             // From your CV
    period: "Start - End Year",            // e.g., "2014 - 2018"
    description: "Additional details..."   // Optional
  },
  // Add all your education
];
```

### Projects
```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    category: "Web Development",           // Category for filtering
    description: "Brief project description",
    image: "/projects/project1.jpg",      // Add image to public/projects/
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://project-demo.com",
    featured: true                         // Show in featured section
  },
  // Add all your projects
];
```

## Step 3: Add Your Images

Place these files in the `public` folder:

```
public/
├── profile.jpg              ← Your profile photo
├── about-image.jpg          ← Another photo of you (optional)
├── resume.pdf               ← Your CV as PDF
└── projects/                ← Create this folder
    ├── project1.jpg         ← Project screenshots
    ├── project2.jpg
    └── ...
```

### Image Tips:
- **Profile photo**: Square image, 500x500px minimum, professional photo
- **Project images**: 1200x800px or 16:9 ratio
- **File formats**: Use .jpg or .webp for smaller file sizes
- **File names**: Use lowercase, no spaces (use hyphens: my-project.jpg)

## Step 4: Update Colors (Optional)

Open `src/index.css` and change the colors to match your brand:

```css
:root {
  --primary-color: #4a90e2;      /* Your main color */
  --secondary-color: #7877c6;    /* Your accent color */
  --text-color: #2c3e50;         /* Dark text */
  --text-light: #666;            /* Light text */
}
```

## Step 5: Test Your Portfolio

```bash
npm run dev
```

Open http://localhost:5173 and check:
- ✅ All your information is correct
- ✅ All images load properly
- ✅ All links work (social media, projects, resume)
- ✅ Contact form displays correctly
- ✅ Responsive on mobile (resize browser window)

## Step 6: Deploy

Once everything looks good:

```bash
npm run build
```

Then deploy the `dist` folder to:
- **Netlify**: Drag and drop the dist folder
- **Vercel**: Use `vercel` command
- **GitHub Pages**: Push to gh-pages branch

---

## Quick Checklist ✓

- [ ] Updated personalInfo with your name, title, contacts
- [ ] Added your profile photo to public/
- [ ] Updated about section with your bio
- [ ] Updated skills with your technologies
- [ ] Added all work experience from CV
- [ ] Added education history
- [ ] Added projects with screenshots
- [ ] Added resume PDF to public/
- [ ] Updated social media links
- [ ] Tested on desktop and mobile
- [ ] All images load correctly
- [ ] All links work

---

## Need Help?

Common issues:
1. **Images not showing**: Check file paths and names (case-sensitive!)
2. **Broken links**: Verify URLs include https://
3. **Layout issues**: Clear browser cache (Ctrl+Shift+R)

Good luck with your portfolio! 🚀
