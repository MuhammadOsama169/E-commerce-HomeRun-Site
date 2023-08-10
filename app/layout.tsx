import { Navbar } from './components/layout/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import ProviderAuth from './components/AuthProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HomeRun',
  description:
    'Unleash boundless wanderlust with handcrafted destination guides by beloved creators on our enchanting e-commerce site.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ProviderAuth>
          <Navbar />
          {children}
        </ProviderAuth>
      </body>
    </html>
  );
}
