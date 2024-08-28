import { useClose } from '@headlessui/react';
import type { Contact } from '@prisma/client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const fetchContacts = async (): Promise<Contact[]> => {
  const response = await fetch('/api/contacts');

  if (!response.ok) {
    throw new Error('Failed to fetch contacts');
  }

  return await response.json();
};

const createContact = async (formData: FormData) => {
  const response = await fetch('/api/contacts', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to create contact');
  }
};

const updateContact = async ({ id, formData }: { id: string; formData: FormData }): Promise<void> => {
  const response = await fetch(`/api/contacts/${id}`, {
    method: 'PATCH',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to update contact');
  }
};

const deleteContact = async (id: string): Promise<void> => {
  const response = await fetch(`/api/contacts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete contact');
  }
};

export const useContacts = () => {
  const close = useClose();
  const queryClient = useQueryClient();

  const contactsQuery = useQuery({ queryKey: ['contacts'], queryFn: fetchContacts, staleTime: 1000 * 60 * 5 });

  const createContactMutation = useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      close();
    },
    onError: (error) => {
      alert(error);
    },
  });

  const updateContactMutation = useMutation({
    mutationFn: updateContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      close();
    },
    onError: (error) => {
      alert(error);
    },
  });

  const deleteContactMutation = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });

  return { contactsQuery, createContactMutation, deleteContactMutation, updateContactMutation };
};
