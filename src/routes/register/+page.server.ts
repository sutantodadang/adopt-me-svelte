import { error } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		let jsonData = Object.fromEntries(data.entries())

		const newData = JSON.stringify(jsonData)

		console.log(newData)

		console.log(JSON.parse(newData))

		const result = await fetch(`${Bun.env.MAIN_URL}/api/v1/user/register`,{
			body:JSON.parse(newData),
			method:"POST"
		})

		if (result.status != 200) {
			console.log(result)

			throw error(500,result.statusText)
		
		}

		
		// const jsonData = await result.json()

		// console.log(jsonData)


	
		return { sucess: true };
	}
} satisfies Actions;
