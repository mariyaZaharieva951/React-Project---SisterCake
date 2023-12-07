import styles from "../Menu/Menu.module.css";
import { useState, useEffect } from 'react'
import * as cakeService from '../../../services/cakeService'
import { MenuItem } from "../MenuItem/MenuItem";




export const Menu = () => {

  

  const [birthdayCakes, setBirthdayCakes] = useState([]);
  const [weddingCakes, setWeddingCakes] = useState([]);
  const [kidsCakes, setKidsCakes] = useState([]);
  const [individualCakes, setIndividualCakes] = useState([]);
 

  useEffect(() => {
    cakeService.getAllBirthdayCake()
    .then(result => {
      setBirthdayCakes(result)
    
      
    })
    .catch(err => console.log(err))


    cakeService.getAllWeddingCake()
    .then(result => {
      setWeddingCakes(result)
    
    })
    .catch(err => console.log(err))


    cakeService.getAllKidsCake()
    .then(result => {
      setKidsCakes(result)
    
    })
    .catch(err => console.log(err))


    cakeService.getAllIndividualCake()
    .then(result => {
      setIndividualCakes(result)
  
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
                birthdayCakes.map(cake => <MenuItem  key={cake._id} {...cake} menuId={'birthday'} />):
                <div>Error</div> }     
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-3">
              {weddingCakes?.length > 0 ?
                weddingCakes.map(cake => <MenuItem key={cake._id} {...cake} menuId={'wedding'}/>):
                <div>Error</div> }  
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
            <div className="row g-3">
            {kidsCakes?.length > 0 ?
                kidsCakes.map(cake => <MenuItem key={cake._id} {...cake} menuId={'kids'}/>):
                <div>Error</div> 
                } 
            </div>
            </div>
            <div id="tab-4" className="tab-pane fade show p-0">
              <div className="row g-3">
              {individualCakes?.length > 0 ?
                individualCakes.map(cake => <MenuItem key={cake._id} {...cake} menuId={'individual'}/>):
                <div>Error</div> }  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
