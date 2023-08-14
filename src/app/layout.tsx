import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { twMerge } from 'tailwind-merge';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ramazan Ittiev',
	description: 'Welcome to my space!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={twMerge(inter.className, 'font-sans')}>{children}</body>
		</html>
	);
}
