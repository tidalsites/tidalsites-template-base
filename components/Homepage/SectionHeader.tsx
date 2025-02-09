type Props = {
  heading: string;
  subheading: string;
  divider?: boolean;
};

export const SectionHeader = ({
  heading,
  subheading,
  divider = true,
}: Props) => {
  return (
    <div className="flex flex-col gap-4 items-center text-center py-20">
      <h2 className="text-4xl text-accent font-bold">{heading}</h2>
      {divider && <div className="w-20 h-1 bg-accent rounded-full"></div>}
      <p>{subheading}</p>
    </div>
  );
};
