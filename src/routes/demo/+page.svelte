<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Progress } from '$lib/components/ui/progress';
	import { CircleCheck, Plus } from '@lucide/svelte';
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
		{#each data.activities as { title, count, limit, isStop, done }}
			<Card.Root>
				<Card.Header>
					<Card.Title>
						<div class="flex-2 flex flex-row items-center justify-between space-x-2">
							{title}
							{#if done}
								<CircleCheck color="hsl(142, 71%, 45%)" /> <!-- Use a component-level styling -->
							{/if}
						</div>
					</Card.Title>
					<Card.Description>
						{count}/{limit}
					</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-2">
					<div class="flex-2 flex flex-row items-center justify-between space-x-2">
						<Progress
							value={(count / limit) * 100}
							max={(limit / limit) * 100}
							class="text-lime-300"
						/>
						<Button variant="outline" size="icon">
							<Plus />
						</Button>
					</div>
				</Card.Content>
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
