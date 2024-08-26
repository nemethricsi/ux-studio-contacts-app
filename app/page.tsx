import SpecialButton from '@/app/ui/special-button';
import Text from '@/app/ui/text';

export default function Home() {
  return (
    <>
      <header className="mx-auto flex max-w-[768px] items-center justify-between border border-grey-60 p-6">
        <Text variant="h1">Contacts</Text>
        <Actions />
      </header>
      <main className="mx-auto max-w-[768px] border border-grey-60 px-6 py-3">
        <Text variant="h3">Contact List</Text>
      </main>
    </>
  );
}

const Actions = () => {
  return <SpecialButton label="Add new" />;
};
