import { ThemeProvider } from 'next-themes';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { mergeStyle } from '@/lib/utils';
import { ModeToggle } from '@/components/change-mode';
import { NavigationMenuALX } from '@/components/patterns/menu-pattern';
import { TypographyPattern } from '@/components/patterns/typography-pattern';
import Link from 'next/link';
import { ThemeEffect } from '@/components/patterns/theme-effect-pattern';

const mainFont = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
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
          'bg-background font-sans antialiased flex flex-col min-h-screen relative',
          mainFont.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ThemeEffect />

          <header className="w-full flex justify-between items-center py-4 px-4 ">
            <div className="flex-1 flex justify-center">
              <NavigationMenuALX />
            </div>

            <div className="flex-initial">
              <ModeToggle />
            </div>
          </header>

          <main className=" flex flex-col ">{children}</main>

          <footer className="w-full my-4 p-2">
            <div className="flex justify-center items-center">
              <TypographyPattern
                text={
                  <>
                    Don&apos;t just copy, get inspired{' '}
                    <Link target="_blank" href="https://github.com/upALX/alx">
                      <span className="text-muted-foreground hover:bg-muted">
                        {' '}
                        here.{' '}
                      </span>{' '}
                      <span className="underline">
                        Give and keep looking at the stars{' '}
                      </span>{' '}
                      ✨
                    </Link>
                  </>
                }
                type="cite"
              />
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
