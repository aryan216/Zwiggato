import React from 'react';
import { useState } from 'react';
import "./Home.css"
const Bodyna = () =>{
  const [listOfRes,setListOfRes]=useState(resObj);
  return(
      <div className="struct">
           <div className="filter">
              <button className='filter-btn' onClick={()=>{
                const filtered=listOfRes.restaurants.filter((res)=>res.info.avgRating>4);
                setListOfRes({restaurants:filtered});
              }}>Top Rated Restaurants</button>
           </div>
           <div className="res-container">
               {listOfRes.restaurants.map((restaurant)=>(
               <div className="res-card">
                 <img className='res-image' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyl,f_auto,q_auto,w_660/"+restaurant.info.cloudinaryImageId} alt="" />
                 <h4>{restaurant.info.name}</h4>
                 <h5>{restaurant.info.locality}</h5>
                 <h5>{restaurant.info.avgRating}</h5>
                 <h5>{restaurant.info.costForTwo}</h5>
               </div>
               ))}
           </div>
      </div>
  )
}
const resObj={
  "restaurants": [
                  {
                    "info": {
                      "id": "221897",
                      "name": "Burger King",
                      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      "locality": "South X Mall",
                      "areaName": "Kidwai Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.2,
                      "feeDetails": {
                        "restaurantId": "221897",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 5100
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 5100
                      },
                      "parentId": "166",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-12 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "EVERY ITEM",
                        "subHeader": "@ ₹129"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/burger-king-south-x-mall-kidwai-nagar-kanpur-221897",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "287352",
                      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                      "cloudinaryImageId": "co43zqdrnfs1w5gq1sqn",
                      "locality": "SAKRAPUR",
                      "areaName": "NAGAR NIGAM FOOD SAFETY ZONE",
                      "costForTwo": "₹100 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Ice Cream Cakes"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "287352",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3500
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3500
                      },
                      "parentId": "582",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "21 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-11 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-sakrapur-nagar-nigam-food-safety-zone-kanpur-287352",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "144738",
                      "name": "Shukla Bhojnalay",
                      "cloudinaryImageId": "ewulfgphspwjubsiv97y",
                      "locality": "KDA Market",
                      "areaName": "Barra",
                      "costForTwo": "₹100 for two",
                      "cuisines": [
                        "North Indian",
                        "Thalis",
                        "South Indian",
                        "Chinese"
                      ],
                      "avgRating": 3.9,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "144738",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 6800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 6800
                      },
                      "parentId": "13488",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "27 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-12 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/shukla-bhojnalay-kda-market-barra-kanpur-144738",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "262891",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
                      "locality": "Govind Nagar",
                      "areaName": "Nandlal Chawraha",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Tibetan",
                        "Healthy Food",
                        "Asian",
                        "Chinese",
                        "Snacks",
                        "Continental",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "feeDetails": {
                        "restaurantId": "262891",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 7800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 7800
                      },
                      "parentId": "1776",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 6.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "34 mins",
                        "lastMileTravelString": "6.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-12 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/wow-momo-govind-nagar-nandlal-chawraha-kanpur-262891",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "316297",
                      "name": "NIC Ice Creams",
                      "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
                      "locality": "R K Nagar",
                      "areaName": "Darshan Purwa",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "316297",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 11800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 11800
                      },
                      "parentId": "6249",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 9.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "33 mins",
                        "lastMileTravelString": "9.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-12 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/nic-ice-creams-r-k-nagar-darshan-purwa-kanpur-316297",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "427714",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "hbmhqkydlpsr6kuvaje0",
                      "locality": "Kamal Chauraha",
                      "areaName": "Arya Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "427714",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 12600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 12600
                      },
                      "parentId": "2233",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 10.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "49 mins",
                        "lastMileTravelString": "10.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-kamal-chauraha-arya-nagar-kanpur-427714",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "359803",
                      "name": "Grameen Kulfi",
                      "cloudinaryImageId": "g3azphzmvsn8ykuagunt",
                      "locality": "R K Nagar",
                      "areaName": "Darshan Purwa",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "359803",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 11800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 11800
                      },
                      "parentId": "12175",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 9.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "32 mins",
                        "lastMileTravelString": "9.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-12 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/grameen-kulfi-r-k-nagar-darshan-purwa-kanpur-359803",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "334231",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "C Block",
                      "areaName": "Swaroop Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.6,
                      "feeDetails": {
                        "restaurantId": "334231",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 12600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 12600
                      },
                      "parentId": "721",
                      "avgRatingString": "3.6",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 10.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "42 mins",
                        "lastMileTravelString": "10.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-12 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/pizza-hut-c-block-swaroop-nagar-kanpur-334231",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "431047",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
                      "locality": "Darshan Purwa",
                      "areaName": "Lajpat Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.7,
                      "feeDetails": {
                        "restaurantId": "431047",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 10300
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 10300
                      },
                      "parentId": "4961",
                      "avgRatingString": "3.7",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 8.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "37 mins",
                        "lastMileTravelString": "8.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-darshan-purwa-lajpat-nagar-kanpur-431047",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "168087",
                      "name": "KFC",
                      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                      "locality": "Parwati Bagla Road",
                      "areaName": "Tilak Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                      ],
                      "avgRating": 3.9,
                      "feeDetails": {
                        "restaurantId": "168087",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 13900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 13900
                      },
                      "parentId": "547",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 11.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "39 mins",
                        "lastMileTravelString": "11.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-12 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/kfc-parwati-bagla-road-tilak-nagar-kanpur-168087",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "361087",
                      "name": "The Good Bowl",
                      "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
                      "locality": "Permat",
                      "areaName": "Harsh Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Pastas",
                        "Punjabi",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "361087",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 12600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 12600
                      },
                      "parentId": "7918",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 10.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "41 mins",
                        "lastMileTravelString": "10.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-12 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/the-good-bowl-permat-harsh-nagar-kanpur-361087",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "113214",
                      "name": "Pizza Cave",
                      "cloudinaryImageId": "ih3lep6epevw8zpzyjto",
                      "locality": "Shiv Katra Road",
                      "areaName": "Lal Bangla",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "113214",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 7800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 7800
                      },
                      "parentId": "8184",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 6.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "31 mins",
                        "lastMileTravelString": "6.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/pizza-cave-shiv-katra-road-lal-bangla-kanpur-113214",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "361085",
                      "name": "Sweet Truth - Cake and Desserts",
                      "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
                      "locality": "Permat",
                      "areaName": "Harsh Nagar",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Snacks",
                        "Bakery",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "feeDetails": {
                        "restaurantId": "361085",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 12600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 12600
                      },
                      "parentId": "4444",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 10.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40 mins",
                        "lastMileTravelString": "10.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-12 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-permat-harsh-nagar-kanpur-361085",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "361084",
                      "name": "Firangi Bake",
                      "cloudinaryImageId": "ocphxvfsgr2ndsrtcrdi",
                      "locality": "Permat",
                      "areaName": "Harsh Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Mexican",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "361084",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 12600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 12600
                      },
                      "parentId": "3952",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 10.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "43 mins",
                        "lastMileTravelString": "10.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-12 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/firangi-bake-permat-harsh-nagar-kanpur-361084",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "361081",
                      "name": "Faasos - Wraps & Rolls",
                      "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
                      "locality": "Permat",
                      "areaName": "Harsh Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "North Indian",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "361081",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 12600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 12600
                      },
                      "parentId": "21809",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 47,
                        "lastMileTravel": 10.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "47 mins",
                        "lastMileTravelString": "10.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-12 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-permat-harsh-nagar-kanpur-361081",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "93895",
                      "name": "Keventers - Milkshakes & Desserts",
                      "cloudinaryImageId": "f0e94c984813053f46c214f18ce73d59",
                      "locality": "Arya Nagar",
                      "areaName": "Swaroop Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Beverages",
                        "Ice Cream",
                        "Desserts",
                        "Healthy Food"
                      ],
                      "avgRating": 4.1,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "93895",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 12600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 12600
                      },
                      "parentId": "268997",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 10.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "37 mins",
                        "lastMileTravelString": "10.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-arya-nagar-swaroop-nagar-kanpur-93895",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "77700",
                      "name": "R.S Bhojnalaya",
                      "cloudinaryImageId": "wniumg41joijmp5bscis",
                      "locality": "Avon Market Road",
                      "areaName": "Kakadeo",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "Thalis",
                        "Beverages",
                        "Tandoor"
                      ],
                      "avgRating": 3.8,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "77700",
                        "fees": [
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 12600
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 12600
                      },
                      "parentId": "163921",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 10.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40 mins",
                        "lastMileTravelString": "10.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-12 00:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/r-s-bhojnalaya-avon-market-road-kakadeo-kanpur-77700",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "500850",
                      "name": "Vadilal Ice Creams",
                      "cloudinaryImageId": "y7gidhlolat7d3tajnb6",
                      "locality": "Shastri Nagar",
                      "areaName": "Vijay Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "500850",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 10300
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 10300
                      },
                      "parentId": "11745",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 8.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "32 mins",
                        "lastMileTravelString": "8.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/vadilal-ice-creams-shastri-nagar-vijay-nagar-kanpur-500850",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "318387",
                      "name": "Zyka Restaurant(Parade)",
                      "cloudinaryImageId": "dpawm0slsgjpzdgybh6v",
                      "locality": "Naveen Market Road",
                      "areaName": "Parade",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Mughlai",
                        "Biryani",
                        "North Indian",
                        "Chinese",
                        "Tandoor",
                        "Pizzas"
                      ],
                      "avgRating": 4,
                      "feeDetails": {
                        "restaurantId": "318387",
                        "fees": [
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 10300
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 10300
                      },
                      "parentId": "230264",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 8.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "39 mins",
                        "lastMileTravelString": "8.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/zyka-restaurant-parade-naveen-market-road-parade-kanpur-318387",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "125424",
                      "name": "Ajmeri Darbar Chamanganj",
                      "cloudinaryImageId": "v8vwffojtsoarkcnsoih",
                      "locality": "Chaman Ganj",
                      "areaName": "Chamanganj",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Mughlai"
                      ],
                      "avgRating": 4,
                      "feeDetails": {
                        "restaurantId": "125424",
                        "fees": [
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 10300
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 10300
                      },
                      "parentId": "28360",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 8.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "39 mins",
                        "lastMileTravelString": "8.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-11 23:58:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/ajmeri-darbar-chamanganj-chaman-ganj-chamanganj-kanpur-125424",
                      "type": "WEBLINK"
                    }
                  }
  ]
}
const Home = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src="./Assets/logo.png" alt="" />
      </div>
      <div className="navitems">
        <ul className='list'>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    
  )
}

export {Home,Bodyna};