// The Keystatic admin UI only works in development mode (npm run dev).
// In production, the Secretary uses Keystatic Cloud (https://keystatic.cloud).
//
// This page exists so the static export doesn't break.
// When running `npm run dev`, access /keystatic to use the local admin panel.
export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
