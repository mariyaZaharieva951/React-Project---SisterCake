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
          
          setCurrentComment(result)
      })
  },[commentId])

  const { values, onChange, onEditSubmit} = useForm({ 
    imageUrl: currentComment.imageUrl,
    cream: currentComment.cream,
    description: currentComment.description,
    commentId: currentComment._id
  })
  

    return (
      <div className={styles.editPage}>  
    <div className="container">
      <div className={styles.row}>
        <div className={styles.card}>
          <form className={styles.box} onSubmit={onEditSubmit}>
            <h1>Редактирай Коментар</h1>
            <div className={styles.line}>
              <label htmlFor="game-img">Снимка:</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                placeholder={currentComment.imageUrl}
                value={values.imageUrl}
                onChange={onChange}
              />
            </div>
            <div className={styles.line}>
              <label htmlFor="game-img">Вкус:</label>
              <input
                type="text"
                name="cream"
                placeholder={currentComment.cream}
                value={values.cream}
                onChange={onChange}
              />
            </div>
            <div className={styles.line}>
              <label htmlFor="game-img">Описание:</label>
              <textarea
                name="description"
                placeholder={currentComment.description}
                style={{ height: "100px" }}
                value={values.description}
                onChange={onChange}
              ></textarea>
            </div>

            <input type="submit" name="" defaultValue="Create" href="#" />
          </form>
        </div>
      </div>
    </div>
    </div>
    )
}