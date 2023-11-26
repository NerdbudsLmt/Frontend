

export default async function getAllUsers() {
    const res = await fetch('/')
    if(!res.ok) throw new Error('failed to fetch data')
  return res.json()
}
