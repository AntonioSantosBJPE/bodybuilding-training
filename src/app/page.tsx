import LoginForm from '@/components/authentication-02'
import { ModeToggle } from '@/components/theme-toogle'

export default function Home() {
	return (
		<section className="w-full max-w-7xl mx-auto min-h-screen flex flex-col  gap-2 max-xl:px-6 px-2  ">
			<header className="w-full flex justify-end py-2">
				<ModeToggle />
			</header>
			<div className="w-full h-full flex-1 flex justify-center items-center">
				<LoginForm />
			</div>
		</section>
	)
}
