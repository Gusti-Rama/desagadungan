import { reader } from "@/lib/reader";
import ScrollReveal from "@/components/ScrollReveal";
import ZoomableImage from "@/components/ZoomableImage";

export const metadata = {
  title: "Sarana & Prasarana | Desa Gadungan",
  description: "Fasilitas publik yang tersedia untuk mendukung kegiatan masyarakat Desa Gadungan.",
};

export default async function SaranaPrasaranaPage() {
  const fasilitasSlugs = await reader.collections.fasilitas.list();
  const fasilitasData = await Promise.all(
    fasilitasSlugs.map(async (slug) => {
      const entry = await reader.collections.fasilitas.read(slug);
      return entry ? { slug, ...entry } : null;
    })
  );

  const formattedFacilities = fasilitasData
    .filter((f): f is NonNullable<typeof f> => f !== null)
    .map((fac) => ({
      slug: fac.slug,
      name: fac.name,
      deskripsi: fac.deskripsi,
      foto: fac.foto,
      galeri: (fac.galeri || []).filter((g): g is string => g !== null),
    }));

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <ScrollReveal variant="fade-up">
          <div className="mb-16 max-w-3xl">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Fasilitas Desa
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Sarana & Prasarana
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Fasilitas publik yang tersedia untuk mendukung kegiatan dan kesejahteraan masyarakat Desa Gadungan.
            </p>
          </div>
        </ScrollReveal>

        {/* Facilities Grid */}
        {formattedFacilities.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {formattedFacilities.map((fac, index) => (
              <ScrollReveal key={fac.slug} variant="fade-up" delay={index * 100}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-emerald-100">
                  {/* Image Placeholder */}
                  <div className="relative flex aspect-video w-full flex-col items-center justify-center bg-gray-50 overflow-hidden">
                    {fac.foto ? (
                      <ZoomableImage
                        src={fac.foto}
                        alt={fac.name}
                        gallery={fac.galeri}
                        wrapperClassName="group relative cursor-pointer overflow-hidden h-full w-full"
                        imageClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="mb-2 h-10 w-10 text-gray-300 transition-transform duration-300 group-hover:scale-110"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                        <span className="text-sm font-medium text-gray-400">
                          Tanpa Foto
                        </span>
                      </>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="relative flex flex-1 flex-col p-8 pt-8">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{fac.name}</h3>
                    <p className="flex-1 text-gray-600">{fac.deskripsi}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-200 bg-gray-50/50 py-24 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="mb-4 h-16 w-16 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700">
              Belum Ada Sarana & Prasarana
            </h3>
            <p className="mt-3 max-w-md text-gray-500">
              Data sarana dan prasarana desa akan segera diperbarui melalui panel administrasi.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
