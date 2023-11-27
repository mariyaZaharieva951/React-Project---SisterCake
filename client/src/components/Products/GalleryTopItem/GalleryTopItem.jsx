import styles from '../GalleryTopItem/GalleryTopItem.module.css'

export const GalleryTopItem = ({img}) => {
    
    return (
      <div className="col-md-3">
      <a href="#">
        <img 
          src={img}
          alt="Image"
          style={{ maxWidth: "100%" }}
        />
      </a>
    </div>
      
  )
}