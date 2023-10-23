import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import { cn } from './libs/utils';
import AuthProvider from './providers/AuthProvider';
import ActiveStatus from './components/ActiveStatus';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spectra Chat - Hang out anytime, anywhere',
  description: 'Spectra Chat is a real-time messaging web application.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'antialiased')}>
        <AuthProvider>
          <Toaster />
          <ActiveStatus />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
