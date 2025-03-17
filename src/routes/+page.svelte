<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight, Github } from '@lucide/svelte';
</script>

<section class="py-12 md:py-24">
	<div class="container mx-auto px-4 text-center">
		<h1 class="mb-4 text-4xl font-bold tracking-tight md:text-6xl">Push yourself to the peak.</h1>
		<p class="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
			The ultimate habit tracker. Optimize your routine, track your progress, and rise above the
			competition.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button size="lg" href="/activities">
				Start <ArrowRight class="text-lg" />
			</Button>
			<Button size="lg" variant="outline" href="https://github.com/amrllkmn/apex" target="_blank"
				>Learn More <Github /></Button
			>
		</div>
	</div>
</section>
