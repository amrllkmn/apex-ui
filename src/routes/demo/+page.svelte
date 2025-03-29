<script lang="ts">
	import Activity from '$lib/components/ui/activity';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Plus } from '@lucide/svelte';
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
		{#each data.activities as activity}
			<Activity {...activity} />
		{/each}
		<Dialog.Root>
			<Dialog.Trigger class={`w-full ${buttonVariants({ variant: 'outline' })}`}>
				<Plus /> Add new activity
			</Dialog.Trigger>
			<Dialog.Content class="md:max-w-1/2">
				<Dialog.Header>
					<Dialog.Title>Add new activity</Dialog.Title>
					<Dialog.Description>
						Create a new activity you want track. Click save when you're done.
					</Dialog.Description>
				</Dialog.Header>
				<form method="POST">
					<div class="grid gap-4 py-4">
						<div class="grid grid-cols-4 items-center gap-4">
							<Label for="title" class="text-right">Title</Label>
							<Input
								id="title"
								value="Study for 30 mins"
								class="col-span-3"
								name="title"
								required
							/>
						</div>
						<div class="grid grid-cols-4 items-center gap-4">
							<Label for="limit" class="text-right">Count</Label>
							<Input id="limit" value="0" class="col-span-3" type="number" name="limit" />
						</div>
					</div>
					<Dialog.Footer>
						<Button type="submit">Save changes</Button>
					</Dialog.Footer>
				</form>
			</Dialog.Content>
		</Dialog.Root>
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
