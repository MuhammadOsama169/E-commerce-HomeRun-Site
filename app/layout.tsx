import { Navbar } from './components/layout/Navbar';
import './styles/globals.css';
import { Inter } from 'next/font/google';
import ProviderAuth from './components/AuthProvider';
const inter = Inter({ subsets: ['latin'] });

import { store } from './store';
import { Providers } from './Provider';

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
        <Providers>
          <ProviderAuth>
            <Navbar />
            {children}
          </ProviderAuth>
        </Providers>
      </body>
    </html>
  );
}
