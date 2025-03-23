<script lang="ts">
	import Activity from '$lib/components/ui/activity';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	const { data } = $props();
</script>

<Tabs.Root value="daily" class="w-full sm:w-1/2">
	<Tabs.List class="grid w-full grid-cols-3">
		<Tabs.Trigger value="daily">Daily</Tabs.Trigger>
		<Tabs.Trigger value="weekly">Weekly</Tabs.Trigger>
		<Tabs.Trigger value="monthly">Monthly</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="daily" class="space-y-4">
		<!-- TODO: Move to separate component -->
		{#each data.activities as { id, title, count, limit, isStop, done }}
			<Activity {id} {title} {count} {limit} {isStop} {done} />
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
