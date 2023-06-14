import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/Gabriel-Leal.png" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Gabriel Sala</strong>
                <time
                  title="2023-01-01 04:13:30"
                  dateTime="2023-01-01 04:13:30"
                >
                  Published 1hour ago
                </time>
              </div>
              <button onClick={handleDeleteComment} title="Delete comment">
                <Trash size={24} />
              </button>
            </header>
            <p>{content}</p>
          </div>
          <footer>
            <button>
              <ThumbsUp /> Like <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
