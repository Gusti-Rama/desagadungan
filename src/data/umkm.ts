/**
 * UMKM Data — Placeholder data for village small businesses.
 * Replace with real data as needed.
 */

export interface UmkmItem {
  /** URL-friendly slug, used for routing */
  slug: string;
  /** Business name */
  name: string;
  /** WhatsApp number (with country code, no +) */
  whatsapp: string;
  /** Image path (relative to public/) — null means placeholder */
  image: string | null;
}

export const umkmData: UmkmItem[] = [
  {
    slug: "es-kelapa-muda-tiga-bersaudara",
    name: "Es Kelapa Muda Tiga Bersaudara",
    whatsapp: "6281234567890",
    image: null,
  },
  {
    slug: "warung-makan-bu-sri",
    name: "Warung Makan Bu Sri",
    whatsapp: "6281234567891",
    image: null,
  },
  {
    slug: "batik-tulis-gadungan",
    name: "Batik Tulis Gadungan",
    whatsapp: "6281234567892",
    image: null,
  },
  {
    slug: "toko-kelontong-berkah",
    name: "Toko Kelontong Berkah",
    whatsapp: "6281234567893",
    image: null,
  },
  {
    slug: "bengkel-las-maju-jaya",
    name: "Bengkel Las Maju Jaya",
    whatsapp: "6281234567894",
    image: null,
  },
  {
    slug: "ternak-ayam-sejahtera",
    name: "Ternak Ayam Sejahtera",
    whatsapp: "6281234567895",
    image: null,
  },
];
