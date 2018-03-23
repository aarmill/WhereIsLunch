/**
 * @name main.js
 * @description This will contain the bulk of our logic.
 * 
 * The following file should intercept when a user clicks find lunch and then
 * perform a search using the google maps API to find all nearby food outlets and pick a random
 * one from the list that the user can then eat lunch at.
 */

// I think it can be a const since we shouldn't be changing it.
// Get the element with the id #find-lunch within our HTML page. @return Object
const findLunch = document.getElementById("find-lunch"); // Im getting used to python and powershell where ";" doesn't exist.

// Attach an event listener to our find-lunch button that will activate whenever the user clicks it.
// TODO: Add some throttling to this so the user can't just continue clicking it performing bulk requests.
findLunch.addEventListener("click", function() {
	/**
	 * Here is where the bulk of our logic will occur
	 *
	 * TODO: 
	 * 1. Get the value from the location text field 	document.getElementById("text-field-id").value
	 * 2. Send that value to google maps along with the request for food 	Since we have jQuery we can use the $.ajax() function
	 * 3. Retrieve the results from google maps [JSON] 	This will be a callback from the $.ajax() function
	 * 4. Pick a random item from the results 	Pretty simple
	 * 5. Display the picked item 	Again, pretty simple
	 *
	 * Improvements:
	 * 1. Set a kilometer radius
	 * 2. Something
	 */
	
});