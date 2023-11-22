// import { useContext } from "react";
// import { AuthContext } from "../../../contexts/authContex";

import { Link } from "react-router-dom"


export const Comments = ({imageUrl, description, _createdOn, user, _id}) => {
  // const { user } = useContext(AuthContext)
   

    return (
        <div className="col-md-4">
          <div className="card">
            <div className="card-img-top image-card image-card-1">
              <img src={imageUrl} alt="..." />
            </div>
            <div className="card-body">
              <p className="card-text">
                {description}
              </p>
              <Link to={`${_id}`} className="text-dark">
                Детайли
              </Link>
              
            </div>
          </div>
        </div>
    )
}