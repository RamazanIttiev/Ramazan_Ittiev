'use client';

import React, { useState } from 'react';

import Image, { StaticImageData } from 'next/image';

import rusIcon from '../../public/png/russia.png';
import engIcon from '../../public/png/united-kingdom.png';

type Languages = 'eng' | 'rus';

export const LanguageSwitch = () => {
	const [activeLang, setActiveLang] = useState<Languages>('eng');

	const handleLanguage = (lang: Languages) => {
		setActiveLang(lang);
	};

	return (
		<button
			className={'absolute left-5 top-4 w-6 transition-all duration-300 hover:rotate-180 '}
			onClick={() => handleLanguage(activeLang === 'eng' ? 'rus' : 'eng')}>
			<Image
				src={activeLang === 'eng' ? engIcon : rusIcon}
				key={activeLang}
				alt={activeLang}
				// for mobile click rotation
				className={'transition-all duration-300 hover:rotate-180'}
			/>
		</button>
	);
};
