<script>
	import '../app.css';
	import {Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
	import {page} from '$app/stores'
	import { fly } from 'svelte/transition';

	export let data;
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';

	let dark_mode = false;
</script>

<Navbar let:hidden  let:toggle rounded color="form">
	<NavBrand href="/">
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Huda Hussain</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
	  <NavLi href="/">About</NavLi>
	  <NavLi href="/experience">Experience</NavLi>
	  <NavLi href="/docs/components/navbar">Navbar</NavLi>
	  <NavLi href="/pricing">Pricing</NavLi>
	  <NavLi href="/contact">Contact</NavLi>
	</NavUl>
	<DarkMode btnClass={darkmodebtn} />
  </Navbar>

<main>
	{#if dark_mode}
		hello
	{/if}
	<span  class="dark:hidden" style="
    background-image: linear-gradient(-60deg, #fda4af 50%, #f9fafb 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;" />
	<span  class="dark:hidden" style="
    background-image: linear-gradient(-60deg, #fda4af 50%, #f9fafb 50%);
    bottom:0;
    left:-60%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
	z-index:-1;
    " />
 {#key data.url}
	<div
		in:fly={{x:-200, duration:300, delay:300}}
		out:fly={{x:200, duration: 300}}>
		<slot />
	</div>
	
 {/key}
</main>

