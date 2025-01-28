import { useEffect, useState } from 'react';
import { getBrands } from '../services/brandService';

function BrandIndex() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getBrands().then(setBrands);
  }, []);

  return (
    <div>
      <h1>Brand Index</h1>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.name} - {brand.country}</li>
        ))}
      </ul>
    </div>
  );
}

export default BrandIndex;
