import { useForm } from "../../../hooks/useForm";
import styles from "../CreateComment/CreateComment.module.css";

export const CreateComment = () => {
  const { values, onChange, onCreateSubmit } = useForm({
    imageUrl: "",
    cream: "",
    description: "",
  });

  return (
    <div className={styles.createPage}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.card}>
            <form className={styles.box} onSubmit={onCreateSubmit}>
              <h1>Създай Коментар</h1>
              <div className={styles.line}>
                <label htmlFor="game-img">Снимка:</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Качи снимка..."
                  value={values.imageUrl}
                  onChange={onChange}
                />
              </div>
              <div className={styles.line}>
                <label htmlFor="game-img">Вкус:</label>
                <input
                  type="text"
                  name="cream"
                  placeholder="Крем..."
                  value={values.cream}
                  onChange={onChange}
                />
              </div>
              <div className={styles.line}>
                <label htmlFor="game-img">Описание:</label>
                <textarea
                  name="description"
                  placeholder="Коментар..."
                  style={{ height: "100px" }}
                  value={values.description}
                  onChange={onChange}
                ></textarea>
              </div>

              <input className={styles.btnComment} type="submit" name="" defaultValue="Create" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
