# Ason Yue - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing QA engineering expertise with a focus on FinTech platform testing.

## 🚀 Quick Start

### Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Build the site
npm run build

# Start production server
npm start
```

## 📝 Editing Content

All site content is stored in JSON files under the `content/` directory. **No code changes are needed** to update your information.

### Content Files

#### `content/personal.json`
Your basic information, contact details, and social links.

```json
{
  "name": "Your Full Name",
  "shortName": "Your Short Name",
  "title": "Your Professional Title",
  "email": "your.email@example.com",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "github": "https://github.com/yourusername",
  "website": "https://yoursite.com"
}
```

#### `content/stories.json`
Three short stories highlighting your key achievements and areas of expertise. These appear in the "What I Do" section.

```json
[
  {
    "title": "Story Title",
    "description": "Brief description of your achievement or expertise area."
  }
]
```

#### `content/experience.json`
Your work experience in reverse chronological order.

```json
[
  {
    "company": "Company Name",
    "role": "Your Position",
    "location": "City, Country",
    "period": "Start Date - End Date",
    "type": "Full-time / Part-time / Internship",
    "icon": "/logos/company-logo.png",
    "descriptions": [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2"
    ]
  }
]
```

#### `content/skills.json`
Your technical skills organized by category.

```json
{
  "categories": [
    {
      "name": "Category Name",
      "items": ["Skill 1", "Skill 2", "Skill 3"]
    }
  ]
}
```

#### `content/education.json`
Your educational background.

```json
[
  {
    "school": "University Name",
    "degree": "Degree and Major",
    "location": "City, Country",
    "period": "Start - End",
    "gpa": "3.8",
    "icon": "/logos/school-logo.png",
    "highlights": [
      "Achievement 1",
      "Achievement 2"
    ]
  }
]
```

## 📄 Resume Download

### Replacing the Resume PDF

1. Place your PDF resume at: `public/resume.pdf`
2. The download buttons in the hero and footer sections will automatically serve your file
3. File name **must** be `resume.pdf` (all lowercase)

**Current Status:** The site includes a placeholder PDF. Replace `public/resume.pdf` with your actual resume.

### Download Locations

- **Hero Section**: Primary "Download Resume" button below your name
- **Footer**: Secondary download link for easy access

## 🎨 Customization

### Adding Company/School Logos

1. Save logos to `public/logos/` directory
2. Reference them in content files: `"/logos/your-logo.png"`
3. Recommended size: 40x40 to 80x80 pixels
4. Formats: PNG or SVG

### Profile Photo

Replace `public/images/ason-photo.png` with your photo. Keep the filename or update it in `src/app/components/Hero.tsx`.

## 🛠 Tech Stack

- **Framework**: Next.js 16.1
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Runtime**: React 19

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark/light/auto theme support
- ✅ Content-driven architecture (no hardcoded text)
- ✅ Resume download functionality
- ✅ Smooth animations and transitions
- ✅ Clean, hiring-manager friendly design
- ✅ SEO-ready structure

## 📦 Deployment

This site is deployed at [asonyue.com](https://asonyue.com).

To deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🔧 Project Structure

```
├── content/              # All site content (JSON files)
│   ├── personal.json
│   ├── stories.json
│   ├── experience.json
│   ├── skills.json
│   └── education.json
├── public/
│   ├── resume.pdf       # Your resume (replace this)
│   ├── images/          # Photos
│   └── logos/           # Company/school logos
├── src/
│   └── app/
│       ├── components/  # React components
│       ├── page.tsx     # Main page
│       └── layout.tsx   # App layout
└── README.md
```

## 💡 Making Changes

1. **Update Content**: Edit JSON files in `content/` directory
2. **Replace Resume**: Replace `public/resume.pdf`
3. **Add Logos**: Add images to `public/logos/`
4. **Test Locally**: Run `npm run dev`
5. **Deploy**: Push to GitHub or run `vercel`

## 📞 Support

For questions or issues, contact:
- Email: ason06057@gmail.com
- GitHub: [@asonyue](https://github.com/asonyue)

---

Built with ❤️ by Ason Yue
