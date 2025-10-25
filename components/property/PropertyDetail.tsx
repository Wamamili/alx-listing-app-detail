import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Left Section: Property Info */}
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">{property.rating} ★</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
          {/* Add other images dynamically if available */}
        </div>

        {/* Tabs / Description */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">About this place</h2>
          <p className="text-gray-700 mt-2">{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">What this place offers</h2>
          <ul className="flex flex-wrap gap-2">
            {property.category.map((amenity, index) => (
              <li key={index} className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Reviews */}
        <ReviewSection reviews={property.reviews} />
      </div>

      {/* Right Section: Booking */}
      <div className="md:col-span-1">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
