// Generate an empty static params list — no keystatic pages need to be pre-rendered
export function generateStaticParams() {
  return [{ params: [] }];
}

// The Keystatic admin panel is only available in development mode.
// In production, use Keystatic Cloud at https://keystatic.cloud
export default function KeystaticPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Panel Admin</h1>
        <p className="mt-2 text-gray-600">
          Panel admin hanya tersedia dalam mode pengembangan.
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Untuk mengelola berita, kunjungi{" "}
          <a
            href="https://keystatic.cloud"
            className="text-emerald-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Keystatic Cloud
          </a>
        </p>
      </div>
    </div>
  );
}
