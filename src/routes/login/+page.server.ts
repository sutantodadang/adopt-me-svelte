import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		let obj = JSON.parse(JSON.stringify(Object.fromEntries(data)))


		console.log(obj);

		const resp = await fetch(Bun.env.MAIN_URL + '/api/v1/user/login', {
			body: obj,
			method: 'POST'
		});

		console.log(resp);
		const respData = await resp.json();

		console.log(respData);

		// cookies.set('session', email as string);

		return { sucess: true };
	}
} satisfies Actions;
