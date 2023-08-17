import { SocialLinks } from '@/components/socialLinks';

export default function Home() {
	return (
		<div className={'pl-4 pr-4 tablet:max-w-[50%]'}>
			<h1 className={'mb-6 text-2xl font-bold leading-none laptop:text-3xl'}>
				Software <br /> Developer
			</h1>
			<p className={'break-words text-justify font-monospace text-xs font-thin text-accent2 '}>
				Hello and welcome to my digital portfolio! My name is{' '}
				<span>
					<strong>Ramazan</strong>
				</span>{' '}
				and here, I invite you to explore a collection of my creative endeavors and coding adventures. Each
				project reflects my passion for frontend development. Feel free to wander through my virtual showcase
				and discover the artistry woven into every line of code.
			</p>
		</div>
	);
}
