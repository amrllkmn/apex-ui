import { updateActivity } from '../data.js'

export const PATCH = async ({params, request}) => {
  const data = await request.json()

  await updateActivity(parseInt(params.id), data)
  return new Response(null, {status: 204})
}