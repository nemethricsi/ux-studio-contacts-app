const ContactListSkeleton = () => {
  return (
    <div className="flex animate-pulse flex-col">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex items-center gap-4 py-3">
          <div className="h-10 w-10 rounded-full bg-white opacity-56" />
          <div className="flex flex-col gap-1">
            <div className="h-4 w-32 rounded-lg bg-white opacity-56" />
            <div className="h-3 w-28 rounded-lg bg-white opacity-32" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactListSkeleton;
