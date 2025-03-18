<script lang="ts">
	import Navbar from '$lib/components/ui/navbar';
	import '../app.css';
	let { children } = $props();
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<div class="flex min-h-screen w-full flex-col">
	<Navbar />
	<main class="mb-auto mt-auto flex flex-1 flex-col items-center justify-center px-4 py-4">
		{@render children()}
	</main>
</div>
