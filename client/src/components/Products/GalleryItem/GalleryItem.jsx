import styles from "./GalleryItem.module.css";

export const GalleryItem = ({ img }) => {
  
  return (
    <>
      <div className="col-sm-6 col-md-3 col-lg-3_item">
        <div className={styles.item}>
          <img
            className="img-fluid"
            src={img}
            alt="cake"
            data-toggle="modal"
            data-target="#exampleModal"
          />
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
