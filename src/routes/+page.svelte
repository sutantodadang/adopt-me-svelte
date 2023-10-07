<script>
	export const year = new Date().getFullYear();
</script>

<main class="container w-screen h-full">
	<header class="bg-[#2D4059] w-screen h-2/5">
		<nav class="w-full sticky top-0 bg-[#FFD460] h-12 flex justify-between items-center px-7">
			<aside class="flex items-center">
				<p class="text-gray-700 font-semibold">Adopt-Me</p>
				<img src="/images/cat.png" alt="cat" class="w-14 h-14" />
				<img src="/images/dog.png" alt="dog" class="w-10 h-10" />
			</aside>
			<aside>
				<!-- { -->
				<!--   $user.get().isLoggedIn ? ( -->
				<!--     <div class="avatar"> -->
				<!--       <div class="w-14 rounded-full"> -->
				<!--         <a href="/user/profile/"> -->
				<!--           <img src="/images/cat.png" /> -->
				<!--         </a> -->
				<!--       </div> -->
				<!--     </div> -->
				<!--   ) : ( -->
				<a href="/login/">
					<!-- <MyButton text="Login" style="btn-ghost btn-sm text-gray-700" /> -->
					<button>login</button>
				</a>
				<!-- ) -->
				<!-- } -->
			</aside>
		</nav>
		<section class="flex justify-between items-center px-10">
			<div class="flex flex-col">
				<p class="font-bold text-2xl text-gray-200">Adopt Me</p>
				<p class="text-lg text-gray-200">
					Animal adoption is one of the most effective ways to reduce the number of animals in
					shelters and save their lives. Our website plays an important role in this effort by
					providing a platform for pet lovers to connect with adoptable animals and find their
					forever homes. The website also offers valuable resources for new pet owners, such as
					advice on pet care, behavior, and training. By facilitating the adoption process, our
					website helps reduce the number of animals that end up in shelters and provides a loving
					home for them.
				</p>
			</div>
			<img src="/images/cat-home.png" alt="cat" class="w-96" />
		</section>
	</header>

	<section class="py-10 flex flex-col justify-center items-center w-screen bg-[#FFD460]">
		<article class="w-2/5 pb-5">
			<p class="text-center text-lg text-gray-700">
				Our website is dedicated to helping animals in need find loving homes through adoption,
				creating a positive impact on animal welfare.
			</p>
		</article>
		<div class="grid grid-cols-3 gap-7">
			<img src="/images/cat2.png" alt="cat" sizes="350px" class="shadow-xl rounded" />
			<img src="/images/dog1.png" alt="cat" sizes="350px" class="shadow-xl rounded" />
			<img src="/images/cat3.png" alt="cat" sizes="350px" class="shadow-xl rounded" />
		</div>
	</section>

	<footer class="flex flex-col bg-[#2D4059] h-3/5 w-screen px-5">
		<section class="h-auto flex flex-col justify-center items-center p-5">
			<p class="text-center font-bold text-xl text-gray-200">Ready To Explore New Friends</p>
			<p class="text-center text-xl py-10 text-gray-200">
				Through our website, potential pet owners can browse through a database of available animals
				and filter their search based on various criteria such as age, breed, and location.
			</p>
			<a href="/list/">
				<!-- <MyButton text="Let's Find Out" style="btn-neutral text-gray-200" /> -->
				<button>Lets Find Out</button>
			</a>
			<img src="/images/catdog.png" alt="cat" sizes="350px" class="shadow-xl pt-10 rounded" />
		</section>
		<section class="py-5 flex flex-col h-1/6">
			<p>Created With &#10084; By @sutantodadang</p>
			<small>&copy; Copyright {year}, Adopt Me</small>
		</section>
	</footer>
</main>
