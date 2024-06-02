import Leftsidebar from "@/components/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="flex relative bg-black-3">
        <Leftsidebar />
        {children}
        <div className="text-white-1">right sidebar</div>
      </main>
    </div>
  );
}
