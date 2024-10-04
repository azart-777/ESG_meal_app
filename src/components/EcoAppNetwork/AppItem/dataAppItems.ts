import { cheap_it_phone } from '../../../assets/images';
import { meal_count_phone } from '../../../assets/images';
import { eco_meal_phone } from '../../../assets/images';
import { network_lines_center } from '../../../assets/images';

export interface dataAppItems {
  appImageSrc: string;
  appImageAlt: string;
  linesImageSrc: string;
  linesImageAlt: string;
  appClass: string;
  linesClass: string;
}

export const appItems: dataAppItems[] = [
  {
    appImageSrc: eco_meal_phone,
    appImageAlt: "Eco meal",
    linesImageSrc: network_lines_center,
    linesImageAlt: "network_lines_right",
    appClass: "eco-app-network__app--eco-meal",
    linesClass: "eco-app-network__network_lines_left"
  },
  {
    appImageSrc: cheap_it_phone,
    appImageAlt: "Cheap it",
    linesImageSrc: network_lines_center,
    linesImageAlt: "network_lines_center",
    appClass: "eco-app-network__app--cheap-it",
    linesClass: "eco-app-network__network_lines_center"
  },
  {
    appImageSrc: meal_count_phone,
    appImageAlt: "Meal count",
    linesImageSrc: network_lines_center,
    linesImageAlt: "network_lines_left",
    appClass: "eco-app-network__app--meal-count",
    linesClass: "eco-app-network__network_lines_right"
  }
];