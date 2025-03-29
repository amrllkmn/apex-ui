export type TActivities = {
  id: number;
  title: string;
  count: number;
  limit: number;
  done: boolean;
}
export const activities: TActivities[] = [
  {
    id: 1,
    title: "Drink water",
    count: 3,
    limit: 7,
    done: false,
  },
  {
    id: 2,
    title: "Exercise",
    count: 1,
    limit: 1,
    done: true,
  },
]

export const updateActivity = async (id: number, data: TActivities, action: string) => {
	const { count } = data

	activities.forEach((activity) => {
		if (activity.id === id) {
        switch (action) {
          case 'increment':
            incrementActivity(activity, count)
            break;
          case 'decrement':
            decrementActivity(activity, count)
            break
          default:
            break;
        }
		}
	})
}

export const createActivity = async (data: {title: string, limit: number}) => {
  const {title, limit} = data
  const newActivity : TActivities = {id: activities.length + 1,title, limit, count: 0, done: false}
  activities.push(newActivity)
}

const incrementActivity = async (activity: TActivities, count: number) => {
  activity.count += count 

  if (activity.count === activity.limit) {
    activity.done = true
  }
}

const decrementActivity = async (activity: TActivities, count: number) => {
  activity.count -= count 

  if (activity.count < activity.limit ) {
    activity.done = false
  }
}