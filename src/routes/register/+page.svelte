<script lang="ts">
	import { FloatingLabelInput, Button } from 'flowbite-svelte';
</script>

<div class="w-screen flex justify-between items-center h-screen min-w-max bg-[#2D4059]">
	<section
		class="border-1 border-[#CFB997] bg-[#FFD460] flex flex-col h-screen w-2/5 justify-center items-center rounded-r-2xl shadow-md"
	>
		<h2 class="font-bold text-black-200 text-3xl">Register To Get Adopt-Me Account</h2>
		<div class="flex items-center">
			<img src="/images/cat.png" alt="cat" class="w-20 h-20" />
			<img src="/images/dog.png" alt="cat" class="w-16 h-16" />
		</div>
	</section>
	<aside class="flex flex-col justify-center items-center h-screen w-3/5">
		<form class="flex items-center justify-center flex-col" action="/register" method="post">
			<div class="grid md:grid-cols-2 md:gap-6 pb-8">
				<FloatingLabelInput
					style="filled"
					id="email"
					name="email"
					type="email"
					label="Email Address"
				/>
				<FloatingLabelInput
					style="filled"
					id="fullname"
					name="fullname"
					type="text"
					label="Fullname"
				/>
				<FloatingLabelInput
					style="filled"
					id="password"
					name="password"
					type="password"
					label="Password"
				/>
				<FloatingLabelInput
					style="filled"
					id="password_confirm"
					name="password_confirm"
					type="password"
					label="Confirm Password"
				/>
				<FloatingLabelInput
					style="filled"
					id="address"
					name="address"
					type="text"
					label="Address"
				/>
				<FloatingLabelInput
					style="filled"
					id="phone"
					name="phone"
					type="text"
					label="Phone Number"
				/>
				<FloatingLabelInput style="filled" id="city" name="city" type="text" label="City" />
			</div>
			<Button pill color="yellow" type="submit">Submit</Button>
		</form>

		<div class="flex pt-2">
			<p class="pr-2 text-gray-200">Already have account ?</p>
			<a href="/login/">
				<p class="hover:brightness-150 hover:text-[#567189]">Login</p>
			</a>
		</div>
	</aside>
</div>
