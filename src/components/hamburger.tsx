interface Props {
	open: boolean;
	toggleMenu: () => void;
}

export const Hamburger = ({ open, toggleMenu }: Props) => {
	return (
		<button className={'absolute right-5 top-4 cursor-pointer group z-10'} onClick={toggleMenu}>
			<div
				className={`flex h-[20px] w-[20px] origin-center transform flex-col justify-between transition-all duration-300 ${
					open && 'rotate-[45deg]'
				}`}>
				<div
					className={`bg-accent1 rounded h-[1px] w-1/2 origin-right transform transition-all delay-75 duration-300 ${
						open && 'rotate-[-90deg]'
					} `}></div>
				<div
					className={
						'bg-accent1 rounded h-[1px] group-hover:laptop:shadow-accent1 transition-shadow group-hover:laptop:shadow-[0_0_22px_2px_rgba(250,250,250,0.3)]'
					}></div>
				<div
					className={`bg-accent1 rounded h-[1px] w-1/2 origin-left transform self-end transition-all delay-75 duration-300 ${
						open && 'rotate-[-90deg]'
					} `}></div>
			</div>
		</button>
	);
};
