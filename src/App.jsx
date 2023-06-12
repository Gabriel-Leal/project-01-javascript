import { Post } from "./Post";
export function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Post
        author="Gabriel Sala"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore culpa, dignissimos sint accusantium natus tenetur quasi quas, dolore, mollitia dicta rem cupiditate accusamus reiciendis minus pariatur ullam obcaecati eveniet id."
      />
      <Post
        author="Tatiane Sala"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore culpa, dignissimos sint accusantium natus tenetur quasi quas, dolore, mollitia dicta rem cupiditate accusamus reiciendis minus pariatur ullam obcaecati eveniet id."
      />
    </>
  );
}
