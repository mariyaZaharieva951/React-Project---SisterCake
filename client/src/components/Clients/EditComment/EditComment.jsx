import styles from '../EditComment/EditComment.module.css'

export const EditComment = () => {

    return (
        <div className="container">
      <div className={styles.row}>
        <div className={styles.card}>
          <form className={styles.box} >
            <h1>Редактирай Коментар</h1>
            <div className={styles.line}>
              {/* <label htmlFor="game-img">Image:</label> */}
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                placeholder="Качи снимка..."
              />
            </div>
            <div className={styles.line}>
              <textarea
                name="description"
                placeholder="Коментар..."
                style={{ height: "100px" }}
              ></textarea>
            </div>

            <input type="submit" name="" defaultValue="Create" href="#" />
          </form>
        </div>
      </div>
    </div>
    )
}