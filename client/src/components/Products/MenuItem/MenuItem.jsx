import { Link } from "react-router-dom";
import styles from "../MenuItem/MenuItem.module.css";

export const MenuItem = ({ _id, imgUrl }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
      <div className="bg-white rounded shadow-sm">
        <img src={imgUrl} alt="" className="img-fluid card-img-top" />
        <div className="p-4">
          <div className={styles.text}>
            <h5>
              <Link to={`/${_id}`} className={styles.cakeTitle}>
                Red paint cup
              </Link>
            </h5>
            {/* <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </p> */}
            <div className={styles.btnItem}>
              <Link to={`/${_id}`}>Детайли</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
