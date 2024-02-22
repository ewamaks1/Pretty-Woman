import { Coords } from "../Interfaces/Interfaces";

export const defaultCenter: Coords = {
  lat: 53.136611627354476,
  lng: 23.143450455402267,
};

export const API_KEY = process.env.REACT_APP_MY_API_KEY;

export const URL_map = `https://www.google.com/maps?q=${defaultCenter.lat},${defaultCenter.lng}`;
