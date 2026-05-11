import { Inter, Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  variable: '--font-noto-bengali',
  adjustFontFallback: false,
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="bn" className="h-full">
      <body
        className={`${inter.variable} ${notoBengali.variable} flex min-h-full flex-col bg-archive-bg text-archive-fg antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
