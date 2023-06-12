// function Button() {
//   return <p>Post</p>;
// }
// export default Button; // Default export

// props: {author:"",content:""}

export function Post(props) {
  return (
    <>
      <p>{props.author}</p>
      <strong>{props.content}</strong>
    </>
  );
}
