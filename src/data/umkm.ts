/**
 * UMKM Data — Placeholder data for village small businesses.
 * Replace with real data as needed.
 */

export interface UmkmItem {
  /** URL-friendly slug, used for routing */
  slug: string;
  /** Business name */
  name: string;
  /** Short description for the catalog card */
  shortDesc: string;
  /** Full description for the detail page */
  fullDesc: string;
  /** Category / type of business */
  category: string;
  /** Owner name */
  owner: string;
  /** Location / address */
  location: string;
  /** WhatsApp number (with country code, no +) */
  whatsapp: string;
  /** Google Maps URL */
  mapsUrl: string;
  /** Image path (relative to public/) — null means placeholder */
  image: string | null;
  /** Business status */
  status: "Aktif Buka" | "Tutup Sementara";
}

export const umkmData: UmkmItem[] = [
  {
    slug: "es-kelapa-muda-tiga-bersaudara",
    name: "Es Kelapa Muda Tiga Bersaudara",
    shortDesc:
      "Es Kelapa Muda Tiga Bersaudara adalah tempat kuliner andalan di Wedi, Klaten, yang menyajikan kesegaran asli ...",
    fullDesc:
      "Es Kelapa Muda Tiga Bersaudara adalah tempat kuliner andalan di Wedi, Klaten, yang menyajikan kesegaran asli es kelapa muda murni pilihan. Tidak hanya melepas dahaga, kami juga menghidangkan Nasi Rames khas rumahan dengan beragam pilihan lauk pauk yang lezat, gurih, dan ramah di kantong. Cocok sekali untuk menu sarapan, makan siang, hingga makan malam praktis bersama keluarga. Yuk, mampir dan rasakan kesegarannya!",
    category: "Kuliner",
    owner: "Pak Slamet",
    location: "Dukuh Niten, RT 03/RW 02, Desa Gadungan",
    whatsapp: "6281234567890",
    mapsUrl: "https://maps.google.com/?q=Gadungan+Wedi+Klaten",
    image: null,
    status: "Aktif Buka",
  },
  {
    slug: "warung-makan-bu-sri",
    name: "Warung Makan Bu Sri",
    shortDesc:
      "Warung Makan Bu Sri menyajikan masakan rumahan khas Jawa yang lezat dengan harga terjangkau untuk masyarakat sekitar.",
    fullDesc:
      "Warung Makan Bu Sri telah melayani masyarakat Desa Gadungan selama lebih dari 10 tahun. Menyajikan aneka masakan rumahan khas Jawa seperti nasi gudeg, ayam goreng kampung, sayur lodeh, dan berbagai lauk pilihan lainnya. Semua bahan segar dan dimasak setiap hari. Harga sangat terjangkau untuk semua kalangan. Buka setiap hari dari pagi hingga sore.",
    category: "Kuliner",
    owner: "Bu Sri",
    location: "Dukuh Niten, RT 01/RW 01, Desa Gadungan",
    whatsapp: "6281234567891",
    mapsUrl: "https://maps.google.com/?q=Gadungan+Wedi+Klaten",
    image: null,
    status: "Aktif Buka",
  },
  {
    slug: "batik-tulis-gadungan",
    name: "Batik Tulis Gadungan",
    shortDesc:
      "Pengrajin batik tulis tradisional yang menghasilkan kain batik berkualitas tinggi dengan motif khas Klaten.",
    fullDesc:
      "Batik Tulis Gadungan merupakan usaha kerajinan batik tulis yang telah diturunkan dari generasi ke generasi. Setiap helai kain batik dibuat dengan tangan terampil menggunakan teknik canting tradisional. Motif-motif yang dihasilkan mencerminkan kekayaan budaya Klaten dan Jawa Tengah. Tersedia berbagai pilihan kain batik untuk kebutuhan sehari-hari, acara formal, maupun oleh-oleh khas daerah.",
    category: "Kerajinan",
    owner: "Ibu Sumarni",
    location: "Dukuh Niten, RT 05/RW 03, Desa Gadungan",
    whatsapp: "6281234567892",
    mapsUrl: "https://maps.google.com/?q=Gadungan+Wedi+Klaten",
    image: null,
    status: "Aktif Buka",
  },
  {
    slug: "toko-kelontong-berkah",
    name: "Toko Kelontong Berkah",
    shortDesc:
      "Toko kelontong lengkap yang menyediakan kebutuhan sehari-hari warga desa dengan harga bersahabat.",
    fullDesc:
      "Toko Kelontong Berkah menyediakan berbagai kebutuhan harian masyarakat Desa Gadungan. Mulai dari bahan pokok, bumbu dapur, sabun, perlengkapan rumah tangga, hingga alat tulis. Kami berkomitmen memberikan harga yang bersahabat dan pelayanan yang ramah. Toko buka setiap hari mulai pukul 06.00 hingga 21.00 WIB.",
    category: "Perdagangan",
    owner: "Pak Joko",
    location: "Dukuh Niten, RT 02/RW 02, Desa Gadungan",
    whatsapp: "6281234567893",
    mapsUrl: "https://maps.google.com/?q=Gadungan+Wedi+Klaten",
    image: null,
    status: "Aktif Buka",
  },
  {
    slug: "bengkel-las-maju-jaya",
    name: "Bengkel Las Maju Jaya",
    shortDesc:
      "Bengkel las dan perbengkelan yang melayani pembuatan pagar, teralis, kanopi, serta perbaikan alat pertanian.",
    fullDesc:
      "Bengkel Las Maju Jaya melayani berbagai jenis pekerjaan pengelasan dan fabrikasi logam. Mulai dari pembuatan pagar besi, teralis jendela, kanopi, tangga besi, hingga perbaikan alat-alat pertanian. Dengan pengalaman lebih dari 15 tahun, kami menjamin kualitas hasil kerja yang kokoh dan rapi. Melayani pesanan dari dalam dan luar desa.",
    category: "Jasa",
    owner: "Pak Bambang",
    location: "Dukuh Niten, RT 04/RW 01, Desa Gadungan",
    whatsapp: "6281234567894",
    mapsUrl: "https://maps.google.com/?q=Gadungan+Wedi+Klaten",
    image: null,
    status: "Aktif Buka",
  },
  {
    slug: "ternak-ayam-sejahtera",
    name: "Ternak Ayam Sejahtera",
    shortDesc:
      "Peternakan ayam kampung organik yang menyediakan telur dan daging ayam segar berkualitas tinggi.",
    fullDesc:
      "Ternak Ayam Sejahtera adalah usaha peternakan ayam kampung yang menerapkan sistem pemeliharaan organik dan semi free-range. Ayam dipelihara dengan pakan alami tanpa bahan kimia, menghasilkan telur dan daging yang sehat dan berkualitas. Tersedia telur ayam kampung segar dan ayam siap potong. Melayani pemesanan untuk kebutuhan rumah tangga maupun acara besar.",
    category: "Peternakan",
    owner: "Pak Widodo",
    location: "Dukuh Niten, RT 06/RW 03, Desa Gadungan",
    whatsapp: "6281234567895",
    mapsUrl: "https://maps.google.com/?q=Gadungan+Wedi+Klaten",
    image: null,
    status: "Tutup Sementara",
  },
];
