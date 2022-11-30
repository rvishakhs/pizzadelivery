import React from 'react'
import { categories, products } from '../typings'
import { Tab } from '@headlessui/react'
import Product from "./Product"

type Props = {
  products : products[]
  categories : categories[]
}

function Products({products, categories}: Props) {

  const showProducts = (category : number) => {
    return products
    .filter((product) => product.categories[0]._ref === categories[category]._id)
    .map((product)=> <Product product={product} />)
  }

  console.log(products)      
  console.log(categories)      

  return (
    <div className="space-y-4 py-6">
        <h1 className='text-center text-3xl font-medium tracking-wide text-red-400/90'>
            MENU
        </h1>
        <Tab.Group>
            <Tab.List className="flex justify-center space-x-3">
              {categories.map((category, index ) => (
                <Tab 
                    key={index}
                    className={({selected}) => `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base
                     ${
                        selected
                          ? "borderGradient bg-[#35383C] text-white"
                          : "border-b-2 border-[#35383C] text-[#747474]"
                      }`
                    }
                >
                    {category.title}
                </Tab>
              ))}

            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm-px-4">
              <Tab.Panel className="tabcontainer">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabcontainer">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabcontainer">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabcontainer">{showProducts(3)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
    </div>
  )
}

export default Products