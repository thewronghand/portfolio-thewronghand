interface ProfileBoxProps {
  description: string;
}

export default function ProfileBox({ description }: ProfileBoxProps) {
  return (
    <section className="flex flex-col">
      <section className="text-5xl w-full mb-10 border-b-2 border-b-current pb-5 cursor-default">
        About
      </section>
      <section className="w-full md:w-5/6 px-4">{description}</section>
    </section>
  );
}
