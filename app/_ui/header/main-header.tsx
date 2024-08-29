import Button from '@/app/_ui/button';
import BackButton from '@/app/_ui/header/back-button';
import HeaderActions from '@/app/_ui/header/header-actions';
import Text from '@/app/_ui/text';

const MainHeader = ({ openCreateModal }: { openCreateModal: () => void }) => {
  return (
    <header className="flex">
      <div className="hidden flex-grow items-center justify-end border-b border-grey-60 px-6 py-7 md:flex">
        <BackButton />
      </div>
      <div className="basis-[768px] border border-t-0 border-grey-60">
        <div className="flex flex-wrap items-center justify-center gap-4 p-6 md:justify-between">
          <Text variant="h1">Contacts</Text>
          <HeaderActions openCreateModal={openCreateModal} />
        </div>
      </div>
      <div className="hidden flex-grow items-center justify-start border-b border-grey-60 px-6 py-7 md:flex">
        <Button variant="secondary" label="Light mode" iconOnly iconId="light-mode" />
      </div>
    </header>
  );
};

export default MainHeader;
