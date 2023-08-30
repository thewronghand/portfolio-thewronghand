import { Link } from "react-router-dom";
import { useDarkMode } from "../utils/hooks/useDarkMode";

export default function About() {
  const darkMode = useDarkMode();
  return (
    <div className={`${darkMode ? "text-white bg-slate-500" : "text-black"}`}>
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        <section className="w-2/3 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/2 min-h-1/3">
          <section>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            mollitia non error similique nisi unde. Itaque tenetur consequatur
            alias, laudantium maxime ut architecto suscipit quas, quaerat culpa
            atque cupiditate obcaecati magnam saepe doloribus ad, quidem vel
            unde quod! Architecto possimus distinctio dicta fugiat, quisquam
            porro repellendus voluptatum sapiente exercitationem obcaecati quas
            rem, optio harum iste vero eveniet officiis voluptates similique
            vitae placeat? Unde enim saepe voluptas dolorum, id corrupti porro
            aliquid cupiditate minima eaque, debitis earum reprehenderit autem
            fugit adipisci culpa qui nesciunt officiis dolorem veniam laboriosam
            fugiat vitae praesentium. Incidunt atque eius omnis repudiandae
            mollitia impedit adipisci quod placeat, animi magnam voluptatum
            assumenda porro esse doloremque sed voluptate unde doloribus, minima
            asperiores? Accusantium sint quidem, dignissimos eos dolorum totam
            consectetur voluptate dicta ullam culpa! Consequatur, laborum rem.
          </section>
          <Link
            to="/"
            className={`${
              darkMode ? "text-blue-300" : "text-blue-500"
            } mt-10 inline-block`}
          >
            to main page
          </Link>
        </section>
      </section>
    </div>
  );
}
