export interface Coords {
  lat: number;
  lng: number;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export interface NavItem {
  label: string;
  path: string;
}

interface PriceItem {
  name: string;
  price: string;
  time: string;
}

export interface PriceData {
  [key: string]: PriceItem[];
}

export interface SliderSettings {
  dots: boolean;
  className: string;
  centerMode: boolean;
  infinite: boolean;
  centerPadding: string;
  slidesToShow: number;
  speed: number;
}
