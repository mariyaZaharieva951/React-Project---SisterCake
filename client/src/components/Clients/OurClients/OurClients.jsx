import styles from "../OurClients/OurClients.module.css";
import { Comments } from "../Comments/Comments";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as commentService from '../../../services/commentService';


export const OurClients = () => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
      commentService.getAllComments()
      .then(result => {
          console.log(result);
          setComments(result);
          console.log('COMMENTS',comments)
      })
      .catch(error => {
          console.log(error)
      })
  }, [])


  return (
    <div className="container">
      <h4 className="mb-5 font-weight-bold">Клиентите за нас</h4>
      <div className="row g-3 mt-5 mb-5">
        {comments.length > 0 ? (
          comments.slice(0,15),
          comments.map(comment => <Comments key={comment._id} {...comment}/>)) :
          <p>No added comments</p>
        }
        
        
      </div>
      <button><Link to={'/createComment'}>Остави коментар</Link></button>
    </div>
  );
};
