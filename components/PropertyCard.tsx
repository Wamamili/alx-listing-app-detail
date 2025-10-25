// components/PropertyCard.tsx
import React from "react";
import type { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
      <div className="h-44 sm:h-52 w-full bg-gray-100">
        {/* Using img tag to allow external examples; swap to next/image for optimization */}
        <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{property.name}</h3>
          {property.discount && (
            <span className="text-xs bg-yellow-400 text-gray-800 px-2 py-0.5 rounded">{property.discount}% off</span>
          )}
        </div>

        <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>

        <p className="text-sm text-gray-600 line-clamp-2">{property.category.join(" • ")}</p>

        <div className="mt-auto flex items-center justify-between">
          <div className="text-sm text-gray-700 flex gap-3">
            <span>{property.offers.bed} bd</span>
            <span>{property.offers.shower} ba</span>
            <span>{property.offers.occupants}</span>
          </div>

          <div className="text-right">
            <div className="text-lg font-semibold">${property.price.toLocaleString()}</div>
            <div className="text-xs text-gray-500">⭐ {property.rating}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
