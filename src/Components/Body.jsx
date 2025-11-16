
import Card from './Card';
import resList from '../utils/mockData'; 


// const resList = [{
// "card": {
// "card": {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "1220097",
// "name": "Cafe Healthy High by Nirula's",
// "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/12/bc42ef67-2879-4a8b-aec3-e51e50e9e85b_25a2aba2-03bd-4afe-8dfa-898839ecc408.jpg",
// "locality": "Connaught Place",
// "areaName": "Connaught Place",
// "costForTwo": "₹500 for two",
// "cuisines": [
// "Grill",
// "Salads",
// "Pizzas",
// "Healthy Food",
// "Burgers"
// ],
// "avgRating": 4.2,
// "parentId": "390483",
// "avgRatingString": "4.2",
// "totalRatingsString": "4",
// "promoted": true,
// "adTrackingId": "cid=41266293-a579-4b11-8693-2d3d6f50c529~p=0~adgrpid=41266293-a579-4b11-8693-2d3d6f50c529#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1220097~plpr=COLLECTION~eid=4ba358ec-8679-44f4-950e-991dc282e155~srvts=1763278041143~collid=83631",
// "sla": {
// "deliveryTime": 52,
// "lastMileTravel": 4.5,
// "serviceability": "SERVICEABLE",
// "slaString": "50-60 mins",
// "lastMileTravelString": "4.5 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-11-17 04:00:00",
// "opened": true
// },
// "badges": {
// "imageBadges": [
// {
// "imageId": "High%20Protein/rx%20tag%205.png",
// "description": "High Protein"
// }
// ]
// },
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "textExtendedBadges": {},
// "textBased": {},
// "imageBased": {
// "badgeObject": [
// {
// "attributes": {
// "imageId": "High%20Protein/rx%20tag%205.png",
// "description": "High Protein"
// }
// }
// ]
// }
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹79",
// "logoCtx": {
// "text": "BENEFITS"
// }
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {},
// "commsStyling": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "isNewlyOnboarded": true,
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "--"
// }
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
// "campaignId": "41266293-a579-4b11-8693-2d3d6f50c529"
// },
// "analytics": {},
// "cta": {
// "link": "swiggy://menu?restaurant_id=1220097&source=collection&query=Pizza",
// "text": "RESTAURANT_MENU",
// "type": "DEEPLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
// },
// "relevance": {
// "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
// "sectionId": "MENU_RETURN_FOOD"
// }
// }
// },
// {
// "card": {
// "card": {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "859167",
// "name": "Chicago Pizza",
// "cloudinaryImageId": "bvbdng0dlwvsskgksjkd",
// "locality": "Omaxe Chandni Chowk Mall",
// "areaName": "Chandni chowk ",
// "costForTwo": "₹300 for two",
// "cuisines": [
// "Pizzas",
// "Fast Food"
// ],
// "avgRating": 4.1,
// "parentId": "60277",
// "avgRatingString": "4.1",
// "totalRatingsString": "227",
// "sla": {
// "deliveryTime": 39,
// "lastMileTravel": 1.3,
// "serviceability": "SERVICEABLE",
// "slaString": "35-40 mins",
// "lastMileTravelString": "1.3 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-11-16 23:00:00",
// "opened": true
// },
// "badges": {},
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "textBased": {},
// "imageBased": {},
// "textExtendedBadges": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹119",
// "logoCtx": {
// "text": "BENEFITS"
// }
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {},
// "commsStyling": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "--"
// }
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
// },
// "analytics": {},
// "cta": {
// "link": "swiggy://menu?restaurant_id=859167&source=collection&query=Pizza",
// "text": "RESTAURANT_MENU",
// "type": "DEEPLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
// },
// "relevance": {
// "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
// "sectionId": "MENU_RETURN_FOOD"
// }
// }
// },
// {
// "card": {
// "card": {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "1017018",
// "name": "Bikanervala",
// "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/2/172e2cf2-a5e5-4689-942b-1b4059c88a91_cdde3aa6-a8de-4ca1-b7df-0f54bda0db1b.jpg",
// "locality": "Devika Bazaar",
// "areaName": "Sadar Bazaar",
// "costForTwo": "₹400 for two",
// "cuisines": [
// "Indian",
// "Continental",
// "Chinese",
// "Snacks"
// ],
// "avgRating": 4.3,
// "veg": true,
// "parentId": "45936",
// "avgRatingString": "4.3",
// "totalRatingsString": "95",
// "promoted": true,
// "adTrackingId": "cid=34461861~p=6~adgrpid=34461861#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1017018~plpr=COLLECTION~eid=1b3061ad-ffa4-473f-98c6-d5898a89603e~srvts=1763278041143~collid=83631",
// "sla": {
// "deliveryTime": 40,
// "lastMileTravel": 3.6,
// "serviceability": "SERVICEABLE",
// "slaString": "35-45 mins",
// "lastMileTravelString": "3.6 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-11-16 20:45:00",
// "opened": true
// },
// "badges": {},
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "textBased": {},
// "imageBased": {},
// "textExtendedBadges": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹11",
// "logoCtx": {
// "text": "BENEFITS"
// }
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {},
// "commsStyling": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "--"
// }
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
// "campaignId": "34461861"
// },
// "analytics": {},
// "cta": {
// "link": "swiggy://menu?restaurant_id=1017018&source=collection&query=Pizza",
// "text": "RESTAURANT_MENU",
// "type": "DEEPLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
// },
// "relevance": {
// "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
// "sectionId": "MENU_RETURN_FOOD"
// }
// }
// },
// {
// "card": {
// "card": {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "995027",
// "name": "La Pino'z Pizza",
// "cloudinaryImageId": "l00ktr91duqpodxm9vnk",
// "locality": "OMAXE",
// "areaName": "CHANDNI CHOWK",
// "costForTwo": "₹250 for two",
// "cuisines": [
// "Pizzas",
// "Pastas",
// "Italian",
// "Desserts",
// "Beverages"
// ],
// "avgRating": 3.9,
// "parentId": "4961",
// "avgRatingString": "3.9",
// "totalRatingsString": "450",
// "sla": {
// "deliveryTime": 43,
// "lastMileTravel": 1.4,
// "serviceability": "SERVICEABLE",
// "slaString": "40-50 mins",
// "lastMileTravelString": "1.4 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-11-16 23:59:00",
// "opened": true
// },
// "badges": {},
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "textBased": {},
// "imageBased": {},
// "textExtendedBadges": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹109",
// "logoCtx": {
// "text": "BENEFITS"
// }
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {},
// "commsStyling": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "--"
// }
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
// },
// "analytics": {},
// "cta": {
// "link": "swiggy://menu?restaurant_id=995027&source=collection&query=Pizza",
// "text": "RESTAURANT_MENU",
// "type": "DEEPLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
// },
// "relevance": {
// "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
// "sectionId": "MENU_RETURN_FOOD"
// }
// }
// },
// {
// "card": {
// "card": {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "25397",
// "name": "Oven Story Pizza",
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/8e4e013f-7c31-4c7b-b3e4-4c734008b775_25397.jpg",
// "locality": "Minto Road",
// "areaName": "Gandhi Market",
// "costForTwo": "₹400 for two",
// "cuisines": [
// "Pizzas",
// "Pastas",
// "Italian",
// "Desserts",
// "Beverages"
// ],
// "avgRating": 4.2,
// "parentId": "3534",
// "avgRatingString": "4.2",
// "totalRatingsString": "5.2K+",
// "promoted": true,
// "adTrackingId": "cid=fb0f56cb-6c73-4c99-bf69-d73e6491937e~p=12~adgrpid=fb0f56cb-6c73-4c99-bf69-d73e6491937e#ag8~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=25397~plpr=COLLECTION~eid=68e6f298-bd89-49cb-bae4-aa4607998a79~srvts=1763278041143~collid=83631",
// "sla": {
// "deliveryTime": 22,
// "lastMileTravel": 4.6,
// "serviceability": "SERVICEABLE",
// "slaString": "20-25 mins",
// "lastMileTravelString": "4.6 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-11-16 23:59:00",
// "opened": true
// },
// "badges": {},
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "textExtendedBadges": {},
// "textBased": {},
// "imageBased": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹99",
// "logoCtx": {
// "text": "BENEFITS"
// }
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {},
// "commsStyling": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "--"
// }
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
// "campaignId": "fb0f56cb-6c73-4c99-bf69-d73e6491937e"
// },
// "analytics": {},
// "cta": {
// "link": "swiggy://menu?restaurant_id=25397&source=collection&query=Pizza",
// "text": "RESTAURANT_MENU",
// "type": "DEEPLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
// },
// "relevance": {
// "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
// "sectionId": "MENU_RETURN_FOOD"
// }
// }
// },
// {
// "card": {
// "card": {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "804071",
// "name": "Pizza Hut",
// "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/7/e4a3d9a3-9997-4b73-accc-b029abeb1cc9_83eb91d8-7d3d-4463-8e7e-9188ba95bcf7.jpg_compressed",
// "locality": "Chandni Chowk",
// "areaName": "Chandni Chowk",
// "costForTwo": "₹350 for two",
// "cuisines": [
// "Pizzas"
// ],
// "avgRating": 4.2,
// "parentId": "721",
// "avgRatingString": "4.2",
// "totalRatingsString": "429",
// "sla": {
// "deliveryTime": 33,
// "lastMileTravel": 1.4,
// "serviceability": "SERVICEABLE",
// "slaString": "30-40 mins",
// "lastMileTravelString": "1.4 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-11-16 23:00:00",
// "opened": true
// },
// "badges": {},
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "textBased": {},
// "imageBased": {},
// "textExtendedBadges": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹99",
// "logoCtx": {
// "text": "BENEFITS"
// }
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {},
// "commsStyling": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "4.8",
// "ratingCount": "122"
// },
// "source": "GOOGLE",
// "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
// },
// "analytics": {},
// "cta": {
// "link": "swiggy://menu?restaurant_id=804071&source=collection&query=Pizza",
// "text": "RESTAURANT_MENU",
// "type": "DEEPLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
// },
// "relevance": {
// "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
// "sectionId": "MENU_RETURN_FOOD"
// }
// }
// },
// {
// "card": {
// "card": {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "735722",
// "name": "ENSO - Sourdough Pizza by Nomad",
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/8a800bf4-1432-418e-ad55-dd1d2d81aefe_735722.jpg",
// "locality": "Jain Mandir Marg",
// "areaName": "Connaught Place",
// "costForTwo": "₹850 for two",
// "cuisines": [
// "Pizzas",
// "Fast Food",
// "Desserts",
// "Salads",
// "Beverages"
// ],
// "avgRating": 4.3,
// "parentId": "77344",
// "avgRatingString": "4.3",
// "totalRatingsString": "356",
// "promoted": true,
// "adTrackingId": "cid=34476752~p=15~adgrpid=34476752#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=735722~plpr=COLLECTION~eid=3054c551-4f2b-4881-ba67-3522554a1bb9~srvts=1763278041143~collid=83631",
// "sla": {
// "deliveryTime": 43,
// "lastMileTravel": 5,
// "serviceability": "SERVICEABLE",
// "slaString": "40-45 mins",
// "lastMileTravelString": "5.0 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-11-17 04:00:00",
// "opened": true
// },
// "badges": {
// "imageBadges": [
// {
// "imageId": "newg.png",
// "description": "Gourmet"
// }
// ]
// },
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "imageBased": {
// "badgeObject": [
// {
// "attributes": {
// "imageId": "newg.png",
// "description": "Gourmet"
// }
// }
// ]
// },
// "textExtendedBadges": {},
// "textBased": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹299",
// "logoCtx": {
// "text": "BENEFITS"
// }
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {},
// "commsStyling": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "--"
// }
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
// "campaignId": "34476752"
// },
// "analytics": {},
// "cta": {
// "link": "swiggy://menu?restaurant_id=735722&source=collection&query=Pizza",
// "text": "RESTAURANT_MENU",
// "type": "DEEPLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
// },
// "relevance": {
// "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
// "sectionId": "MENU_RETURN_FOOD"
// }}}];

const Body = ()=>{
  return (
    <>
    <div className='body'>
       <input type="text" className="search"placeholder='search....'/>
      <div className="card-section">
      {
        resList.map((restaurant)=> <Card key={restaurant.card.card.info.id} resData={restaurant}/>)
      }
     
       </div>
    </div>
   
    </>
  )
}

export default Body;