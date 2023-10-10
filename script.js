const obj = { };
const dbParam = JSON.stringify(obj);
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
myObj = JSON.parse(this.responseText);
  let text = ""
  for (let x in myObj) {
    text += 
    myObj[x].name + " " +  myObj[x].rating + "<br>";


    //get the sum of all the values in javascript from the parsed JSON data
    //loop thru the 'ratings' and add them together and produce result thru your 'ratingTotal' id  
          let average = 0;  //set a variable that holds our average
          let total = 0; //saet up a variable that holds our total
          let rating = myObj.rating;  //reference the element in the "JSON" aka object literal we want
        
        for (i = 0; i < myObj.length; i++) {  //loop through the array
            total += myObj[i].rating; //adds up all the ratings
            average += myObj[i].rating / myObj.length;  //divides ratings total by the length of entries
          }
          console.log(average);  //display the average amount from JSON ratings
          console.log(total);  //display the total amount from the JSON ratings
          document.getElementById("ratingAverage").innerHTML = " " + Math.floor(average);
          document.getElementById("ratingTotal").innerHTML = " " + total;
         

}
//displays entire document on webpage
  document.getElementById("demo").innerHTML = text;
  



    
};
xmlhttp.open("GET", "data.json?x=" + dbParam);
xmlhttp.send();




