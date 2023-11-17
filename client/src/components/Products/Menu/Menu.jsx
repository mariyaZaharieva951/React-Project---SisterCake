import styles from "../Menu/Menu.module.css";
import { useState, useEffect } from 'react'
import * as cakeService from '../../../services/cakeService'
import { MenuItem } from "../MenuItem/MenuItem";

export const Menu = () => {

  const [birthdayCakes, setBirthdayCakes] = useState([]);

  useEffect(() => {
    cakeService.getAllBirthdayCake()
    .then(result => {
      setBirthdayCakes(result)
    })
    .catch(err => console.log(err))
  },[])





  return (
    <div className="container-fluid">
      <div className="container">
        <div
          className="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{ maxWidth: 600 }}
        >
          <h2 className={styles.menuTitle}>Меню</h2>
          {/* <h3 className={styles.menuText}>Разгледайте нашите предложения</h3> */}
        </div>
        <div className="tab-class text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase border-inner p-4 mb-5">
            <li className="nav-item">
              <a
                className="nav-link text-white active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                Рожден ден
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                Сватба
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                Детски
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                data-bs-toggle="pill"
                href="#tab-4"
              >
                По желание на клиента
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-3">
                {birthdayCakes?.length > 0 ?
                birthdayCakes.map(cake => <MenuItem key={cake._id} {...cake}/>):
                <div>Error</div> }
                
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-3">
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="bg-white rounded shadow-sm">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg"
                      alt=""
                      className="img-fluid card-img-top"
                    />
                    <div className="p-4">
                      <h5>
                        {" "}
                        <a href="#" className="text-dark">
                          Red paint cup
                        </a>
                      </h5>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </p>
                      <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                        <p className="small mb-0">
                          <i className="fa fa-picture-o mr-2" />
                          <span className="font-weight-bold">JPG</span>
                        </p>
                        <div className="badge badge-danger px-3 rounded-pill font-weight-normal">
                          New
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="bg-white rounded shadow-sm">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg"
                      alt=""
                      className="img-fluid card-img-top"
                    />
                    <div className="p-4">
                      <h5>
                        {" "}
                        <a href="#" className="text-dark">
                          Blorange
                        </a>
                      </h5>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </p>
                      <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                        <p className="small mb-0">
                          <i className="fa fa-picture-o mr-2" />
                          <span className="font-weight-bold">PNG</span>
                        </p>
                        <div className="badge badge-primary px-3 rounded-pill font-weight-normal">
                          Trend
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-3">
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="bg-white rounded shadow-sm">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg"
                      alt=""
                      className="img-fluid card-img-top"
                    />
                    <div className="p-4">
                      <h5>
                        {" "}
                        <a href="#" className="text-dark">
                          Red paint cup
                        </a>
                      </h5>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </p>
                      <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                        <p className="small mb-0">
                          <i className="fa fa-picture-o mr-2" />
                          <span className="font-weight-bold">JPG</span>
                        </p>
                        <div className="badge badge-danger px-3 rounded-pill font-weight-normal">
                          New
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="bg-white rounded shadow-sm">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg"
                      alt=""
                      className="img-fluid card-img-top"
                    />
                    <div className="p-4">
                      <h5>
                        {" "}
                        <a href="#" className="text-dark">
                          Blorange
                        </a>
                      </h5>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </p>
                      <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                        <p className="small mb-0">
                          <i className="fa fa-picture-o mr-2" />
                          <span className="font-weight-bold">PNG</span>
                        </p>
                        <div className="badge badge-primary px-3 rounded-pill font-weight-normal">
                          Trend
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-4" className="tab-pane fade show p-0">
              <div className="row g-3">
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="bg-white rounded shadow-sm">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg"
                      alt=""
                      className="img-fluid card-img-top"
                    />
                    <div className="p-4">
                      <h5>
                        {" "}
                        <a href="#" className="text-dark">
                          Red paint cup
                        </a>
                      </h5>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </p>
                      <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                        <p className="small mb-0">
                          <i className="fa fa-picture-o mr-2" />
                          <span className="font-weight-bold">JPG</span>
                        </p>
                        <div className="badge badge-danger px-3 rounded-pill font-weight-normal">
                          New
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="bg-white rounded shadow-sm">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg"
                      alt=""
                      className="img-fluid card-img-top"
                    />
                    <div className="p-4">
                      <h5>
                        {" "}
                        <a href="#" className="text-dark">
                          Blorange
                        </a>
                      </h5>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </p>
                      <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                        <p className="small mb-0">
                          <i className="fa fa-picture-o mr-2" />
                          <span className="font-weight-bold">PNG</span>
                        </p>
                        <div className="badge badge-primary px-3 rounded-pill font-weight-normal">
                          Trend
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
