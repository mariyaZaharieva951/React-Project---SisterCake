import styles from '../Gallery/Gallery.module.css'
import { Product } from '../Product/Product'

export const Gallery = () => {
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
    
                   <Product/>
                    
                
               
                
                </div>
            </div>
        </div>
    </div>

    )
}