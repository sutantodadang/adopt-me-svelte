import type { Actions } from './$types';

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();

		const email = data.get('floating_email');

		cookies.set('session', email as string);

		return { sucess: true };
	}
} satisfies Actions;
