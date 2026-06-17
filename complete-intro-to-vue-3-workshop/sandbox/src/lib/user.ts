import type { User } from '@/types/user'

export const fetchAllUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const usersData = await response.json()
  return usersData as User[]
}

export const fetchUser = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const userData = await response.json()
  return userData as User
}
