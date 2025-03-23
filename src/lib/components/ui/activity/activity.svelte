<script lang="ts">
	import * as Card from '../card';
	import { Progress } from '../progress';
	import { Button } from '../button';
	import { CircleCheck, Plus } from '@lucide/svelte';
	import type { TActivities } from '../../../../routes/demo/data';

	const props: TActivities = $props();
</script>

<Card.Root id={`activity-${props.id}`}>
	<Card.Header>
		<Card.Title>
			<div class="flex-2 flex flex-row items-center justify-between space-x-2">
				{props.title}
				{#if props.done}
					<CircleCheck color="hsl(142, 71%, 45%)" /> <!-- Use a component-level styling -->
				{/if}
			</div>
		</Card.Title>
		<Card.Description>
			{props.count}/{props.limit}
		</Card.Description>
	</Card.Header>
	<Card.Content class="space-y-2">
		<div class="flex-2 flex flex-row items-center justify-between space-x-2">
			<Progress
				value={(props.count / props.limit) * 100}
				max={(props.limit / props.limit) * 100}
				class="text-lime-300"
			/>
			<Button variant="outline" size="icon">
				<Plus />
			</Button>
		</div>
	</Card.Content>
</Card.Root>
