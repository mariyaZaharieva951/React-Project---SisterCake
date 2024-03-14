import { useState } from "react";
import styles from "./GalleryItem.module.css";
import Modal from 'react-modal';

export const GalleryItem = ({ img }) => {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  
  return (
    <>
      <div className="col-sm-4 col-md-2 col-lg-3_item">
        <div className={styles.item}>
          <img
            className="img-fluid"
            src={img}
            alt="cake"
            onClick={openModal}
            data-toggle="modal"
            data-target="#exampleModal"
          />
          <Modal isOpen={show} onRequestClose={closeModal} className={styles.open}>
          <img
            className="img-fluid"
            src={img}
            alt="cake"
          />
          <button onClick={closeModal}>x</button>
          </Modal>
        </div>
      </div>

      {/* <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <img src={img} alt="Enlarged Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
