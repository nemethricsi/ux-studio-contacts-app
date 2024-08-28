import Button from '@/app/ui/button';
import BackButton from '@/app/ui/header/back-button';

const MobileHeader = () => {
  return (
    <div className="flex border-b border-grey-60 md:hidden">
      <div className="flex flex-grow items-center justify-start p-6">
        <BackButton />
      </div>
      <div className="flex flex-grow items-center justify-end p-6">
        <Button variant="secondary" label="Light mode" iconOnly iconId="light-mode" />
      </div>
    </div>
  );
};

export default MobileHeader;
