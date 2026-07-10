import Link from "next/link";

/**
 * Footer — Site footer with village address, contact placeholders,
 * and a subtle admin panel link for the Secretary.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="mt-auto border-t border-gray-100 bg-gray-50">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Village Info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-5 w-5"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a.752.752 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Desa Gadungan</h3>
                <p className="text-sm text-gray-500">Wedi, Klaten</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Website resmi Desa Gadungan, Kecamatan Wedi, Kabupaten Klaten,
              Jawa Tengah, Indonesia.
            </p>
          </div>

          {/* Alamat */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Alamat
            </h4>
            <address className="mt-4 space-y-2 not-italic text-sm text-gray-600">
              <p>Desa Gadungan</p>
              <p>Kecamatan Wedi, Kabupaten Klaten</p>
              <p>Jawa Tengah, Indonesia</p>
            </address>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Kontak
            </h4>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-emerald-600">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                </svg>
                {/* TODO: Ganti dengan nomor telepon asli */}
                (0272) xxx-xxxx
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-emerald-600">
                  <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                  <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                </svg>
                {/* TODO: Ganti dengan email asli */}
                desa.gadungan@example.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-100/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Desa Gadungan. Hak Cipta Dilindungi.
          </p>
          {/* Subtle admin link for the village secretary */}
          <Link
            href="https://keystatic.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 transition-colors hover:text-emerald-600"
          >
            Panel Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
