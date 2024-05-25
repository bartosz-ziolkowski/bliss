import Image from "next/image";
import React from "react";

const ProductSolution = ({
  name,
  description,
  imageUrl,
}: {
  name: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <div className="p-8 py-12 sm:p-16 rounded-3xl bg-beige border-4 border-green shadow-2xl shadow-gray-600/10 text-center">
      <div className="space-y-12 flex items-center flex-col">
        <Image
          src={imageUrl}
          alt="solution image"
          className="rounded"
          priority
          width={150}
          height={150}
        />
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 transition">
            {name}
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSolution;
