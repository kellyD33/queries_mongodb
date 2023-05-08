//use('sample_airbnb');
 //Punto 1
 //db.getSiblingDB("sample_airbnb").listingsAndReviews.aggregate([
   // {
     // $project: {
       // amenities_count: { $size: "$amenities" },
        //name: 1,
        //address: 1
      //}
    //},
   // { $sort: { amenities_count: -1 } },
    //{ $limit: 1 }
  //])

 //Punto 2
 //db.listingsAndReviews.aggregate([
   //  {
     //    "$match": { "amenities" : {
       //      "$in" : ["Wifi", "Internet"]}
        // }
     //},{
       //  "$count" : "nroPropiedadesInternet"
     //}
//])
//Punto 3
//db.listingsAndReviews.aggregate([
    //{
     // $match: {
       // 'address.country': 'Brazil',
        //'amenities': 'Ethernet connection',
        //'review_scores.review_score_rating': { $gte: 80 },
        //'reviews': { $exists: true, $not: { $size: 0 } }
      //}
    //},
    //{
      //$addFields: {
        //commentCount: { $size: '$reviews' }
      //}
    //},
    //{
      //$match: {
        //commentCount: { $gte: 50 }
      //}
    //},
    //{
      //$project: {
        //_id: 0,
        //name: 1,
        //'address.country': 1,
        //'address.city': 1,
        //'address.street': 1,
        //'amenities': 1,
        //'review_scores.review_score_rating': 1,
        //commentCount: 1
      //}
    //}
  //])
  /**
   Punto 4
  db.listingsAndReviews.aggregate([
  {
    $match: {
      "property_type": "House"
    }
  },
  {
    $group: {
      _id: "$address.country",
      avg_price: { $avg: "$price" }
    }
  }
])
  
*/
//use('sample_restaurants');