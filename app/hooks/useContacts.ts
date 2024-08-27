import type { Contact } from '@prisma/client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const fetchContacts = async (): Promise<Contact[]> => {
  const response = await fetch('/api/contacts');

  if(!response.ok) {
    throw new Error('Failed to fetch contacts');
  }

  return await response.json()
}

const deleteContact = async (id: string): Promise<void> => {
  const response = await fetch('/api/contacts', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
  if (!response.ok) {
    throw new Error('Failed to delete contact');
  }
}

export const useContacts = () => {
  const queryClient = useQueryClient();

  const contactsQuery = useQuery({ queryKey: ['contacts'], queryFn: fetchContacts });

  const deleteContactMutation = useMutation({
    mutationFn: deleteContact,
    onSuccess:() => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    }
  });

  return { contactsQuery, deleteContactMutation }

}