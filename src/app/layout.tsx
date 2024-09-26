import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { mergeStyle } from '@/lib/utils';
import { ModeToggle } from '@/components/change-mode';
import { NavigationMenuALX } from '@/components/patterns/menu-pattern';

const mainFont = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'ALX inc.',
  description: 'Created by ALX Inc.',
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
          <header className="w-full flex justify-between items-center py-4 px-4">
            <div className="flex-1 flex justify-center">
              <NavigationMenuALX />
            </div>

            <div className="flex-initial">
              <ModeToggle />
            </div>
          </header>
          <section>
            <main className="">{children}</main>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
