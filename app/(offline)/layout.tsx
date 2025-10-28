// app/(offline)/layout.tsx
export default function OfflineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // stripped-down layout for maintenance / not-found
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
