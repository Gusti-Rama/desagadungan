import KeystaticApp from "./keystatic";

export default function Page() {
  return <KeystaticApp />;
}

export function generateStaticParams() {
  return [{ params: [] }];
}
