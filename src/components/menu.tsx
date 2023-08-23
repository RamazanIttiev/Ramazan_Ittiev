'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

import { Hamburger } from '@/components/hamburger';

const menuWrapper = {
	hide: {
		y: '-100%',
		transition: {
			type: 'spring',
			bounce: 0.1,
			when: 'afterChildren',
			staggerChildren: 0.9,
			duration: 0.5,
		},
	},
	show: {
		y: '0%',
		transition: {
			type: 'spring',
			bounce: 0.1,
			when: 'beforeChildren',
			staggerChildren: 0.9,
			duration: 0.5,
		},
	},
};

interface MenuItem {
	href: string;
	label: string;
	active: boolean;
}

export const getRoutes = (pathname: string): MenuItem[] => [
	{
		label: 'Home',
		active: pathname === '/',
		href: '/',
	},
	{
		label: 'Resume',
		active: pathname === '/resume',
		href: '/resume',
	},
];

export const Menu = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(prev => !prev);
	};

	const routes = getRoutes(pathname);

	return (
		<>
			<Hamburger open={open} toggleMenu={toggleMenu} />
			<AnimatePresence>
				{open && (
					<MotionConfig
						transition={{
							type: 'spring',
							bounce: 0.01,
							delay: 0.05,
							duration: 0.5,
						}}>
						<motion.div
							variants={menuWrapper}
							initial="hide"
							animate="show"
							exit="hide"
							className={
								'backdrop-blur flex flex-col items-center justify-center absolute top-0 h-screen w-screen bg-backdrop'
							}>
							<ul className="list-none space-y-6">
								{routes.map(({ label, href, active }) => {
									return (
										<li
											key={label}
											className={`relative ${
												active
													? 'before:w-4 before:h-4 before:rounded-lg before:absolute before:top-[50%] before:left-[-2rem] before:bg-accent1 before:translate-y-[-50%]'
													: ''
											}`}>
											<Link
												href={href}
												className={`peer relative block text-[3rem] laptop:text-[4rem] uppercase p-4 leading-none transition z-10`}
												target={'_self'}>
												{label}
											</Link>
											<span
												className={`hidden tablet:block text-transparent peer-hover:laptop:text-accent2 peer-hover:laptop:text-opacity-30 duration-300 transition 
													absolute text-[10rem] laptop:text-[11rem] top-[-50%] left-[-50%] leading-none -z-10`}>
												{label}
											</span>
										</li>
									);
								})}
							</ul>
						</motion.div>
					</MotionConfig>
				)}
			</AnimatePresence>
		</>
	);
};
