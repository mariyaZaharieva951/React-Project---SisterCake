import styles from '../Hero/Hero.module.css'

export const Hero = () => {
    return (
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
            <div className={styles.row}>
                <div className={styles.col}>
                    {/* <h1 className="font-secondary text-primary mb-4">Вкусните торти</h1> */}
                    <h1 className="display-1">Sistercake</h1>
                    <h2>Приготвени с желание и любов</h2>
                    <div className={styles.button}>
                        <a href="" className="btn btn-primary border-inner py-3 px-5 me-5">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}