import { useForm } from "../../../hooks/useForm";
import styles from "../CreateComment/CreateComment.module.css";
// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../contexts/authContex";
// import * as commentService from "../../../services/commentService";

export const CreateComment = () => {
  // const navigate = useNavigate();
  // const { user } = useContext(AuthContext);

  // const [comment, setComment] = useState({});

  const { values, onChange, onCreateSubmit} = useForm({ 
    imageUrl: '',
    description: '',
  })

  // const onCreateSubmit = (ev) => {
  //   ev.preventDefault();

  //   const formData = new FormData(ev.currentTarget);
  //   const { imageUrl, description } = Object.fromEntries(formData);
  

  //   commentService
  //     .createComment({ imageUrl, description, user }, user.accessToken)
  //     .then((result) => {
  //       setComment((oldState) => ({ ...oldState, result }))
  //     }, navigate("/comments"))
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className="container">
      <div className={styles.row}>
        <div className={styles.card}>
          <form className={styles.box} onSubmit={onCreateSubmit}>
            <h1>Създай Коментар</h1>
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
                value={values.description}
                onChange={onChange}
              ></textarea>
            </div>

            <input type="submit" name="" defaultValue="Create" href="#" />
          </form>
        </div>
      </div>
    </div>
  );
};
