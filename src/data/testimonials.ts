export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Owner",
    company: "Warung Makan Sederhana",
    message: "Website toko online yang dibuat Adin sangat membantu bisnis saya. Penjualan meningkat 200% setelah ada website!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sari Dewi",
    role: "Founder",
    company: "Kursus Online Bahasa",
    message: "Platform e-learning yang dibuat sangat user-friendly. Murid-murid saya mudah menggunakan dan fiturnya lengkap.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    role: "CEO",
    company: "TopUp Gaming Store",
    message: "Website topup game yang dibuat Adin sangat profesional. Sistem pembayaran otomatis dan admin panel yang mudah digunakan.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 4,
    name: "Linda Permata",
    role: "Manager",
    company: "Hotel Indah Sukabumi",
    message: "Sistem booking hotel yang dibuat sangat memudahkan tamu untuk reservasi. Fitur kalender real-time sangat membantu.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];