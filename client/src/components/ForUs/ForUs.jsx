import styles from '../ForUs/ForUs.module.css'

export const ForUs = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{ maxWidth: 600 }}>
          <h2 className="text-primary font-secondary">За нас</h2>
        </div>
        <div className={styles.row}>
          <div className={styles.colImg}>
            <div className={styles.img}>
              <img src="img/about.jpg"/>
            </div>
          </div>
          <div className={styles.colText}>
            <h4>
              Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem
              sed stet labore lorem sit clita duo
            </h4>
            <p>
              Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
              tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
              lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
              erat amet magna
            </p>
            <p>
              Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
              tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
              lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
              erat amet magna
            </p>
            {/* <div className="row g-5">
              <div className="col-sm-6">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                  style={{ width: 90, height: 90 }}
                >
                  <i className="fa fa-heartbeat fa-2x text-white" />
                </div>
                <h4 className="text-uppercase">100% Healthy</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                  nonumy dolor magna dolor vero
                </p>
              </div>
              <div className="col-sm-6">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                  style={{ width: 90, height: 90 }}
                >
                  <i className="fa fa-award fa-2x text-white" />
                </div>
                <h4 className="text-uppercase">Award Winning</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita
                  nonumy dolor magna dolor vero
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
