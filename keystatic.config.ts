import { config, fields, collection, singleton } from "@keystatic/core";

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
            itemLabel: (props) => props.value ? props.value.filename : "Foto",
          }
        ),
      },
    }),

    // =============================================
    // UMKM Collection
    // =============================================
    umkm: collection({
      label: "UMKM",
      slugField: "name",
      path: "src/content/umkm/*",
      format: { data: "json" },
      schema: {
        name: fields.slug({
          name: {
            label: "Nama Usaha",
            validation: { isRequired: true },
          },
        }),
        category: fields.select({
          label: "Kategori",
          options: [
            { label: "Kuliner", value: "Kuliner" },
            { label: "Kerajinan", value: "Kerajinan" },
            { label: "Perdagangan", value: "Perdagangan" },
            { label: "Jasa", value: "Jasa" },
            { label: "Peternakan", value: "Peternakan" },
            { label: "Pertanian", value: "Pertanian" },
            { label: "Lainnya", value: "Lainnya" },
          ],
          defaultValue: "Kuliner",
        }),
        status: fields.select({
          label: "Status Buka",
          options: [
            { label: "Aktif Buka", value: "Aktif Buka" },
            { label: "Tutup Sementara", value: "Tutup Sementara" },
          ],
          defaultValue: "Aktif Buka",
        }),
        owner: fields.text({
          label: "Nama Pemilik",
          validation: { isRequired: true },
        }),
        location: fields.text({
          label: "Alamat / Lokasi",
          validation: { isRequired: true },
        }),
        whatsapp: fields.text({
          label: "Nomor WhatsApp (Contoh: 6281234567890)",
          validation: { isRequired: true },
        }),
        mapsUrl: fields.url({
          label: "Link Google Maps",
        }),
        image: fields.image({
          label: "Foto Usaha (Opsional)",
          directory: "public/images/umkm",
          publicPath: "/images/umkm/",
        }),
        shortDesc: fields.text({
          label: "Deskripsi Singkat (Maks 150 Karakter)",
          validation: { isRequired: true },
        }),
        fullDesc: fields.text({
          label: "Deskripsi Lengkap",
          multiline: true,
          validation: { isRequired: true },
        }),
      },
    }),
  },
  
  singletons: {
    // =============================================
    // Statistik & Demografi Desa Singleton
    // =============================================
    statistik: singleton({
      label: "Statistik & Demografi",
      path: "src/content/statistik/data",
      format: { data: "json" },
      schema: {
        // Info Umum
        jumlahPenduduk: fields.integer({ label: "Total Jiwa", defaultValue: 1459 }),
        kepalaKeluarga: fields.integer({ label: "Kepala Keluarga", defaultValue: 562 }),
        lakiLaki: fields.integer({ label: "Laki-laki", defaultValue: 705 }),
        perempuan: fields.integer({ label: "Perempuan", defaultValue: 754 }),
        jumlahRt: fields.integer({ label: "Jumlah RT", defaultValue: 12 }),
        jumlahRw: fields.integer({ label: "Jumlah RW", defaultValue: 5 }),
        luasWilayah: fields.text({ label: "Luas Wilayah (Contoh: ~200 Ha)", defaultValue: "~200 Ha" }),

        // Data Demografi (Array of Label & Value)
        // Persentase tidak diinput di sini, melainkan dihitung otomatis di frontend
        umur: fields.array(
          fields.object({
            label: fields.text({ label: "Kategori (Contoh: Balita 0-4 Th)" }),
            value: fields.integer({ label: "Jumlah (Jiwa)" }),
          }),
          { label: "Kelompok Umur", itemLabel: (props) => `${props.fields.label.value} (${props.fields.value.value} Jiwa)` }
        ),
        perkawinan: fields.array(
          fields.object({
            label: fields.text({ label: "Status" }),
            value: fields.integer({ label: "Jumlah (Jiwa)" }),
          }),
          { label: "Status Perkawinan", itemLabel: (props) => `${props.fields.label.value} (${props.fields.value.value} Jiwa)` }
        ),
        agama: fields.array(
          fields.object({
            label: fields.text({ label: "Agama" }),
            value: fields.integer({ label: "Jumlah (Jiwa)" }),
          }),
          { label: "Agama & Kepercayaan", itemLabel: (props) => `${props.fields.label.value} (${props.fields.value.value} Jiwa)` }
        ),
        pendidikan: fields.array(
          fields.object({
            label: fields.text({ label: "Tingkat Pendidikan" }),
            value: fields.integer({ label: "Jumlah (Jiwa)" }),
          }),
          { label: "Tingkat Pendidikan", itemLabel: (props) => `${props.fields.label.value} (${props.fields.value.value} Jiwa)` }
        ),
        pekerjaan: fields.array(
          fields.object({
            label: fields.text({ label: "Jenis Pekerjaan" }),
            value: fields.integer({ label: "Jumlah (Jiwa)" }),
          }),
          { label: "Mata Pencaharian", itemLabel: (props) => `${props.fields.label.value} (${props.fields.value.value} Jiwa)` }
        ),
        darah: fields.array(
          fields.object({
            label: fields.text({ label: "Golongan Darah" }),
            value: fields.integer({ label: "Jumlah (Jiwa)" }),
          }),
          { label: "Golongan Darah", itemLabel: (props) => `${props.fields.label.value} (${props.fields.value.value} Jiwa)` }
        ),
      },
    }),
  },
});
