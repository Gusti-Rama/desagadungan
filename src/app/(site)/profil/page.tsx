import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Profil Desa",
  description:
    "Profil Desa Gadungan — informasi umum, kontak, dan alamat resmi Desa Gadungan, Kecamatan Wedi, Kabupaten Klaten.",
};

/**
 * Profil Desa Page — General village profile & contact information.
 *
 * All data here is placeholder — edit the values directly in this file.
 * Detailed population statistics now live at /data-penduduk, and the
 * various maps live under /peta/*.
 */
export default function ProfilDesaPage() {
  const profil = {
    nama: "GADUNGAN",
    telepon: "08813778557",
    kodePos: "57461",
    email: "desagadungan01@gmail.com",
    alamat: "Gadungan, Gadungan, Wedi, Klaten",
  };

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
          INFORMASI DESA
          ============================================ */}
      <section
        id="informasi-desa"
        className="border-t border-gray-100 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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

          <ScrollReveal variant="zoom">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm ring-1 ring-gray-200/60">
              <dl className="divide-y divide-gray-100">
                {/* Nama Desa */}
                <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
                  <dt className="flex items-center gap-3 sm:w-56 sm:shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Nama Desa</span>
                  </dt>
                  <dd className="text-base font-medium text-gray-700">{profil.nama}</dd>
                </div>

                {/* No Telephone */}
                <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
                  <dt className="flex items-center gap-3 sm:w-56 sm:shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">No. Telephone</span>
                  </dt>
                  <dd className="text-base font-medium text-gray-700">{profil.telepon}</dd>
                </div>

                {/* Kode Pos */}
                <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
                  <dt className="flex items-center gap-3 sm:w-56 sm:shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Kode Pos</span>
                  </dt>
                  <dd className="text-base font-medium text-gray-700">{profil.kodePos}</dd>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
                  <dt className="flex items-center gap-3 sm:w-56 sm:shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Email</span>
                  </dt>
                  <dd className="text-base font-medium text-gray-700">{profil.email}</dd>
                </div>

                {/* Alamat */}
                <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
                  <dt className="flex items-center gap-3 sm:w-56 sm:shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Alamat</span>
                  </dt>
                  <dd className="text-base font-medium text-gray-700">{profil.alamat}</dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>

          <p className="mt-6 text-center text-sm text-gray-400">
            Data di atas bersifat sementara dan dapat diperbarui melalui panel admin.
          </p>
        </div>
      </section>

      {/* ============================================
          VISI & MISI SECTION
          ============================================ */}
      <section id="visi-misi" className="border-t border-gray-100 bg-emerald-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800">
                Arah Tujuan
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Visi & Misi
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Mewujudkan Desa Gadungan yang mandiri, sejahtera, dan berbudaya
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Visi */}
            <ScrollReveal variant="fade-left" delay={100}>
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-emerald-100 transition-all hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Visi</h3>
              <p className="text-lg leading-relaxed italic text-gray-700">
                &quot;Terwujudnya pelayanan publik yang transparan, akuntabilitas menuju masyarakat desa Gadungan yang maju, mandiri dan berdaya saing.&quot;
              </p>
            </div>
            </ScrollReveal>

            {/* Misi */}
            <ScrollReveal variant="fade-right" delay={200}>
  <div className="rounded-3xl bg-emerald-600 p-8 text-white shadow-md ring-1 ring-emerald-500 transition-all hover:shadow-lg">
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    </div>
    <h3 className="mb-6 text-2xl font-bold">Misi</h3>
    <ul className="space-y-4 text-emerald-50">
      
      {/* Poin 1 */}
      <li className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">1</span>
        <span>Meningkatkan sumber daya manusia yang berkualitas dan kwantitas yang agamis yang nyaman dengan memakmurkan tempat peribatan di Desa Gadungan.</span>
      </li>

      {/* Poin 2 */}
      <li className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">2</span>
        <span>Memprogramkan peningkatan kwalitas Sumber Daya Manusia.</span>
      </li>

      {/* Poin 3 */}
      <li className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">3</span>
        <span>Memaksimalkan program pemerintah bidang pendidikan sehingga terwujud masyarakat yang cerdas.</span>
      </li>

      {/* Poin 4 */}
      <li className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">4</span>
        <div className="flex-1">
          <span>Pemberdayaan potensi yang ada ditengah masyarakat Desa Gadungan.</span>
          <ul className="mt-2 list-[lower-alpha] space-y-1 pl-5">
            <li>Pemberdayaan SDM terutama perempuan dan kerakyatan.</li>
            <li>Pemberdayaan SDA dengan mengedepankan pemberdayaan ekonomi kerakyatan.</li>
          </ul>
        </div>
      </li>

      {/* Poin 5 */}
      <li className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">5</span>
        <div className="flex-1">
          <span>Mengoptimalkan penyelenggaraan pemerintah desa Gadungan meliputi:</span>
          <ul className="mt-2 list-[lower-alpha] space-y-1 pl-5">
            <li>Pemerintah yang transparan, adil, cepat, tepat, dan benar.</li>
            <li>Pelaksanaan pembangunan Desa Gadungan yang berkesinambungan dan mengedepankan masyarakat dengan gotong royong.</li>
          </ul>
        </div>
      </li>

      {/* Poin 6 */}
      <li className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">6</span>
        <span>Melanjutkan program-program pemerintah Desa Gadungan sebelumnya sebagaimana yang tercantum pada data dokumen RPJMDes Desa Gadungan.</span>
      </li>

      {/* Poin 7 */}
      <li className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">7</span>
        <div className="flex-1">
          <span>Menciptakan kondisi masyarakat Desa Gadungan yang aman, tertib, rukun dalam bermasyarakat dengan mengedepankan prinsip-prinsip:</span>
          <ul className="mt-2 list-[lower-alpha] space-y-1 pl-5">
            <li>Saling bersinergi dengan bergotong royong.</li>
            <li>Menjunjung prinsip transparansi pemerintah desa Gadungan.</li>
          </ul>
        </div>
      </li>

      {/* Poin 8 */}
      <li className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">8</span>
        <div className="flex-1">
          <span>Optimalisasi penyelenggaraan pemerintah Desa Gadungan yang meliputi:</span>
          <ul className="mt-2 list-[lower-alpha] space-y-1 pl-5">
            <li>Pemerintahan yang akuntabilitas dan keterbukaan.</li>
            <li>Pelayanan kepada masyarakat yang prima, cepat, benar pada sasaran tanpa bayar.</li>
            <li>Pelaksanaan pembangunan yang berkesinambungan dengan mengedepankan semangat gotong royong.</li>
            <li>Mewujudkan masyarakat yang berkepribadian dalam kebudayaan.</li>
          </ul>
        </div>
      </li>

    </ul>
  </div>
</ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
