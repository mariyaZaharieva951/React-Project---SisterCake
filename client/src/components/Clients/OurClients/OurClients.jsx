import styles from "../OurClients/OurClients.module.css";
import { Comment } from "../Comment/Comment";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as commentService from '../../../services/commentService';


export const OurClients = () => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
      commentService.getLatesComments()
      .then(result => {
          setComments(result);
    
      })
      .catch(error => {
          console.log(error)
      })
  }, [])


  return (
    
    <div className="container">
      <div className="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{ maxWidth: 600 }}>
          <h2 className="text-primary font-secondary">Клиентите за нас</h2>
      </div>


     
      <div className="row">
        {comments.length > 0 ? (
          comments.slice(0,15),
          comments.map(comment => <Comment key={comment._id} {...comment}/>)) :
          <p>No added comments</p>
        } 
      </div>
      <div className={styles.btnCreate}>
        <Link to={'/createComment'} className="btn btn-primary border-inner py-3 px-5 me-5">Остави коментар</Link>
        </div>
    
    </div>
  );
};
