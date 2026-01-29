export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-6">
      {children}
    </div>
  );
}
