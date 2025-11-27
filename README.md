# Modern React Portfolio Website

A modern, responsive portfolio website built with React 18, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Glassmorphism effects with beautiful gradients
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: System preference detection with manual toggle
- **Smooth Animations**: Framer Motion animations and scroll-triggered effects
- **TypeScript**: Full type safety throughout the application
- **PWA Ready**: Progressive Web App capabilities
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized images and code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── Sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── UI/
│       ├── Button.tsx
│       └── Card.tsx
├── hooks/
│   └── useScrollAnimation.ts
├── contexts/
│   └── ThemeContext.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── personal.ts
├── utils/
│   └── helpers.ts
└── styles/
    └── globals.css
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Edit `src/data/personal.ts` to update your personal information, social links, and contact details.

### Projects
Update `src/data/projects.ts` to showcase your projects with descriptions, technologies, and links.

### Skills
Modify `src/data/skills.ts` to reflect your technical skills and achievements.

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes

## 📱 PWA Features

The portfolio includes PWA capabilities:
- Offline functionality
- App installation
- Custom splash screen
- Optimized caching strategy

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deployment

### Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

John Doe - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)