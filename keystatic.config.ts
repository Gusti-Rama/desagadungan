import { config, fields, collection } from "@keystatic/core";

// Determine storage mode based on environment
// - 'local' for development (reads/writes files on disk)
// - 'cloud' for production (uses Keystatic Cloud hosted admin)
const storageKind =
  process.env.NODE_ENV === "development" ? "local" : "cloud";

export default config({
  storage:
    storageKind === "local"
      ? { kind: "local" as const }
      : { kind: "cloud" as const },
  // Keystatic Cloud project configuration
  // Sign up at https://keystatic.cloud and link your GitHub repo
  cloud: {
    project: "your-team/your-project", // TODO: Replace with your Keystatic Cloud project slug
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
