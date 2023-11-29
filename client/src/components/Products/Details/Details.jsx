import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as cakeService from "../../../services/cakeService";
import styles from "../Details/Details.module.css";

export const Details = () => {
  const { cakeId } = useParams();
  const [currentCake, setCurrentCake] = useState({});

  useEffect(() => {
    cakeService.getOneBdCake(cakeId).then((result) => {
      setCurrentCake(result);
      console.log("ONECAKE", result);
    });
  }, [cakeId]);

  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="inner-card">
          <div className={styles.item}>
            <div className={styles.img}>
              <img src={currentCake.imgUrl} alt="cake" />
            </div>

            {/* <div className="d-flex justify-content-between align-items-center mt-3 px-2">
              <h4> </h4>
            </div> */}
            <div className={styles.img}>
              <div className="mt-2 px-2">
                <p>Ръчно изработена от висококачествени продукти.</p>
                <p>Притежава сертификат за качество.</p>
              </div>
              <div className="px-2">
                <p>цена на парче</p>
                <h3>4.50лв.</h3>
              </div>
              <div className="px-2 mt-3">
                <div className={styles.btnItem}>
                  <button className="btn btn-primary px-3">Купи</button>
                  <button className="btn btn-outline-primary px-3">
                    Отказ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
