import Image from 'next/image';
import { Product } from '@/data/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full max-w-[200px] mx-auto">
      <div className="w-full h-[200px] relative mb-2">
        <Image
          src={product.imageUrl}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="text-center">
        <p className="text-sm font-bold text-black">{product.description}</p>
        <p className="text-xs text-gray-800">{product.price}</p>
        <div className="text-sm text-gray-500 flex justify-center items-center mt-1">
          <span className="mr-1">❤️</span>
          <span>{product.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
