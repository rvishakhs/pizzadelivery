import React from 'react'
import { FetchProducts } from '../../utils/FetchProducts'
import {sanityClient} from "../../sanity"

type Props = {}

const Post = ({}: Props) => {
  return (
    <div>Hai all</div>
  )
}

export default Post

export async function getStaticPaths(){
    const paths = await sanityClient.fetch(
      `*[_type =="product" && defined(slug.current)][].slug.current`
    );
}

