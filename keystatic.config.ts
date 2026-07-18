import { config, fields, collection } from "@keystatic/core";

// - 'local' for development
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
    project: "desa-gadungan/desagadungan",
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

    // =============================================
    // Fasilitas (Sarana & Prasarana) Collection
    // =============================================
    fasilitas: collection({
      label: "Fasilitas (Sarana & Prasarana)",
      slugField: "name",
      path: "src/content/fasilitas/*",
      format: { data: "json" },
      schema: {
        name: fields.slug({
          name: {
            label: "Nama Fasilitas",
            validation: { isRequired: true },
          },
        }),
        foto: fields.image({
          label: "Foto Utama",
          directory: "public/images/fasilitas",
          publicPath: "/images/fasilitas/",
          validation: { isRequired: true },
        }),
        deskripsi: fields.text({
          label: "Deskripsi Singkat",
          multiline: true,
          validation: { isRequired: true },
        }),
        galeri: fields.array(
          fields.image({
            label: "Foto",
            directory: "public/images/fasilitas",
            publicPath: "/images/fasilitas/",
          }),
          {
            label: "Galeri Foto (Opsional)",
            itemLabel: (props) => props.value || "Foto",
          }
        ),
      },
    }),
  },
});
