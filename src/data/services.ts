export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Website Topup Game",
    description: "Platform topup game online dengan sistem pembayaran otomatis dan berbagai metode payment",
    icon: "🎮",
    features: [
      "Multi game support (ML, FF, PUBG, dll)",
      "Payment gateway lengkap",
      "Sistem deposit otomatis",
      "Admin panel canggih",
      "API integration game"
    ],
    price: "Mulai 3.5jt"
  },
  {
    id: 2,
    title: "Website E-Learning",
    description: "Platform pembelajaran online dengan video course, quiz, dan sertifikat digital",
    icon: "📚",
    features: [
      "Video streaming course",
      "Quiz & assignment",
      "Progress tracking",
      "Sertifikat digital",
      "Payment subscription"
    ],
    price: "Mulai 4.5jt"
  },
  {
    id: 3,
    title: "Website Toko Online",
    description: "E-commerce lengkap dengan katalog produk, keranjang belanja, dan sistem pembayaran",
    icon: "🛒",
    features: [
      "Katalog produk unlimited",
      "Shopping cart system",
      "Multiple payment gateway",
      "Inventory management",
      "Order tracking"
    ],
    price: "Mulai 4jt"
  },
  {
    id: 4,
    title: "Website Company Profile",
    description: "Website profesional perusahaan dengan design modern dan fitur lengkap",
    icon: "🏢",
    features: [
      "Design responsive premium",
      "SEO optimization",
      "Contact form integration",
      "Gallery & portfolio",
      "Admin panel"
    ],
    price: "Mulai 2.5jt"
  },
  {
    id: 5,
    title: "Website Booking/Reservasi",
    description: "Sistem booking online untuk hotel, restoran, atau layanan dengan kalender real-time",
    icon: "📅",
    features: [
      "Real-time booking calendar",
      "Payment integration",
      "Email notification",
      "Customer management",
      "Reporting dashboard"
    ],
    price: "Mulai 5jt"
  },
  {
    id: 6,
    title: "Website Streaming/Media",
    description: "Platform streaming video dengan fitur live streaming, upload video, dan monetisasi",
    icon: "📺",
    features: [
      "Live streaming support",
      "Video upload & storage",
      "User subscription",
      "Monetisasi ads",
      "Chat real-time"
    ],
    price: "Mulai 6jt"
  }
];