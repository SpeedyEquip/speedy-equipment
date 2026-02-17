import "./globals.css";

export const metadata = {
  title: "Speedy Equipment | Performance Automotive Equipment",
  description: "National automotive equipment broker"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
