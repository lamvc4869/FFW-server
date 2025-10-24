import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetails = () => {
  const params = useParams();
  const productId = params.productId || params.id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Format price with thousand separator
  const formatPrice = (price) => {
    if (!price && price !== 0) return "";
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log("Fetching product with ID:", productId);
        const res = await axios.get(
          `http://localhost:3000/api/v1/product/${productId}`
        );
        console.log("API product data:", res.data);
        setProduct(res.data.product);
        if (res.data.product?.image && res.data.product.image.length) {
          setThumbnail(res.data.product.image[0]);
        } else {
          setThumbnail(null);
        }
      } catch (err) {
        setError("Không thể tải dữ liệu sản phẩm.");
      } finally {
        setLoading(false);
      }
    };
    if (productId) fetchProduct();
    else {
      console.log("No productId found in params:", params);
    }
  }, [productId]);

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>{error}</div>;

  if (!product) return <div>Không tìm thấy sản phẩm.</div>;

  return (
    <div className="py-8 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
      {/* Product Details Section */}
      <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Images Section */}
          <div className="flex gap-4 lg:w-1/2">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {(product.image || []).map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className={`border-2 w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                    thumbnail === image
                      ? "border-green-500 shadow-md"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 border-2 border-gray-200 rounded-2xl overflow-hidden bg-white flex items-center justify-center p-6">
              <img
                src={thumbnail}
                alt="Selected product"
                className="w-full h-full object-contain max-h-[500px]"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Product Name */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {product.name}
            </h1>
            {/* Price Section */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-sm text-gray-500">Giá gốc:</span>
                <span className="text-gray-400 line-through text-sm">
                  {formatPrice(product.price)} VNĐ
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-medium text-gray-700">
                  Giá bán:
                </span>
                <span className="text-3xl font-bold text-green-600">
                  {formatPrice(product.offerPrice || product.price)} VNĐ
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">(Đã bao gồm thuế)</p>
            </div>

            {/* Product Origin and Type */}
            <div className="mb-6 space-y-3">
              {product.origin && (
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-gray-700">
                    Nguồn gốc:
                  </span>
                  <span className="text-gray-600">{product.origin}</span>
                </div>
              )}
              {product.category && (
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-gray-700">
                    Danh mục:
                  </span>
                  <span className="text-gray-600">{product.category}</span>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-3">
                Số lượng
              </h3>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="text-lg font-semibold w-8 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                  onClick={() =>
                    setQuantity((q) => Math.min(product.stock, q + 1))
                  }
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
                <span className="ml-4 text-gray-500 text-sm">
                  Còn lại:{" "}
                  <span className="font-semibold">{product.stock}</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <button
                type="button"
                className="flex-1 py-3.5 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                Thêm vào giỏ hàng
              </button>
              <button
                type="button"
                className="flex-1 py-3.5 px-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Related Products Section */}
      <RelatedProducts currentProduct={product} />
    </div>
  );
};
export default ProductDetails;
