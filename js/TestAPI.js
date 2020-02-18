//DANIELAS NOTE: Please follow the instructions on the code so you can have fun with the API's HERE------>

//DANIELA'S NOTE: This part of the code allows you to get access to the API and get JSON files
const client = contentful.createClient({
  space: '9ibhbvc9100k', // 1. add space id as a string get it from WebApp
  accessToken: 's5fVSTk-C4DPzuDb6P2YwCWTg31Iaz9pjoRLvlG5hR4' //2. add accessToken as a string get it from WebApp
})

//DANIELAS NOTE: Here we are getting JSON from Content Managment API
client
  .getEntry('7r1rA6QmtKZLvJ1Q8VDe9D')//3. get entry from WebApp and add it as string 
  .then(function (entry) {
      // logs the entry metadata
      console.log(entry.sys)
      fieldsData(entry.fields)
      // logs the field with ID title
   })   //console.log(entry.fields.geolocalization)
  .catch(err => console.log(err))
  


//DANIELAS NOTE: Here we are getting JSON from Images Delivery API
client
  .getAsset("Rs6by3UMs2J7mEc3YUUrX") //4. get asset from WebApp and add it as string 
  .then(function (asset ){
    
    console.log(asset.fields)  
    assetsField(asset.fields)

  }).catch(err => console.log(err))


  function fieldsData(value){
      //console.log(value)
      $("#title").html(value.title)
      $("#decription").html(value.text)

  }


  function assetsField(value){
    $("#showcase").css({'background-image': 'url(https:' + value.file.url + '?fit=crop&w=2000&h=1000)',
    'background-repeat': 'no-repeat'});
  }

  //5. Final step save your changes and refresh the website 1... 2.... 3.... MAGIC it should change :D!!!!