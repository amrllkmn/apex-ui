import { updateActivity } from '../data.js'

export const PATCH = async ({params, request, url}) => {
  const action = url.searchParams.get('action') as string
  const data = await request.json()

  await updateActivity(parseInt(params.id), data, action)
  return new Response(null, {status: 204})
}