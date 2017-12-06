//get request for the API want to get info (post is wanting to give not get)
$.get('https://swapi.co/api/people/',{
    limit: 87
  }).done(function(response){
  	addSearchResult(response.results);
  	sideBar(response.results);
  });
function sideBar(results){
	for(var i=0; i<results.length; i++){
    	console.log(results[i].name);
    	var sideBar = document.getElementById('result-list');
    	var species = document.createElement('a');
    	species.href = results[i].species;
    	species.textContent = results[i].name;
    	species.style.textDecoration = "none";
    	species.style.color = "black";

    	$(sideBar).append(species).append('<br>');
  	}
}

// Adds a single result object to the page.
function addSearchResult(results){
	for(var i=0; i<results.length; i++){
		(function(i){
			setTimeout(function(){
				var slideShow = document.getElementById('result-details');
				var slideText = document.createElement('a');
				slideText.href = results[i].species;
				slideText.textContent = results[i].name;
				var img = document.getElementById('result-img').setAttribute('src', 'http://placekitten.com/200/300');
				$(slideShow).html(slideText);
			}, 3000*i);
		})(i);
	}
}
// Make a slideshow of pokemon appear on the page.
//set an interval


document.addEventListener('DOMContentLoaded', function(){
  console.log('script.js is loaded!');
});




// ## Bonuses

// * Go to [https://pokeapi.co/api/v2/pokemon/?limit=150](https://pokeapi.co/api/v2/pokemon/?limit=150) and use this info to create a full list of all original pokemon names in a sidebar.
// * Add an animation for transitioning
// * Add a stop button with `clearInterval`
// * If you have a list of pokemon on the sidebar, enable clicking on them to skip to that particular pokemon.

// ## Additional Resources

// * [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
// * [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
// * [The Poke API](https://pokeapi.co)