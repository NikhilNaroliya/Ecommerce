import './Category.scss'

import cat1 from '../../assets/category/cat-1.jpg'

const Category =()=>{
    return (
        <div className="category-main-content " >
            <div className="categories">
                <div className="category">
                    <img className="cat-img" src={cat1} alt="" />
                </div>
                <div className="category">
                    <img className="cat-img" src={cat1} alt="" />
                </div>
                <div className="category">
                    <img className="cat-img" src={cat1} alt="" />
                </div>
                <div className="category">
                    <img className="cat-img" src={cat1} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Category