import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as commentService from "../../../services/commentService";


export const DetailsComment = () => {
    const { commentId } = useParams();
    const [ currentComment, setCurrentComment ] = useState({});

    useEffect(() => {
        commentService.getOneComment(commentId)
        .then(result => {
            console.log(result);
            setCurrentComment(result)
        })
    },[commentId])

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
                <Link to={`comment/edit`} className="edit">Редактиране</Link>
                <button className="delete">Изтриване</button>
              </div>
            </div>
          </div>
        </div>
    )
}