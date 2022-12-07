import { categories, products } from '../typings'
import Image from 'next/image'
import vegetarian from "./assets/vegetarian.png"
import chilli from "./assets/chilli.png"
import { urlFor } from '../sanity'
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

interface Props {
    product : products
}


function Product({product}: Props) {




    const [size, setsize] = useState(0)



    console.log(product)
    return (
    <div className="flex w-[280px] flex-col select-none space-y-2 rounded-xl bg-[#E2DFD2] p-2 md:h-[400px] md:w-[300px] md:p-2">
        <div className='relative h-64 w-full  rounded-xl'>
            <Image
                src={urlFor(product.image).url()}
                layout="fill"
                objectFit='contain'
                alt='Product Image'
            />
        </div>
        <div className='space-y-2 px-3 flex flex-col'>
            <p className='text-xl font-bold '>
                {product.title}
            </p>    
            <div className='flex space-x-2 items-center'>
                <p className='text-sm font-medium'>
                    {product.calories}
                </p>


                {product.Vegitarian === true && 
                    <div className='relative h-6 w-6'>
                        <Image
                            src={vegetarian}
                            layout="fill"
                            objectFit='contain'
                            alt='Product Image'
                        />
                    </div>
                }
                {product.spicy === true &&                  
                      <div className='relative h-6 w-6'>
                            <Image
                                src={chilli}
                                layout="fill"
                                objectFit='contain'
                                alt='Product Image'
                            />
                        </div>
                }
            </div>

        </div>
        <div className='px-4 py-1 flex items-center space-x-2'>
            <p className='font-bold text-lg '>$ {product.price[size]}</p>
            <div>
                <Dropdown autoClose="inside" >
                    <Dropdown.Toggle  id="dropdown-autoclose-true">
                        Select Size
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='flex flex-col gap-1 bg-white p-2 font-medium text-sm'>
                        <Dropdown.Item onClick={() => setsize(1)}>Small</Dropdown.Item>
                        <Dropdown.Item active={true} onClick={() => setsize(0)}>Medium</Dropdown.Item>
                        <Dropdown.Item onClick={() => setsize(2)}>Large</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                {/* <div>
                    <select id="cars" name="cars">
                        <option onChange={(e) => setsize(1)} value="small">Small</option>
                        <option onChange={() => setsize(0)} value="medium">Medium</option>
                        <option onChange={() => setsize(2)}value="large">Large</option>
                    </select>
                    
                </div> */}
        </div>

{/* 
        onChange={(nextValue) => setsize(nextValue)} */}
    </div>       
    )
  }
  
  export default Product
