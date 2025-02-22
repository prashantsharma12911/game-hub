import { Genre } from './Genre';
import { Platform } from './Platform';
import { Publisher } from './Pulbisher';


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  genres : Genre[];
  publishers : Publisher[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
}
