<script>
	import { Alert } from 'flowbite-svelte';
	const browserUrl = new URL('/images/browser.png', import.meta.url).href
  </script>
  
  <div class="p-8 relative">
	
	<p class="p-10  text-6xl dark:text-white text-sky-950" >
		<span class="bg-gradient-to-r from-rose-300 via-rose-200 to-sky-500 bg-[length:100%_6px] bg-no-repeat bg-bottom pr-24">
			Hi There, I'm Huda
		</span>
	</p>
	<div class="p-16">
		<div class="w-[1000px]" style="position: relative; 
		left: 25%;">
				<img src={browserUrl} class="z-0" style="width: 100%; max-height: 100%;" alt="browser window "/>
				
				<div style="position: absolute;
				top: 5%;
				left: 10%;
				transform: translate(-50%, -50%);">
				<p class="text-xl text-white font-bold">About Me.txt </p>
				</div>
	
				<div style="position: absolute;
				top: 15%;
				left: 5%;
				">
				<p class="text-xl  text-sky-950 w-5/6">As someone who is currently studying Interactive Media and Design at Carleton and Algonquin University, it's fascinating coming across
					the unseen similiarities among technology and art. Both require an eye for detail, being able to think outside the box,
					and solving problems. Luckily for me, I enjoy doing all of the above. I appreciate the 
					excitement of facing new problems and coming up with unique solutions, making mistakes and learning from them,
					and the accomplishment that comes with achieving a finished result.

				</p>
	
	
				</div>
				
		</div>
	</div>
	
  </div>