import dynamic from "next/dynamic";
// Since client components get prerenderd on server as well hence importing
// the excalidraw stuff dynamically with ssr false

const ExcalidrawWrapper = dynamic(
  async () => (await import("./components/Whiteboard")).default,
  {
    ssr: false,
  },
);
export const runtime = "edge";
export default function Page() {
  return (
    <ExcalidrawWrapper />
  );
}