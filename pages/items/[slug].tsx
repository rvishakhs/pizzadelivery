import React from 'react'
import { FetchProducts } from '../../utils/FetchProducts'

type Props = {}

const Post = ({}: Props) => {
  return (
    <div>Hai all</div>
  )
}


export default Post




export async function getStaticPaths(){
    const paths = await client.fetch(
        `*[_type =="product" && defined(slug.current)][].slug.current`
    );
}