import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nova AI Chat',
  description: 'Nova AI Chat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
