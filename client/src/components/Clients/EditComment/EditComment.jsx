import styles from '../EditComment/EditComment.module.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as commentService from "../../../services/commentService";
import { useForm } from '../../../hooks/useForm';


export const EditComment = () => {

    const { commentId } = useParams();
    const [ currentComment, setCurrentComment ] = useState({});
    
    useEffect(() => {
      commentService.getOneComment(commentId)
      .then(result => {
          console.log('RESULT',result);
          setCurrentComment(result)
      })
  },[commentId])

  const { values, onChange, onEditSubmit} = useForm({
    
    imageUrl: currentComment.imageUrl,
    description: currentComment.description,
    commentId: currentComment._id
  })
  console.log('values', values.imageUrl)

    return (
        <div className="container">
      <div className={styles.row}>
        <div className={styles.card}>
          <form className={styles.box} onSubmit={onEditSubmit}>
            <h1>Редактирай Коментар</h1>
            <div className={styles.line}>
              {/* <label htmlFor="game-img">Image:</label> */}
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
              <textarea
                name="description"
                placeholder="Коментар..."
                style={{ height: "100px" }}
                id="description"
                value={values.description}
                onChange={onChange}
              ></textarea>
            </div>

            <input type="submit" name="" defaultValue="Create" href="#" />
          </form>
        </div>
      </div>
    </div>
    )
}