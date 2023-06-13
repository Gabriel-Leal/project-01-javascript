import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <>
      <div className={styles.comment}>
        <img src="https://github.com/Gabriel-Leal.png" />
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
              <button title="Delete comment">
                <Trash size={20} />
              </button>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              voluptas, labore voluptatum doloremque assumenda ratione magnam
              similique dolor deleniti voluptates a cumque iure minus earum
              minima exercitationem illo vel ex!
            </p>
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
