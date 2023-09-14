import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product }) => {
  const { image, name, slug, price } = product;

  // Check if 'image' is defined and has at least one item
  const imageUrl = image && image[0] ? urlFor(image[0]) : null;

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          {imageUrl ? (
            <img
              src={imageUrl}
              width={250}
              height={250}
              className="product-image"
              alt={name}
            />
          ) : (
            <div className="product-image-placeholder">
              No Image Available
            </div>
          )}
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
