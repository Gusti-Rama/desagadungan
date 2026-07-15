import { config, fields, collection } from "@keystatic/core";

// - 'cloud' for production (uses Keystatic Cloud hosted admin)
// We must use 'cloud' in all environments because static export (output: 'export')
// does not support Next.js API Routes, which are required for 'local' mode.
export default config({
  storage: { kind: "cloud" as const },
  // Keystatic Cloud project configuration
  // Sign up at https://keystatic.cloud and link your GitHub repo
  cloud: {
    project: "Gusti-Rama/desagadungan",
  },
  collections: {
    // =============================================
    // Berita (News) Collection
    // =============================================
    news: collection({
      label: "Berita",
      slugField: "title",
      path: "src/content/news/*",
      format: { contentField: "content" },
      schema: {
        // Judul berita — juga digunakan untuk generate slug otomatis
        title: fields.slug({
          name: {
            label: "Judul",
            validation: { isRequired: true },
          },
        }),
        // Tanggal publikasi
        date: fields.date({
          label: "Tanggal",
          validation: { isRequired: true },
        }),
        // Gambar sampul berita
        coverImage: fields.image({
          label: "Gambar Sampul",
          directory: "public/images/news",
          publicPath: "/images/news/",
        }),
        // Konten berita (rich text editor menggunakan Markdoc)
        content: fields.markdoc({
          label: "Konten",
        }),
      },
    }),
  },
});
