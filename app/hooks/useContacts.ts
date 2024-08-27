import type { Contact } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

const fetchContacts = async (): Promise<Contact[]> => {
  const response = await fetch('/api/contacts');

  if(!response.ok) {
    throw new Error('Failed to fetch contacts');
  }

  return await response.json()
}

export const useContacts = () => {
  const contactsQuery = useQuery({ queryKey: ['contacts'], queryFn: fetchContacts })

  return { contactsQuery }

}