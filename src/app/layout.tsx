import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { mergeStyle } from '@/lib/utils';
import { ModeToggle } from '@/components/change-mode';

const mainFont = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={mergeStyle(
          'min-h-screen bg-background font-sans antialiased',
          mainFont.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            <ModeToggle />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
