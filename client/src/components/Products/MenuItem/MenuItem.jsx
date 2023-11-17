import { Link } from "react-router-dom";


export const MenuItem = ({_id, imgUrl}) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="bg-white rounded shadow-sm">
                    <img
                      src={imgUrl}
                      alt=""
                      className="img-fluid card-img-top"
                    />
                    <div className="p-4">
                      <h5>

                        <a href="#" className="text-dark">
                          Red paint cup
                        </a>
                      </h5>
                      {/* <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </p> */}
                      <button><Link to={`/${_id}`}>Детайли</Link></button>
                    </div>
                  </div>
                </div>
    )
}