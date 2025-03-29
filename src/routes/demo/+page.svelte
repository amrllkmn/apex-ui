<script lang="ts">
	import Activity from '$lib/components/ui/activity';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Plus } from '@lucide/svelte';
	import { enhance } from '$app/forms';
	const { data } = $props();

	let isOpen = $state(false);
</script>

<Tabs.Root value="daily" class="w-full sm:w-1/2">
	<Tabs.List class="grid w-full grid-cols-1">
		<Tabs.Trigger value="daily">Daily</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="daily" class="space-y-4">
		<!-- TODO: Move to separate component -->
		{#each data.activities as activity}
			<Activity {...activity} />
		{/each}
		<Dialog.Root
			open={isOpen}
			onOpenChange={(open) => {
				isOpen = open;
			}}
		>
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
				<form
					method="POST"
					use:enhance={() => {
						// Return a callback that runs after form submission
						return async ({ update }) => {
							// First update the page as needed
							await update();

							// Then close the dialog
							isOpen = false;
						};
					}}
				>
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
</Tabs.Root>
