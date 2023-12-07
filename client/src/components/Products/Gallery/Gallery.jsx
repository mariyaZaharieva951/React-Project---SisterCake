import styles from '../Gallery/Gallery.module.css'
import { useState, useEffect } from 'react'
import * as cakeService from '../../../services/cakeService'
import { GalleryItem } from '../GalleryItem/GalleryItem'

export const Gallery = () => {
    const [cakes, setCakes ] = useState([]);

    useEffect(() => {
        cakeService.getAll()
        .then(result => {
           
            setCakes(result)
            })
        .catch(err => console.log(err))
    },[])
    
    
    return (

       
      
    <div className={styles.lightbox_gallery}>
        <div className="container">
            <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: 600 }}
          >
                <h2 className="text-primary font-secondary">Галерия</h2>
            {/* <h1 className="display-4 text-uppercase">Разгледайте нашите предложения</h1> */}
            </div>
            <div className={styles.lightbox_gallery.photos}>
                <div className="row photos">

                    {cakes.length > 0 
                        ? (
                            <>
                            {cakes.map(cake => (
                                <GalleryItem key={cake._id} img={cake.imgUrl} />
                            ))}
                            </>
                        ) :
                        <div>Error</div>
                    
                    }
                   
                </div>
            </div>
        </div>
    </div>

    )
}