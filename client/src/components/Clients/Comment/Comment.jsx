import { Link } from "react-router-dom";
import styles from "../Comment/Comment.module.css";

export const Comment = ({ imageUrl, description, _createdOn, user, _id }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card">
        <div className={styles.cardComment}>
          <img src={imageUrl} alt="..." className={styles.imgComment} />
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
          {/* <Link to={`${_id}`} className="text-dark">
                Детайли
              </Link> */}
          <div className={styles.btnComment}>
            
              <Link
                to={`${_id}`}
                className="btn btn-custom border-inner py-3 px-5"
              >
                Детайли
              </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};
