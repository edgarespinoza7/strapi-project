import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="text-4xl text-center mb-6 text-zinc-900">
        Strapi Project
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        commodi autem ex aspernatur temporibus expedita facere cupiditate odit
        voluptatum maxime suscipit fuga nulla repellat dolorem asperiores,
        recusandae soluta architecto? Necessitatibus!
      </p>
    </div>
  );
}
