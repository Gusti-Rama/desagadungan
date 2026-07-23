import type { Metadata } from "next";
import { reader } from "@/lib/reader";
import Demographics from "@/components/Demographics";
import ScrollReveal from "@/components/ScrollReveal";
import ZoomableImage from "@/components/ZoomableImage";

export const metadata: Metadata = {
  title: "Profil Desa",
  description:
    "Profil lengkap Desa Gadungan — statistik penduduk, informasi wilayah, dan lokasi desa di Kecamatan Wedi, Kabupaten Klaten.",
};

/**
 * Profil Desa Page
 */
export default async function ProfilDesaPage() {
  const statistikData = await reader.singletons.statistik.read();
  // Fallback to default values if Keystatic is empty
  const defaultData = {
    jumlahPenduduk: 0,
    kepalaKeluarga: 0,
    lakiLaki: 0,
    perempuan: 0,
    jumlahRt: 0,
    jumlahRw: 0,
    luasWilayah: "-",
    umur: [],
    perkawinan: [],
    agama: [],
    pendidikan: [],
    pekerjaan: [],
    darah: [],
  };

  const data = statistikData || defaultData;

  return (
    <>
      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-sm ring-1 ring-white/20">
            Tentang Kami
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Profil Desa Gadungan
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-100/80">
            Mengenal lebih dekat Desa Gadungan, Kecamatan Wedi, Kabupaten
            Klaten, Jawa Tengah.
          </p>
        </div>
      </section>

      {/* ============================================
          STATISTIK DESA
          ============================================ */}
      <section
        id="statistik-desa"
        className="border-t border-gray-100 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Data & Statistik
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Statistik Desa
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Data demografis dan informasi umum Desa Gadungan
              </p>
            </div>
          </ScrollReveal>

          {/* Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Stat Card: Jumlah Penduduk */}
            <ScrollReveal variant="zoom" delay={0}>
              <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:ring-emerald-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121ZM19.573 15.905a.563.563 0 0 0 .373.486l.115.04c.65.22 1.174.645 1.433 1.245a7.066 7.066 0 0 0-.495-1.633.563.563 0 0 0-.486-.373l-.121.01a8.287 8.287 0 0 0-.82.225Z" />
                  </svg>
                </div>
                {/* TODO: Ganti dengan data asli */}
                <p className="mt-4 text-3xl font-bold text-gray-900">{data.jumlahPenduduk.toLocaleString("id-ID")}</p>
                <p className="mt-1 text-sm text-gray-500">Jumlah Penduduk</p>
              </div>
            </ScrollReveal>

            {/* Stat Card: Jumlah RT/RW */}
            <ScrollReveal variant="zoom" delay={100}>
              <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:ring-emerald-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a.752.752 0 0 0 .091-.086L12 5.432Z" />
                  </svg>
                </div>
                {/* TODO: Ganti dengan data asli */}
                <p className="mt-4 text-3xl font-bold text-gray-900">{data.jumlahRt} / {data.jumlahRw}</p>
                <p className="mt-1 text-sm text-gray-500">Jumlah RT / RW</p>
              </div>
            </ScrollReveal>

            {/* Stat Card: Luas Wilayah */}
            <ScrollReveal variant="zoom" delay={200}>
              <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:ring-emerald-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* TODO: Ganti dengan data asli */}
                <p className="mt-4 text-3xl font-bold text-gray-900">{data.luasWilayah}</p>
                <p className="mt-1 text-sm text-gray-500">Luas Wilayah</p>
              </div>
            </ScrollReveal>

            {/* Stat Card: Mata Pencaharian */}
            <ScrollReveal variant="zoom" delay={300}>
              <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:ring-emerald-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5-1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                  </svg>
                </div>
                {/* TODO: Ganti dengan data asli */}
                <p className="mt-4 text-xl font-bold text-gray-900">{data.pekerjaan && data.pekerjaan.length > 0 ? [...data.pekerjaan].sort((a, b) => b.value - a.value)[0].label : "-"}</p>
                <p className="mt-1 text-sm text-gray-500">Mata Pencaharian Utama</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          STATISTIK DEMOGRAFI WARGA
          ============================================ */}
      <Demographics data={data as any} />

      {/* ============================================
          VISI & MISI
          ============================================ */}
      <section id="visi-misi" className="bg-emerald-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800">
                Arah Tujuan
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Visi & Misi
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Arah dan tujuan pembangunan Desa Gadungan
              </p>
            </div>
          </ScrollReveal>

          {/* Visi */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="mb-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-emerald-100 transition-all hover:shadow-md sm:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
              </div>
              <p className="text-lg leading-relaxed italic text-gray-700">
                &quot;Terwujudnya pelayanan publik yang transparan, akuntabilitas menuju masyarakat desa Gadungan yang maju, mandiri dan berdaya saing.&quot;
              </p>
            </div>
          </ScrollReveal>

          {/* Misi */}
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="rounded-3xl bg-emerald-600 p-8 text-white shadow-md ring-1 ring-emerald-500 sm:p-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Misi</h3>
              </div>

              <ol className="space-y-6 text-emerald-50">
                {/* Misi 1 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">1</span>
                  <span>Meningkatkan sumber daya manusia yang berkualitas dan kwantitas yang agamis yang nyaman dengan memakmurkan tempat peribatan di Desa Gadungan.</span>
                </li>

                {/* Misi 2 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">2</span>
                  <span>Memprogramkan peningkatan kwalitas Sumber Daya Manusia.</span>
                </li>

                {/* Misi 3 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">3</span>
                  <span>Memaksimalkan program pemerintah bidang pendidikan sehingga terwujud masyarakat yang cerdas.</span>
                </li>

                {/* Misi 4 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">4</span>
                  <div>
                    <span>Pemberdayaan potensi yang ada ditengah masyarakat Desa Gadungan.</span>
                    <ul className="mt-2 space-y-1.5 pl-2 text-sm text-emerald-100">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">a.</span>
                        <span>Pemberdayaan SDM terutama perempuan dan kerakyatan.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">b.</span>
                        <span>Pemberdayaan SDA dengan mengedepankan pemberdayaan ekonomi kerakyatan.</span>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Misi 5 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">5</span>
                  <div>
                    <span>Mengoptimalkan penyelenggaraan pemerintah desa Gadungan meliputi:</span>
                    <ul className="mt-2 space-y-1.5 pl-2 text-sm text-emerald-100">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">a.</span>
                        <span>Pemerintah yang transparan, adil, cepat, tepat, dan benar.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">b.</span>
                        <span>Pelaksanaan pembangunan Desa Gadungan yang berkesinambungan dan mengedepankan masyarakat dengan gotong royong.</span>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Misi 6 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">6</span>
                  <span>Melanjutkan program-program pemerintah Desa Gadungan sebelumnya sebagaimana yang tercantum pada data dokumen RPJMDes Desa Gadungan.</span>
                </li>

                {/* Misi 7 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">7</span>
                  <div>
                    <span>Menciptakan kondisi masyarakat Desa Gadungan yang aman, tertib, rukun dalam bermasyarakat dengan mengedepankan prinsip-prinsip:</span>
                    <ul className="mt-2 space-y-1.5 pl-2 text-sm text-emerald-100">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">a.</span>
                        <span>Saling bersinergi dengan bergotong royong.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">b.</span>
                        <span>Menjunjung prinsip transparansi pemerintah desa Gadungan.</span>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Misi 8 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">8</span>
                  <div>
                    <span>Optimalisasi penyelenggaraan pemerintah Desa Gadungan yang meliputi:</span>
                    <ul className="mt-2 space-y-1.5 pl-2 text-sm text-emerald-100">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">a.</span>
                        <span>Pemerintahan yang akuntabilitas dan keterbukaan.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">b.</span>
                        <span>Pelayanan kepada masyarakat yang prima, cepat, benar pada sasaran tanpa bayar.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">c.</span>
                        <span>Pelaksanaan pembangunan yang berkesinambungan dengan mengedepankan semangat gotong royong.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">d.</span>
                        <span>Mewujudkan masyarakat yang berkepribadian dalam kebudayaan.</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          STRUKTUR ORGANISASI
          ============================================ */}
      <section id="struktur-organisasi" className="border-t border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Pemerintahan
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Struktur Organisasi
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Bagan Struktur Organisasi Pemerintah Desa Gadungan
              </p>
            </div>
          </ScrollReveal>

          {/* Image Container */}
          <ScrollReveal variant="zoom" delay={100}>
            <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gray-50 p-4 shadow-sm ring-1 ring-gray-200/60 sm:p-8 transition-all hover:shadow-md">
              <ZoomableImage
                src="/images/BaganStrukturOrganisasiPemerintahDesaGadungan.png"
                alt="Bagan Struktur Organisasi Pemerintah Desa Gadungan"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          DATA DESA
          ============================================ */}
      <section id="data-desa" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Informasi Umum
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Data Desa
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Informasi umum dan kontak resmi Desa Gadungan
              </p>
            </div>
          </ScrollReveal>

          {/* Data Table */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/60">
              {/* Nama Desa */}
              <div className="flex items-center gap-5 border-b border-gray-100 px-6 py-5 sm:px-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM6 12.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM10.25 6a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM10 9.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM10.75 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21V4.5a.75.75 0 0 0-.75-.75h-3.75a.75.75 0 0 0-.75.75v2.25ZM18 9.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM18.75 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM18 15.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-500">Nama Desa</p>
                  <p className="mt-0.5 text-base font-bold text-gray-900">GADUNGAN</p>
                </div>
              </div>

              {/* No. Telephone */}
              <div className="flex items-center gap-5 border-b border-gray-100 px-6 py-5 sm:px-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-500">No. Telephone</p>
                  <p className="mt-0.5 text-base font-bold text-gray-900">08813778557</p>
                </div>
              </div>

              {/* Kode Pos */}
              <div className="flex items-center gap-5 border-b border-gray-100 px-6 py-5 sm:px-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-500">Kode Pos</p>
                  <p className="mt-0.5 text-base font-bold text-gray-900">57461</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5 border-b border-gray-100 px-6 py-5 sm:px-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-500">Email</p>
                  <p className="mt-0.5 text-base font-bold text-gray-900">desagadungan01@gmail.com</p>
                </div>
              </div>

              {/* Alamat */}
              <div className="flex items-center gap-5 px-6 py-5 sm:px-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-500">Alamat</p>
                  <p className="mt-0.5 text-base font-bold text-gray-900">Gadungan, Gadungan, Wedi, Klaten</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </>
  );
}
