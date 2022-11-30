import type { NextApiRequest, NextApiResponse } from 'next'
import {groq}  from "next-sanity";
import {sanityClient} from "../../sanity"
import { products } from '../../typings';
import { categories } from '../../typings';

const query = groq `
    *[_type == "category"] | order(_createdAt asc)
`;

type Data = {
  category : categories[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const category : categories[] = await sanityClient.fetch(query)
  res.status(200).json( {category} )
}
