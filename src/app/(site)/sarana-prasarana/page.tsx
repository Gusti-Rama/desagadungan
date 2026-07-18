import { facilities } from "@/data/facilities";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Sarana & Prasarana | Desa Gadungan",
  description: "Fasilitas publik yang tersedia untuk mendukung kegiatan masyarakat Desa Gadungan.",
};

export default function SaranaPrasaranaPage() {
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((fac, index) => (
            <ScrollReveal key={fac.id} variant="fade-up" delay={index * 100}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-emerald-100">
                {/* Image Placeholder */}
                <div className="relative flex aspect-video w-full flex-col items-center justify-center bg-gray-50 overflow-hidden">
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
                    Foto {fac.title}
                  </span>
                </div>

                {/* Content Area */}
                <div className="relative flex flex-1 flex-col p-8 pt-10">
                  {/* Floating Icon */}
                  <div className="absolute -top-7 right-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-7 w-7"
                    >
                      {fac.icon}
                    </svg>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{fac.title}</h3>
                  <p className="flex-1 text-gray-600">{fac.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
