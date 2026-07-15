import { config, fields, collection } from "@keystatic/core";

// Determine storage mode based on environment
// - 'local' for development (reads/writes files on disk)
// - 'github' for production (connects directly to GitHub repo)
const storageKind =
  process.env.NODE_ENV === "development" ? "local" : "github";

export default config({
  storage:
    storageKind === "local"
      ? { kind: "local" as const }
      : {
          kind: "github" as const,
          repo: "Gusti-Rama/desagadungan",
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
