import ContactList from '@/app/ui/contact-list/contact-list';
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
          <ContactList />
        </div>
        <div className="hidden flex-grow md:flex" />
      </main>
    </>
  );
}
