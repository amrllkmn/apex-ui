<script lang="ts">
	import Navbar from '$lib/components/ui/navbar';
	import '../app.css';
	let { children } = $props();
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<div class="flex h-screen w-full flex-col items-center justify-between overflow-auto">
	<Navbar />
	<div class="mb-auto flex h-full w-full flex-col items-center justify-center px-4">
		{@render children()}
	</div>
</div>
