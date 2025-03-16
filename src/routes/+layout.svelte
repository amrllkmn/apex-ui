<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { Mountain, Sun, Moon } from '@lucide/svelte';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<ModeWatcher />
<header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
	<nav
		class="flex flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
	>
		<a href="/" class="flex items-center gap-2 text-xl font-bold md:text-lg">
			<Mountain class="size-6" />
			Apex.
		</a>
	</nav>
	<div class="ml-auto flex items-center gap-4 md:gap-2 lg:gap-4">
		<Button onclick={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/></Button
		>
	</div>
</header>
<div class="flex h-screen w-full flex-col items-center justify-center px-4">
	{@render children()}
</div>
