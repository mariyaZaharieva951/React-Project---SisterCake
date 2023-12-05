import styles from './GalleryItem.module.css'

export const GalleryItem = ({img}) => {
    
    return (
    <div className="col-sm-6 col-md-3 col-lg-3_item">
        <div className={styles.item}>
            <img className="img-fluid" src={img} alt='cake'/>
        </div>
    </div>
    )
}