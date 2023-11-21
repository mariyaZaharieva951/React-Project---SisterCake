import styles from "../OurClients/OurClients.module.css";
import { Comments } from "../Comments/Comments";
import { Link } from "react-router-dom";

export const OurClients = () => {
  return (
    <div className="container">
      <h4 className="mb-5 font-weight-bold">Клиентите за нас</h4>
      <div className="row g-3 mt-5 mb-5">
        <Comments/>
        
      </div>
      <button><Link to={'/createComment'}>Остави коментар</Link></button>
    </div>
  );
};
