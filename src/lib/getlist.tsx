
export default async function getlist(projectId: string) {
    const res = await fetch(`http${projectId}`)
    if(!res.ok) throw new Error('failed to fetch data')

  return res.json()
 
}
