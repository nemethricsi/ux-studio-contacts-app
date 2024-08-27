import ContactListItem from '@/app/ui/contact-list/contact-list-item';
import MainHeader from '@/app/ui/header/main-header';
import MobileHeader from '@/app/ui/header/mobile-header';

export default function Home() {
  return (
    <>
      <MobileHeader />
      <MainHeader />
      <main className="flex flex-grow">
        <div className="hidden flex-grow md:flex" />
        <div className="basis-[768px] border-x border-grey-60 px-6 py-3">
          <ContactListItem
            contactId={1}
            name="Jonas Jones"
            phoneNumber="+36 01 234 5678"
          />
          <ContactListItem contactId={2} name="Timothy Lewis" />
        </div>
        <div className="hidden flex-grow md:flex" />
      </main>
    </>
  );
}
