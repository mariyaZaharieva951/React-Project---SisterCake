import styles from '../Product/Product.module.css'

export const Product = ({img}) => {

    return (
    <div className="col-sm-6 col-md-3 col-lg-3_item">
        <div className={styles.item}>
            <img className="img-fluid" src={img} alt='cake'/>
        </div>
    </div>
    )
}