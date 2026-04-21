# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This project showcases my professional profile, including education, skills, experience, projects, and contact information with interactive design elements and smooth animations.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices (mobile, tablet, desktop)
- **Modern UI**: Clean and professional interface with dark theme and gradient accents
- **Interactive Hero Section**: Animated background elements and social media links with hover effects
- **Education Timeline**: Interactive timeline showing academic journey with achievements
- **Skills Showcase**: Categorized skill display with technology icons and proficiency indicators
- **Professional Experience**: Work experience timeline with expandable details and certificate viewing
- **Projects Portfolio**: Interactive project showcase with filtering and detailed project information
- **Contact Form**: Functional contact form with EmailJS integration and real-time validation
- **Resume Download**: Direct resume download functionality
- **Loading Animation**: Professional loading screen for better user experience
- **Smooth Scroll Animations**: Section-based animations with Framer Motion
- **Social Media Integration**: Links to GitHub, LinkedIn, HackerRank, and GUVI profiles

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 12
- **Routing**: React Router DOM 7
- **Email Service**: EmailJS
- **Icons**: Custom SVG icons and technology logos
- **Deployment**: Vercel

## Project Structure

```bash
src/
components/
  Header.jsx          # Navigation header with smooth scroll
  Hero.jsx            # Hero section with animated background and social links
  Education.jsx       # Education timeline with achievements
  Skills.jsx          # Skills showcase with technology categories
  Experience.jsx      # Work experience with certificates
  Projects.jsx        # Projects portfolio with GitHub links
  Contact.jsx         # Contact form with EmailJS integration
  Footer.jsx          # Footer section
  Loader.jsx          # Loading animation
  ResumeRedirect.jsx  # Resume download redirect
  Avatar.jsx          # Avatar component
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── assets/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/madhanmohanreddyperam06/My-Portfolio.git
cd My-Portfolio
```

1. Install dependencies:

```bash
npm install
```

1. Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

1. Start the development server:

```bash
npm run dev
```

1. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code issues

## Deployment

This project can be deployed on any static hosting platform. The build process creates optimized static files in the `dist` folder.

### Popular Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect Git
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Deploy with Firebase CLI

### Build for Production

```bash
npm run build
```

## 📧 Contact

The contact form is powered by EmailJS. Make sure to configure your EmailJS account and update the environment variables accordingly.

## 🤝 Contributing

Feel free to fork this project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using React, Vite, and Tailwind CSS
