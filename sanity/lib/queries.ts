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
    "url": coalesce(video.asset->url, url),
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
  *[_type == "listing" && featured == true && defined(slug.current)] | order(orderRank asc, title asc)[0...18] {
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

export const stateCountQuery = defineQuery(`
  count(*[_type == "state" && defined(name)])
`);

export const stateNamesQuery = defineQuery(`
  *[_type == "state" && defined(name)] | order(name asc) {
    name
  }
`);

export const homepageContentQuery = defineQuery(`
  *[_type == "homepageContent" && _id == "homepageContent"][0] {
    heroSubtext,
    heroPrimaryButtonText,
    heroSecondaryButtonText,
    heroActiveEstatesValue,
    finalCtaHeadingLine,
    finalCtaHeadingEmphasis,
    finalCtaBody
  }
`);
