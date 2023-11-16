import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as cakeService from '../../../services/cakeService'

export const Details = () => {
    const { cakeId } = useParams();
    console.log(cakeId)
    const [currentCake,setCurrentCake] = useState({});

    useEffect(() => {
        cakeService.getOneBdCake(cakeId)
        .then(result => {
            setCurrentCake(result)
            console.log('RESULT',result)
        })
    },[])

    return (
        <div className="container">
        
        <div id="demo" className="carousel slide" data-ride="carousel">
          
          <div className="carousel-inner">
            
            <div className="carousel-item active">
              
              <div className="card">
                
                <div className="path">
                  HOME / FACE <a>/ CLEANSERS</a>
                </div>
                <div className="row">
                  
                  <div className="col-md-6 text-center align-self-center">
                    
                    <img
                      className="img-fluid"
                      src={currentCake.imgUrl}
                    />
                  </div>
                  <div className="col-md-6 info">
                    
                    <div className="row title">
                      
                      <div className="col">
                        <h2>Herbalism</h2>
                      </div>
                      <div className="col text-right">
                        <a href="#">
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                    <p>Natural herbal wash</p> <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star-half-full" />
                    <span id="reviews">1590 Reviews</span>
                    <div className="row price">
                      
                      <label className="radio">
                        
                        <input
                          type="radio"
                          name="size1"
                          defaultValue="small"
                          defaultChecked=""
                        />
                        <span>
                          
                          <div className="row">
                            <big>
                              <b>1.5 oz.</b>
                            </big>
                          </div>
                          <div className="row">$12.95</div>
                        </span>
                      </label>
                      <label className="radio">
                        
                        <input type="radio" name="size1" defaultValue="large" />
                        <span>
                          
                          <div className="row">
                            <big>
                              <b>4.4 oz.</b>
                            </big>
                          </div>
                          <div className="row">$21.95</div>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row lower">
                  
                  <div className="col">
                    
                    <a
                      className="carousel-control-prev"
                      href="#demo"
                      data-slide="prev"
                    >
                      <i className="fa fa-arrow-left" />
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#demo"
                      data-slide="next"
                    >
                      <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                  <div className="col text-right align-self-center">
                    
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              
              <div className="card">
                
                <div className="path">
                  HOME / FACE <a>/ CLEANSERS</a>
                </div>
                <div className="row">
                  
                  <div className="col-md-6 text-center align-self-center">
                    
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/7a9V4yw.png"
                    />
                  </div>
                  <div className="col-md-6 info">
                    
                    <div className="row title">
                      
                      <div className="col">
                        <h2>Herbalism 2</h2>
                      </div>
                      <div className="col text-right">
                        <a href="#">
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                    <p>Natural herbal wash pro</p>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star-half-full" />
                    <span id="reviews">1590 Reviews</span>
                    <div className="row price">
                      
                      <label className="radio">
                        
                        <input type="radio" name="size2" defaultValue="small" />
                        <span>
                          
                          <div className="row">
                            <big>
                              <b>13.5 oz.</b>
                            </big>
                          </div>
                          <div className="row">$36.95</div>
                        </span>
                      </label>
                      <label className="radio">
                        
                        <input
                          type="radio"
                          name="size2"
                          defaultValue="large"
                          defaultChecked=""
                        />
                        <span>
                          
                          <div className="row">
                            <big>
                              <b>18.4 oz.</b>
                            </big>
                          </div>
                          <div className="row">$61.95</div>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row lower">
                  
                  <div className="col">
                    
                    <a
                      className="carousel-control-prev"
                      href="#demo"
                      data-slide="prev"
                    >
                      <i className="fa fa-arrow-left" />
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#demo"
                      data-slide="next"
                    >
                      <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                  <div className="col text-right align-self-center">
                    
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}