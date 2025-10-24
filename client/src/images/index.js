// Essential images - logos, icons, backgrounds, and profile
import logo from "./logo.svg";
import logoFruitHub3D from "./logo-fruithub-3d.svg";
import faviconFRefined from "./favicon-f-refined.svg";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./main_banner_bg.png";
import main_banner_bg_sm from "./main_banner_bg_sm.png";
import bottom_banner_image from "./bottom_banner_image.png";
import bottom_banner_image_sm from "./bottom_banner_image_sm.png";
import add_address_image from "./add_address_image.svg";

export const images = {
  logo,
  logoFruitHub3D,
  faviconFRefined,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  box_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_image,
};

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Giao hàng nhanh chóng",
    description: "Thực phẩm được giao trong vòng 30 phút.",
  },
  {
    icon: leaf_icon,
    title: "Đảm bảo độ tươi ngon",
    description: "Sản phẩm tươi ngon được cung cấp trực tiếp từ nguồn uy tín.",
  },
  {
    icon: coin_icon,
    title: "Giá cả phải chăng",
    description: "Thực phẩm chất lượng với giá cả không thể tốt hơn.",
  },
  {
    icon: trust_icon,
    title: "Được hàng triệu người tin tưởng",
    description: "Yêu thích bởi hơn 10,000 khách hàng hài lòng.",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.greatstack@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const categories = [
  {
    text: "Trái cây",
    path: "fruits",
    image:
      "https://res.cloudinary.com/dki6kmnto/image/upload/v1761194843/categories_imported_fruit_otexcg.png",
    bgColor: "#FEF4E6",
    icon: "🍊",
    description: "Trái cây tươi ngon địa phương và nhập khẩu...",
    scale: 1.3,
  },
  {
    text: "Rau củ",
    path: "vegetables",
    image:
      "https://res.cloudinary.com/dki6kmnto/image/upload/v1761194836/organic_vegitable_image_kpw7xc.png", // Will use placeholder or remove image dependency
    bgColor: "#E8F4FD",
    icon: "🥦",
    description: "Rau củ hữu cơ, lá xanh và các loại rau tươi khác...",
    scale: 1.3,
  },
  {
    text: "Nước uống",
    path: "drinks",
    image:
      "https://res.cloudinary.com/dki6kmnto/image/upload/v1761194923/bottles_image_vegis0.png", // Will use placeholder or remove image dependency
    bgColor: "#FFF0F5",
    icon: "🥭",
    description: "Đang cập nhật...",
    scale: 1.2,
  },
  {
    text: "Giỏ quà",
    path: "gifts",
    image:
      "https://res.cloudinary.com/dki6kmnto/image/upload/v1761194680/categories_gifted_basket_fxh3hi.png", // Will use placeholder or remove image dependency
    bgColor: "#F0F8F5",
    icon: "🎁",
    description: "Đang cập nhật...",
    scale: 1.2,
  },
  {
    text: "Lương thực",
    path: "groceries",
    image:
      "https://res.cloudinary.com/dki6kmnto/image/upload/v1761195063/grain_image_vzvkrj.png", // Will use placeholder or remove image dependency
    bgColor: "#FFF8E7",
    icon: "🍞",
    description: "Đang cập nhật...",
    scale: 1.2,
  },
];

export const dummyProducts = [
  // Empty array - products will be loaded from backend
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: null, // Will be replaced with actual product data
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: null, // Will be replaced with actual product data
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: null, // Will be replaced with actual product data
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];
