import styles from '../Product/Product.module.css'

export const Product = (cake) => {

    return (
    <div className="col-sm-6 col-md-4 col-lg-3_item">
        <div className={styles.item}>
            <img className="img-fluid" src={`img/${cake.imgUrl}`} alt='cake'/>
        </div>
    </div>
    )
}