import styles from "../Contact/Contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className="container">
        <div className="row g-5 mb-5">
          <div className="col-lg-4 col-md-6">
            <div className={styles.border}>
              <div className={styles.card}>
                <i className="bi bi-geo-alt fs-1 text-white top" />
                <h6 className={styles.h6}>Адрес</h6>
                <span>гр. Ямбол, ул. Атанас Кратунов №5</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={styles.border}>
              <div className={styles.card}>
                <i className="bi bi-envelope-open fs-1 text-white" />
                <h6 className={styles.h6}>Пишете ни</h6>
                <span>info@sistercake.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.border}>
              <div className={styles.card}>
                <i className="bi bi-phone-vibrate fs-1 text-white" />
                <h6 className={styles.h6}>Обадете ни се</h6>
                <span>+359 895 678978</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-center">
          <div className="col-lg-6">
            <form>
              <div className="row g-3">
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0 px-4"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    className="form-control bg-light border-0 px-4"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control bg-light border-0 px-4"
                    placeholder="Subject"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-sm-12">
                  <textarea
                    className="form-control bg-light border-0 px-4 py-3"
                    rows={4}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-sm-12">
                  <button
                    className="btn btn-primary border-inner w-100 py-3"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
};
