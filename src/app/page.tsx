import { SocialLinks } from '@/components/socialLinks';

export default function Home() {
	return (
		<main className={'relative h-[100vh]'}>
			<div className={'flex h-[100vh]  flex-col-reverse items-center justify-center  tablet:flex-row'}>
				<div
					className={
						'absolute bottom-0 flex tablet:left-0 tablet:top-[50%] tablet:translate-y-[-25%] tablet:flex-col'
					}>
					<SocialLinks />
				</div>
				<div className={'pl-4 pr-4 tablet:max-w-[50%]'}>
					<h1 className={'laptop:text-3xl mb-6 text-2xl font-bold leading-none'}>
						Software <br /> Developer
					</h1>
					<p className={'break-words text-justify font-monospace text-xs font-thin text-accent2 '}>
						Hello and welcome to my digital portfolio! My name is{' '}
						<span>
							<strong>Ramazan</strong>
						</span>{' '}
						and here, I invite you to explore a collection of my creative endeavors and coding adventures.
						Each project reflects my passion for frontend development. Feel free to wander through my
						virtual showcase and discover the artistry woven into every line of code.
					</p>
				</div>
			</div>
		</main>
	);
}
