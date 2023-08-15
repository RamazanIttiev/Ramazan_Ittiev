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
		<>
			{socialLinks.map(({ title, icon }) => {
				return (
					<a
						key={title}
						href={'#'}
						target={'_blank'}
						className={
							'mb-3 block cursor-pointer p-2 transition last:mb-0 last:pb-0 tablet:hover:translate-x-4'
						}>
						<Image src={icon} alt={title} className={'w-[24px] max-w-max'} />
					</a>
				);
			})}
		</>
	);
};
