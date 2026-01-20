const IMAGES = {
  KFC: "bdcd233971b7c81bf77e1fa4471280eb",
  MCD: "ee5f8e06b300efc07c9fe3f4df40dfc4",
  SUBWAY: "1ace5fa65eff3e1223feb696c956b38b",
  MOMO: "64fd45fd9f44c1737bc446e470bed666",
  ICE: "b0c73e34d7aab7e6f5d56eec0db4c8c3",
};

export const mockRestaurants = [
  // 1–5
  {
    info: {
      id: "1",
      name: "Burger King",
      avgRating: 4.6,
      cuisines: ["Burgers", "Fast Food"],
      locality: "Sector 18",
      cloudinaryImageId: IMAGES.MCD,
      sla: { slaString: "25 mins" },
    },
  },
  {
    info: {
      id: "2",
      name: "Domino's Pizza",
      avgRating: 4.4,
      cuisines: ["Pizza", "Italian"],
      locality: "City Center",
      cloudinaryImageId: IMAGES.SUBWAY,
      sla: { slaString: "30 mins" },
    },
  },
  {
    info: {
      id: "3",
      name: "KFC",
      avgRating: 4.3,
      cuisines: ["Fried Chicken", "Fast Food"],
      locality: "Mall Road",
      cloudinaryImageId: IMAGES.KFC,
      sla: { slaString: "28 mins" },
    },
  },
  {
    info: {
      id: "4",
      name: "Subway",
      avgRating: 4.2,
      cuisines: ["Healthy", "Sandwich"],
      locality: "Sector 62",
      cloudinaryImageId: IMAGES.SUBWAY,
      sla: { slaString: "22 mins" },
    },
  },
  {
    info: {
      id: "5",
      name: "Wow! Momo",
      avgRating: 4.5,
      cuisines: ["Momos", "Tibetan"],
      locality: "Metro Mall",
      cloudinaryImageId: IMAGES.MOMO,
      sla: { slaString: "24 mins" },
    },
  },

  // 6–10
  {
    info: {
      id: "6",
      name: "McDonald's",
      avgRating: 4.6,
      cuisines: ["Burgers", "Snacks"],
      locality: "High Street",
      cloudinaryImageId: IMAGES.MCD,
      sla: { slaString: "20 mins" },
    },
  },
 
  {
    info: {
      id: "8",
      name: "Biryani Blues",
      avgRating: 4.6,
      cuisines: ["Biryani", "Hyderabadi"],
      locality: "Sector 15",
      cloudinaryImageId: IMAGES.KFC,
      sla: { slaString: "32 mins" },
    },
  },
  {
    info: {
      id: "9",
      name: "Barbeque Nation",
      avgRating: 4.8,
      cuisines: ["BBQ", "North Indian"],
      locality: "DLF Phase 3",
      cloudinaryImageId: IMAGES.KFC,
      sla: { slaString: "40 mins" },
    },
  },
  

    {
    info: {
        id: "11",
        name: "Food Hub 1",
        avgRating: 4.0,
        cuisines: ["Multi Cuisine", "Fast Food"],
        locality: "City Area",
        cloudinaryImageId: IMAGES.KFC,
        sla: { slaString: "20 mins" },
    },
    },
    {
    info: {
        id: "12",
        name: "Food Hub 2",
        avgRating: 4.1,
        cuisines: ["Multi Cuisine", "Fast Food"],
        locality: "City Area",
        cloudinaryImageId: IMAGES.MCD,
        sla: { slaString: "21 mins" },
    },
    },
    {
    info: {
        id: "13",
        name: "Food Hub 3",
        avgRating: 4.2,
        cuisines: ["Multi Cuisine", "Fast Food"],
        locality: "City Area",
        cloudinaryImageId: IMAGES.SUBWAY,
        sla: { slaString: "22 mins" },
    },
    },
    {
    info: {
        id: "14",
        name: "Food Hub 4",
        avgRating: 4.3,
        cuisines: ["Multi Cuisine", "Fast Food"],
        locality: "City Area",
        cloudinaryImageId: IMAGES.MOMO,
        sla: { slaString: "23 mins" },
    },
    },
   
    {
    info: {
        id: "16",
        name: "Food Hub 6",
        avgRating: 4.0,
        cuisines: ["Multi Cuisine", "Fast Food"],
        locality: "City Area",
        cloudinaryImageId: IMAGES.KFC,
        sla: { slaString: "25 mins" },
    },
    },
    {
    info: {
        id: "17",
        name: "Food Hub 7",
        avgRating: 4.1,
        cuisines: ["Multi Cuisine", "Fast Food"],
        locality: "City Area",
        cloudinaryImageId: IMAGES.MCD,
        sla: { slaString: "26 mins" },
    },
    },
    {
    info: {
        id: "18",
        name: "Food Hub 8",
        avgRating: 4.2,
        cuisines: ["Multi Cuisine", "Fast Food"],
        locality: "City Area",
        cloudinaryImageId: IMAGES.SUBWAY,
        sla: { slaString: "27 mins" },
    },
    },
    {
    info: {
        id: "19",
        name: "Food Hub 9",
        avgRating: 4.3,
        cuisines: ["Multi Cuisine", "Fast Food"],
        locality: "City Area",
        cloudinaryImageId: IMAGES.MOMO,
        sla: { slaString: "28 mins" },
    },
    },
    
        {
    info: {
        id: "21",
        name: "Taste Corner 1",
        avgRating: 4.2,
        cuisines: ["Snacks", "Street Food"],
        locality: "Market Road",
        cloudinaryImageId: IMAGES.MCD,
        sla: { slaString: "18 mins" },
    },
    },
    {
    info: {
        id: "22",
        name: "Taste Corner 2",
        avgRating: 4.3,
        cuisines: ["Snacks", "Street Food"],
        locality: "Market Road",
        cloudinaryImageId: IMAGES.SUBWAY,
        sla: { slaString: "19 mins" },
    },
    },
    {
    info: {
        id: "23",
        name: "Taste Corner 3",
        avgRating: 4.1,
        cuisines: ["Snacks", "Street Food"],
        locality: "Market Road",
        cloudinaryImageId: IMAGES.KFC,
        sla: { slaString: "20 mins" },
    },
    },
   
    {
    info: {
        id: "25",
        name: "Taste Corner 5",
        avgRating: 4.5,
        cuisines: ["Snacks", "Street Food"],
        locality: "Market Road",
        cloudinaryImageId: IMAGES.MOMO,
        sla: { slaString: "22 mins" },
    },
    },
    {
    info: {
        id: "26",
        name: "Taste Corner 6",
        avgRating: 4.2,
        cuisines: ["Snacks", "Street Food"],
        locality: "Market Road",
        cloudinaryImageId: IMAGES.MCD,
        sla: { slaString: "23 mins" },
    },
    },
    {
    info: {
        id: "27",
        name: "Taste Corner 7",
        avgRating: 4.3,
        cuisines: ["Snacks", "Street Food"],
        locality: "Market Road",
        cloudinaryImageId: IMAGES.SUBWAY,
        sla: { slaString: "24 mins" },
    },
    },
    {
    info: {
        id: "28",
        name: "Taste Corner 8",
        avgRating: 4.1,
        cuisines: ["Snacks", "Street Food"],
        locality: "Market Road",
        cloudinaryImageId: IMAGES.KFC,
        sla: { slaString: "25 mins" },
    },
    },
    
    {
    info: {
        id: "30",
        name: "Taste Corner 10",
        avgRating: 4.5,
        cuisines: ["Snacks", "Street Food"],
        locality: "Market Road",
        cloudinaryImageId: IMAGES.MOMO,
        sla: { slaString: "27 mins" },
    },
    },
    {
    info: {
        id: "31",
        name: "Spice Hub",
        avgRating: 4.4,
        cuisines: ["North Indian", "Chinese"],
        locality: "Ring Road",
        cloudinaryImageId: IMAGES.KFC,
        sla: { slaString: "30 mins" },
    },
    },
    {
    info: {
        id: "32",
        name: "Urban Tadka",
        avgRating: 4.5,
        cuisines: ["Punjabi", "Indian"],
        locality: "City Square",
        cloudinaryImageId: IMAGES.MCD,
        sla: { slaString: "28 mins" },
    },
    },
    {
    info: {
        id: "33",
        name: "Roll Nation",
        avgRating: 4.2,
        cuisines: ["Rolls", "Fast Food"],
        locality: "Metro Station",
        cloudinaryImageId: IMAGES.SUBWAY,
        sla: { slaString: "22 mins" },
    },
    },
    {
    info: {
        id: "34",
        name: "Momo Junction",
        avgRating: 4.6,
        cuisines: ["Momos", "Street Food"],
        locality: "Food Street",
        cloudinaryImageId: IMAGES.MOMO,
        sla: { slaString: "20 mins" },
    },
    },
    
    {
    info: {
        id: "36",
        name: "Grill & Chill",
        avgRating: 4.3,
        cuisines: ["Grill", "BBQ"],
        locality: "Highway Point",
        cloudinaryImageId: IMAGES.KFC,
        sla: { slaString: "35 mins" },
    },
    },
    {
    info: {
        id: "37",
        name: "Daily Dosa",
        avgRating: 4.1,
        cuisines: ["South Indian"],
        locality: "Temple Road",
        cloudinaryImageId: IMAGES.MCD,
        sla: { slaString: "24 mins" },
    },
    },
    {
    info: {
        id: "38",
        name: "Chai & Samosa",
        avgRating: 4.0,
        cuisines: ["Tea", "Snacks"],
        locality: "Bus Stand",
        cloudinaryImageId: IMAGES.SUBWAY,
        sla: { slaString: "16 mins" },
    },
    },
    {
    info: {
        id: "39",
        name: "Pasta Point",
        avgRating: 4.4,
        cuisines: ["Italian", "Pasta"],
        locality: "Central Park",
        cloudinaryImageId: IMAGES.MCD,
        sla: { slaString: "26 mins" },
    },
    },
    {
    info: {
        id: "40",
        name: "Street Zaika",
        avgRating: 4.5,
        cuisines: ["Street Food", "Indian"],
        locality: "Old City",
        cloudinaryImageId: IMAGES.KFC,
        sla: { slaString: "23 mins" },
    },
    },

    
    {
    info: {
        id: "42",
        name: "Rice Bowl",
        avgRating: 4.2,
        cuisines: ["Asian", "Rice"],
        locality: "Tech Park",
        cloudinaryImageId: IMAGES.SUBWAY,
        sla: { slaString: "27 mins" },
    },
    },
    {
    info: {
        id: "43",
        name: "Tandoori Tales",
        avgRating: 4.7,
        cuisines: ["Tandoor", "North Indian"],
        locality: "Sector 9",
        cloudinaryImageId: IMAGES.KFC,
        sla: { slaString: "34 mins" },
    },
    },
    {
    info: {
        id: "44",
        name: "Burger Bytes",
        avgRating: 4.3,
        cuisines: ["Burgers", "Fast Food"],
        locality: "IT Hub",
        cloudinaryImageId: IMAGES.MCD,
        sla: { slaString: "21 mins" },
    },
    },
    {
    info: {
        id: "45",
        name: "Noodle Nation",
        avgRating: 4.1,
        cuisines: ["Chinese", "Noodles"],
        locality: "Market Lane",
        cloudinaryImageId: IMAGES.SUBWAY,
        sla: { slaString: "29 mins" },
    },
    },
    
    {
    info: {
        id: "47",
        name: "Wrap World",
        avgRating: 4.2,
        cuisines: ["Wraps", "Fast Food"],
        locality: "College Area",
        cloudinaryImageId: IMAGES.MOMO,
        sla: { slaString: "24 mins" },
    },
    },
    {
    info: {
        id: "48",
        name: "Masala Express",
        avgRating: 4.4,
        cuisines: ["Indian", "Meals"],
        locality: "Railway Road",
        cloudinaryImageId: IMAGES.KFC,
        sla: { slaString: "31 mins" },
    },
    },
    {
    info: {
        id: "49",
        name: "Coffee Culture",
        avgRating: 4.3,
        cuisines: ["Coffee", "Snacks"],
        locality: "Business Bay",
        cloudinaryImageId: IMAGES.MCD,
        sla: { slaString: "20 mins" },
    },
    },
    {
    info: {
        id: "50",
        name: "Evening Bites",
        avgRating: 4.0,
        cuisines: ["Snacks", "Street Food"],
        locality: "Lake View",
        cloudinaryImageId: IMAGES.MOMO,
        sla: { slaString: "22 mins" },
    },
    },
    {
    info: {
        id: "51",
        name: "Masala Express",
        avgRating: 4.4,
        cuisines: ["Indian", "Meals"],
        locality: "Railway Road",
        cloudinaryImageId: IMAGES.KFC,
        sla: { slaString: "31 mins" },
    },
    },
    {
    info: {
        id: "52",
        name: "Coffee Culture",
        avgRating: 4.3,
        cuisines: ["Coffee", "Snacks"],
        locality: "Business Bay",
        cloudinaryImageId: IMAGES.MCD,
        sla: { slaString: "20 mins" },
    },
    },
    {
    info: {
        id: "53",
        name: "Evening Bites",
        avgRating: 4.0,
        cuisines: ["Snacks", "Street Food"],
        locality: "Lake View",
        cloudinaryImageId: IMAGES.MOMO,
        sla: { slaString: "22 mins" },
    },
    },


];
