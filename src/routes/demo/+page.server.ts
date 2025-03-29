import { activities, createActivity } from "./data";

export function load() {
  return { activities }
}

export const actions = {
  default: async ({request}) => {
    const data = await request.formData()

    const title = data.get('title') as string
    const limit = data.get('limit') as string

    await createActivity({title, limit: parseInt(limit)})
  }
}