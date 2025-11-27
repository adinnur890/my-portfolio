export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Website Remaja Tengah Teater",
    description: "Platform digital untuk komunitas teater remaja yang menampilkan galeri dokumentasi pertunjukan, manajemen jadwal latihan, profil talenta muda, dan sistem booking workshop seni peran yang interaktif.",
    image: "/images/remaja tengah.jpg",
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    category: "Full Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/adinnurdiansyah/remaja-teater",
    featured: true
  },
  {
    id: 2,
    title: "Aplikasi Manajemen Tugas",
    description: "Aplikasi manajemen tugas kolaboratif dengan update real-time, fitur drag-and-drop, dan kolaborasi tim yang seamless.",
    image: "/images/todo.jpg",
    technologies: ["React", "TypeScript", "Tailwind"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/adinnurdiansyah/taskapp",
    featured: true
  },
  {
    id: 3,
    title: "Figma Todo List Design",
    description: "Desain UI/UX modern untuk aplikasi todo list dengan konsep minimalis, dark mode elegant, dan micro-interactions yang smooth untuk meningkatkan user experience.",
    image: "/images/figma tdolist.jpg",
    technologies: ["Figma", "UI Design", "UX Research", "Prototyping"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/adinnurdiansyah/figma-todo",
    featured: false
  },
  {
    id: 4,
    title: "Sistem Booking Hotel",
    description: "Platform reservasi hotel lengkap dengan fitur pencarian kamar, sistem pembayaran terintegrasi, manajemen booking real-time, dan dashboard admin untuk pengelolaan properti.",
    image: "/images/boking hotel.jpg",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Payment Gateway"],
    category: "Full Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/adinnurdiansyah/hotel-booking",
    featured: true
  },
  {
    id: 5,
    title: "Portfolio Developer Modern",
    description: "Portfolio website dengan fitur glassmorphism design, dark/light mode toggle, scroll animations, project filtering, contact form validation, responsive layout, dan SEO optimization untuk showcase profesional.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    technologies: ["React", "TypeScript", "CSS", "Framer Motion"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/adinnurdiansyah/portfolio",
    featured: true
  },
  {
    id: 6,
    title: "E-Learning Platform",
    description: "Platform pembelajaran online dengan fitur video streaming, quiz interaktif, progress tracking, sertifikat digital, dan sistem pembayaran kursus yang terintegrasi.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
    category: "Full Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/adinnurdiansyah/elearning",
    featured: true
  }
];

export const categories = ["Semua", "Frontend", "Full Stack"];