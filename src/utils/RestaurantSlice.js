import { mockRestaurants } from "./mockRestaurants";

const PAGE_SIZE = 8;
export const getRestaurantByPage = ({page})=>{

   const start = (page-1)*PAGE_SIZE;
   const end = page*PAGE_SIZE;
   return mockRestaurants.slice(start , end);
}