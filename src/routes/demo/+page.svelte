<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	const { data } = $props();
</script>

<Tabs.Root value="daily" class="w-full sm:w-1/2">
	<Tabs.List class="grid w-full grid-cols-3">
		<Tabs.Trigger value="daily">Daily</Tabs.Trigger>
		<Tabs.Trigger value="weekly">Weekly</Tabs.Trigger>
		<Tabs.Trigger value="monthly">Monthly</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="daily" class="space-y-4">
		{#each data.activities as { title, count, limit, isStop, done }}
			<Card.Root>
				<Card.Header>
					<Card.Title>{title}</Card.Title>
				</Card.Header>
				<Card.Content></Card.Content>
			</Card.Root>
		{/each}
	</Tabs.Content>
	<Tabs.Content value="weekly">
		<Card.Root>
			<Card.Header>
				<Card.Title>Password</Card.Title>
				<Card.Description>
					Change your password here. After saving, you'll be logged out.
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-2">
				<div class="space-y-1">
					<Label for="current">Current password</Label>
					<Input id="current" type="password" />
				</div>
				<div class="space-y-1">
					<Label for="new">New password</Label>
					<Input id="new" type="password" />
				</div>
			</Card.Content>
			<Card.Footer>
				<Button>Save password</Button>
			</Card.Footer>
		</Card.Root>
	</Tabs.Content>
	<Tabs.Content value="monthly">
		<Card.Root>
			<Card.Header>
				<Card.Title>Password</Card.Title>
				<Card.Description>
					Change your password here. After saving, you'll be logged out.
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-2">
				<div class="space-y-1">
					<Label for="current">Current password</Label>
					<Input id="current" type="password" />
				</div>
				<div class="space-y-1">
					<Label for="new">New password</Label>
					<Input id="new" type="password" />
				</div>
			</Card.Content>
			<Card.Footer>
				<Button>Save password</Button>
			</Card.Footer>
		</Card.Root>
	</Tabs.Content>
</Tabs.Root>
