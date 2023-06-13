import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gabriel Sala"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore culpa, dignissimos sint accusantium natus tenetur quasi quas, dolore, mollitia dicta rem cupiditate accusamus reiciendis minus pariatur ullam obcaecati eveniet id."
          />
          <Post
            author="Tatiane Sala"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore culpa, dignissimos sint accusantium natus tenetur quasi quas, dolore, mollitia dicta rem cupiditate accusamus reiciendis minus pariatur ullam obcaecati eveniet id."
          />
        </main>
      </div>
    </>
  );
}
