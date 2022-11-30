import { categories, products } from '../typings'
import Image from 'next/image'
import cherry from "./assets/Cherry.png"

interface Props {
    product : products
}


function Product({product}: Props) {
    console.log(product)
    return (
    <div className="flex w-[280px] flex-col select-none space-y-2 rounded-xl bg-[#35383C] p-5 md:h-[400px] md:w-[300px] md:p-5">
        <div className="relative">
            <Image
                src={cherry}
                layout='fill'
                objectFit='contain'
                alt='text'
                className=''
            />
        </div>
        {product.title}

    </div>       
    )
  }
  
  export default Product
