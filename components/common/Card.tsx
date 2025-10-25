import React from "react";

export interface CardProps {
  title: string;
  description?: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="text-gray-600 mt-2">{description}</p>}
      </div>
    </div>
  );
};

export default Card;
