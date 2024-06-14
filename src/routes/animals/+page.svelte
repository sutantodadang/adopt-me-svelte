<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { PhoneSolid } from 'flowbite-svelte-icons';
	const data = Array.from({ length: 20 });
</script>

<nav class="w-screen sticky top-0 bg-[#FFD460] h-12 flex justify-between items-center px-7">
	<aside class="flex items-center">
		<a href="/"><p class="text-gray-700 font-semibold">Adopt-Me</p></a>
		<img src="/images/cat.png" alt="cat" class="w-14 h-14" />
		<img src="/images/dog.png" alt="dog" class="w-10 h-10" />
	</aside>
</nav>
<div class="p-3 flex justify-center items-center min-h-screen h-full w-screen bg-[#2D4059]">
	<section class="grid grid-cols-8 gap-3 max-md:grid-cols-4">
		{#each data as d}
			<div
				class="h-96 w-56 bg-[#FFD460] rounded-xl flex flex-col items-center justify-center p-2 shadow-lg"
			>
				<img src="/images/cat2.png" width="100px" alt="cat" class="shadow rounded-2xl pb-2" />

				<h3 class="text-lg font-semibold text-gray-700 pb-2">Kucing Molly {d}</h3>

				<p class="text-gray-700 pb-2">Persia</p>

				<p class="text-center text-sm text-gray-700 pb-2">
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora expedita ducimus.' -
					Owner
				</p>

				<p class="text-gray-700">&#127968 Malang</p>
				<Button pill size="md"><PhoneSolid size="lg" class="pr-2" />Contact</Button>
			</div>
		{/each}
	</section>
</div>
