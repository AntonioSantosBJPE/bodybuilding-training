import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'

export default async function Page() {
	const session = await auth()

	if (!session) {
		return <div>Not authenticated</div>
	}

	return (
		<div className="container flex flex-col gap-4">
			<pre>{JSON.stringify(session, null, 2)}</pre>
			<div>
				<h5>Are you sure you want to sign out?</h5>
				<form
					action={async () => {
						'use server'
						await signOut({
							redirect: true,
							redirectTo: ROUTES.HOME,
						})
					}}
				>
					<Button type="submit">Sign out</Button>
				</form>
			</div>
		</div>
	)
}
