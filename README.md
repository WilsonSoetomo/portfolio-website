# Wilson Soetomo - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a clean design inspired by Brittany Chiang and Lee Robinson's websites.

## 🚀 Features

- **Modern Tech Stack**: Next.js with TypeScript and Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Smooth Animations**: Framer Motion for engaging interactions
- **SEO Optimized**: Meta tags and proper page structure
- **Vercel Ready**: Optimized for deployment on Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation with dark mode toggle
│   ├── Footer.tsx          # Footer with social links
│   └── ProjectCard.tsx     # Reusable project card component
├── pages/
│   ├── _app.tsx           # App wrapper with theme provider
│   ├── index.tsx          # Home page with hero section
│   ├── projects.tsx       # Projects showcase
│   ├── about.tsx          # About page with skills
│   └── resume.tsx         # Resume download page
└── styles/
    └── globals.css        # Global styles and Tailwind config
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with Pages Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode
- **Deployment**: Vercel

## 🎨 Design Features

- **Clean Typography**: Modern font hierarchy
- **Gradient Accents**: Subtle gradients for visual appeal
- **Smooth Transitions**: Hover effects and page transitions
- **Card-based Layout**: Clean project showcase
- **Professional Color Scheme**: Blue and purple accents

## 📱 Pages

### Home (`/`)
- Hero section with personal introduction
- Call-to-action buttons
- Technology stack preview
- Smooth scroll animations

### Projects (`/projects`)
- Grid layout of project cards
- Technology badges
- GitHub and live demo links
- Responsive design

### About (`/about`)
- Personal background
- Skills organized by category
- Work experience timeline
- Contact information

### Resume (`/resume`)
- Automatic PDF download
- Fallback link if download fails
- Professional presentation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Customization

### Personal Information
Update the following files with your information:
- `src/pages/index.tsx` - Hero section content
- `src/pages/about.tsx` - About page content
- `src/components/Header.tsx` - Navigation name
- `src/components/Footer.tsx` - Social links

### Projects
Edit the projects array in `src/pages/projects.tsx`:
```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tech: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/username/project",
    live: "https://project-demo.com"
  }
]
```

### Resume
Replace `public/resume.pdf` with your actual resume file.

### Styling
- Colors: Update Tailwind classes in components
- Fonts: Modify `tailwind.config.ts`
- Animations: Adjust Framer Motion properties

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project is optimized for static deployment and works with:
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: wilson.soetomo@example.com
- **GitHub**: [@wilsonsoetomo](https://github.com/wilsonsoetomo)
- **LinkedIn**: [Wilson Soetomo](https://linkedin.com/in/wilsonsoetomo)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
