import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{ts,tsx,mdx}',
		'./src/components/**/*.{ts,tsx,mdx}',
		'./src/ui/**/*.{ts,tsx,mdx}',
		'./src/app/**/*.{ts,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				tablet: '768px',
				laptop: '1280px',
				desktop: '1440px',
			},
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
			monospace: 'monospace',
		},
		fontSize: {
			xs: '0.8rem',
			base: '1rem',
			md: '1.25rem',
			lg: '2rem',
			'2xl': '4rem',
			'3xl': '8rem',
		},
		fontWeight: { thin: '100', normal: '400', bold: '800', extraBold: '900' },
		borderRadius: {
			none: '0',
			sm: '.125rem',
			base: '.25rem',
			lg: '.5rem',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			mainText: '#fff',
			secondaryText: '',
			mainBg: 'rgb(29 29 29)',
			secondaryBg: 'rgb(46 46 46)',
			accent1: '#fafafa',
			accent2: '#888',
			linkColor: '',
			linkColorHover: '',
			buttonColor: '',
			buttonColorHover: '',
		},
	},
	plugins: [],
};
export default config;
