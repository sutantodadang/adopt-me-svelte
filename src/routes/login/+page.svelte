<script lang="ts">
	import { FloatingLabelInput, Button } from 'flowbite-svelte';
</script>

<div class="w-screen flex justify-center items-center h-screen min-w-max bg-[#FFD460]">
	<section
		class="border-1 border-[#CFB997] bg-[#2D4059] flex flex-col h-screen w-2/5 justify-center items-center rounded-r-2xl shadow-md"
	>
		<h2 class="font-bold text-gray-200 text-2xl">Sign In To Your Adopt-Me Account</h2>
		<div class="flex items-center">
			<img src="/images/cat.png" alt="cat" class="w-20 h-20" />
			<img src="/images/dog.png" alt="cat" class="w-16 h-16" />
		</div>
	</section>
	<aside class="flex flex-col justify-center items-center h-screen w-3/5">
		<form class="flex items-center justify-center flex-col" action="/login" method="POST">
			<div class="grid md:grid-rows-2 md:gap-6 pb-8">
				<FloatingLabelInput
					style="filled"
					id="email"
					name="email"
					type="email"
					label="Email Address"
				/>

				<FloatingLabelInput
					style="filled"
					id="password"
					name="password"
					type="password"
					label="Password"
				/>
			</div>
			<Button type="submit" pill color="dark">Submit</Button>
		</form>

		<div class="flex pt-4">
			<p class="pr-2 text-gray-700">Doesn't have account ?</p>
			<a href="/register">
				<p class="hover:brightness-150 hover:text-gray-900">Register</p>
			</a>
		</div>
	</aside>
</div>
