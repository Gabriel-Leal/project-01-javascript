import styles from "./Post.module.css";

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src="https://github.com/Gabriel-Leal.png"
            />
            <div className={styles.authorInfo}>
              <strong>Gabriel Sala</strong>
              <span>Frontend Developer</span>
            </div>
          </div>

          <time title="2023-01-01 04:13:30" dateTime="2023-01-01 04:13:30">
            Published 1hour ago
          </time>
        </header>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            nulla officia itaque mollitia ab quos quae autem doloribus? Id
            tenetur unde atque et error facere, natus quasi soluta repudiandae
            officiis!
          </p>
          <p>
            <a href="#">gabriel.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#react</a> <a href="#">#newproject</a>
          </p>
        </div>
      </article>
    </>
  );
}
