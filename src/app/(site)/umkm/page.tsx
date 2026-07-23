import { reader } from "@/lib/reader";
import UmkmCatalog from "@/components/UmkmCatalog";

/**
 * UMKM Catalog Page — Grid listing of village small businesses
 * with search filtering, photo placeholders, and detail page links.
 */
export default async function UmkmPage() {
  const umkmList = await reader.collections.umkm.all();

  const formattedUmkm = umkmList.map((item) => ({
    slug: item.slug,
    name: item.entry.name,
    image: item.entry.image,
    whatsapp: item.entry.whatsapp,
  }));

  return (
    <>
      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 py-16 sm:py-20">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-emerald-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-sm ring-1 ring-white/20">
            Katalog UMKM
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            UMKM Desa Gadungan
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-100/80">
            Dukung pengusaha lokal Desa Gadungan, Kecamatan Wedi, Kabupaten
            Klaten. Temukan produk dan jasa berkualitas dari warga desa.
          </p>
        </div>
      </section>

      {/* ============================================
          SEARCH & CATALOG
          ============================================ */}
      <UmkmCatalog umkmData={formattedUmkm} />
    </>
  );
}
