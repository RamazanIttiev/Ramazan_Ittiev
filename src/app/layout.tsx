import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { twMerge } from 'tailwind-merge';

import { LanguageSwitch } from '@/components/languageSwitch';
import { SocialLinks } from '@/components/socialLinks';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ramazan Ittiev',
	description: 'Welcome to my space!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={twMerge(inter.className, 'bg-mainBg font-sans text-mainText')}>
				<main className={'relative h-[90vh] p-1 tablet:h-screen'}>
					<SocialLinks />
					<div className={'flex h-[100%] items-center justify-center'}>{children}</div>
					<LanguageSwitch />
				</main>
			</body>
		</html>
	);
}
