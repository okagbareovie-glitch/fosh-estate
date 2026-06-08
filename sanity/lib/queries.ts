import { defineQuery } from "next-sanity";

const listingFields = `
  _id,
  title,
  "slug": slug.current,
  address,
  "state": coalesce(state->name, location->state, location->name, location),
  price,
  status,
  type,
  description,
  summary,
  featured,
  amenities,
  sellingPoints,
  coordinates,
  "image": imageGallery[0]{
    alt,
    image
  },
  "imageGallery": imageGallery[]{
    _key,
    alt,
    image
  },
  "videoGallery": videoGallery[]{
    _key,
    title,
    url,
    poster{
      alt,
      image
    }
  }
`;

export const listingsQuery = defineQuery(`
  *[_type == "listing" && defined(slug.current)] | order(orderRank asc, title asc) {
    ${listingFields}
  }
`);

export const featuredListingsQuery = defineQuery(`
  *[_type == "listing" && featured == true && defined(slug.current)] | order(orderRank asc, title asc)[0...6] {
    ${listingFields}
  }
`);

export const listingBySlugQuery = defineQuery(`
  *[_type == "listing" && slug.current == $slug][0] {
    ${listingFields}
  }
`);

export const listingSlugsQuery = defineQuery(`
  *[_type == "listing" && defined(slug.current)] {
    "slug": slug.current
  }
`);
