import Button from '@/app/ui/button';
import ContactListItem from '@/app/ui/contact-list/contact-list-item';
import HeaderActions from '@/app/ui/header/header-actions';
import Text from '@/app/ui/text';

export default function Home() {
  return (
    <>
      <div className="flex md:hidden">
        <div className="flex flex-grow items-center justify-start p-6">
          <Button
            variant="secondary"
            label="Back"
            iconOnly
            iconId="back-arrow"
          />
        </div>
        <div className="flex flex-grow items-center justify-end p-6">
          <Button
            variant="secondary"
            label="Light mode"
            iconOnly
            iconId="light-mode"
          />
        </div>
      </div>
      <header className="flex">
        <div className="hidden flex-grow items-center justify-end border-b border-grey-60 px-6 py-7 md:flex">
          <Button
            variant="secondary"
            label="Back"
            iconOnly
            iconId="back-arrow"
          />
        </div>
        <div className="basis-[768px] border border-grey-60">
          <div className="flex flex-wrap items-center justify-center gap-4 p-6 md:justify-between">
            <Text variant="h1">Contacts</Text>
            <HeaderActions />
          </div>
        </div>
        <div className="hidden flex-grow items-center justify-start border-b border-grey-60 px-6 py-7 md:flex">
          <Button
            variant="secondary"
            label="Light mode"
            iconOnly
            iconId="light-mode"
          />
        </div>
      </header>

      <main className="flex flex-grow">
        <div className="hidden flex-grow md:flex" />
        <div className="basis-[768px] border-x border-grey-60 px-6 py-3">
          <ContactListItem name="Jonas Jones" phoneNumber="+36 01 234 5678" />
          <ContactListItem name="Timothy Lewis" />
          <ContactListItem
            name="Adebayo Rodriguez"
            phoneNumber="+36 01 234 5678"
            imageUrl="/images/Adebayo.png"
          />
        </div>
        <div className="hidden flex-grow md:flex" />
      </main>
    </>
  );
}
