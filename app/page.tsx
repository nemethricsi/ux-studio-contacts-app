import ContactListItem from '@/app/ui/contact-list/contact-list-item';
import HeaderActions from '@/app/ui/header/header-actions';
import Text from '@/app/ui/text';

export default function Home() {
  return (
    <>
      <header className="mx-auto flex max-w-[768px] items-center justify-between border border-grey-60 p-6">
        <Text variant="h1">Contacts</Text>
        <HeaderActions />
      </header>
      <main className="mx-auto max-w-[768px] border border-y-0 border-grey-60 px-6 py-3">
        <ContactListItem name="Jonas Jones" phoneNumber="+36 01 234 5678" />
        <ContactListItem name="Timothy Lewis" />
        <ContactListItem
          name="Adebayo Rodriguez"
          phoneNumber="+36 01 234 5678"
          imageUrl="/images/Adebayo.png"
        />
      </main>
    </>
  );
}
