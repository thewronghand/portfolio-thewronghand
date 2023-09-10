interface ProfileBoxProps {
  description: string;
}

export default function ProfileBox({ description }: ProfileBoxProps) {
  return (
    <section className="flex flex-col">
      <section className="text-5xl w-full mb-10 border-b-2 pb-5">About</section>
      <section className="w-full md:w-5/6">{description}</section>
    </section>
  );
}
