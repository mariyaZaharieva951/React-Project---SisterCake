import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/authContex";
import * as commentService from "../../../services/commentService";


export const DetailsComment = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { commentId } = useParams();

    const [ currentComment, setCurrentComment ] = useState({});

    useEffect(() => {
        commentService.getOneComment(commentId)
        .then(result => {
            setCurrentComment(result)
        })
        .catch((err) => console.log(err))
    },[commentId])

    const onDelete = (ev) => {
      ev.preventDefault();

      commentService.delComment(commentId, user.accessToken)
        .then(result => {
            navigate('/comments')
            })
        .catch((err) => console.log(err))
    }

    return (
        <div className="col-md-4">
          <div className="card">
            <div className="card-img-top image-card image-card-1">
              <img src={currentComment.imageUrl} alt="..." />
            </div>
            <div className="card-body">
              <p className="card-text">
                {currentComment.description}
              </p>
              <div className="mt-4 about d-flex justify-content-between align-items-center">
                <span>{currentComment.user?.email}</span> <span>{currentComment._createdOn}</span>
                
              </div>
              <div className="buttons">
                <Link to={`/comment/edit/${currentComment._id}`} className="edit">Редактиране</Link>
                <Link to={`/comment/delete/${currentComment._id}`} className="delete" onClick={onDelete}>Изтриване</Link>
              </div>
            </div>
          </div>
        </div>
    )
}