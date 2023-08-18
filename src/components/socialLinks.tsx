import React from 'react';

import Image from 'next/image';

import github from '../../public/svg/github.svg';
import instagram from '../../public/svg/instagram.svg';
import linkedin from '../../public/svg/linkedin.svg';
import telegram from '../../public/svg/telegram.svg';

interface SocialLinks {
	title: string;
	icon: string;
}

const socialLinks: SocialLinks[] = [
	{
		title: 'Instagram',
		icon: instagram,
	},
	{
		title: 'Telegram',
		icon: telegram,
	},
	{
		title: 'GitHub',
		icon: github,
	},
	{
		title: 'Linked In',
		icon: linkedin,
	},
];

export const SocialLinks = () => {
	return (
		<div
			className={
				'absolute bottom-0 right-1/2 flex w-fit tablet:left-4 tablet:top-[50%] tablet:translate-y-[-25%] translate-x-[50%] tablet:translate-x-0 tablet:flex-col'
			}>
			{socialLinks.map(({ title, icon }) => {
				return (
					<a
						key={title}
						href={'#'}
						target={'_blank'}
						className={'group mb-3 block cursor-pointer p-2 last:mb-0 last:pb-0 '}>
						<Image
							src={icon}
							alt={title}
							className={'w-[24px] max-w-max transition group-hover:tablet:translate-x-4'}
						/>
					</a>
				);
			})}
		</div>
	);
};
