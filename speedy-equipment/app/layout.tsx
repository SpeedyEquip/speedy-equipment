import './globals.css'

export const metadata = {
  title: 'Speedy Equipment',
  description: 'A small Next.js + Tailwind starter for Speedy Equipment',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
