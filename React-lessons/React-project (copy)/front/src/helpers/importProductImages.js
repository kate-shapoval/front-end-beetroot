
import { shopItems } from '../data/shopItems.js'
import image1 from '../assets/img/image1.png'
import image2 from '../assets/img/image2.png'
import image3 from '../assets/img/image3.png'
import image4 from '../assets/img/image4.png'
import image5 from '../assets/img/image5.png'
import image6 from '../assets/img/image6.png'
const productImages = []
productImages.push(image1)
productImages.push(image2)
productImages.push(image3)
productImages.push(image4)
productImages.push(image5)
productImages.push(image6)

shopItems.forEach((itemProduct, index) => {
    itemProduct.src = productImages[index]
})

export default productImages