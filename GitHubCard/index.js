import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


 axios.get('https://api.github.com/users/khpf')
  .then((res) => {
  let cards = document.querySelector('.cards');
  cards.append(cardCreator(res.data));
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

followersArray.push('tetondan');
followersArray.push('dustinmyers');
followersArray.push('justsml');
followersArray.push('luishrd');
followersArray.push('bigknell');

followersArray.forEach((user) =>{
  axios.get(`https://api.github.com/users/${user}`)
  .then((res) =>{
    console.log('complete')
    Users.append(cardCreator(res.data))
  })
  .catch((error) =>{
    console.log(error)
  })


})

const Users = document.querySelector('.container')



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardCreator(data){
  
  const div = document.createElement('div');
  div.classList.add('card');
  
  const img = document.createElement('img');
  img.src = data.avatar_url;
  div.append(img);

  const secDiv = document.createElement('div');
  secDiv.classList.add('card-info');
  div.append(secDiv);
  
  const name = document.createElement('h3');
  name.classList.add('name');
  name.innerHTML =  data.name;
  secDiv.append(name);

  const uname = document.createElement('p');
  uname.classList.add('username');
  uname.innerHTML = data.login;
  secDiv.append(uname);

  const geo = document.createElement('p');
  geo.innerHTML = data.location;
  secDiv.append(geo);

  const profile = document.createElement('p');
  profile.href = data.html_url;
  profile.innerHTML = data.html_url;
  secDiv.append(profile);
  
  const followers = document.createElement('p');
  followers.innerHTML = `${data.followers}`;
  secDiv.append(followers);

  const following = document.createElement('p');
  following.innerHTML = `${data.following}`;
  secDiv.append(following);

  const bio = document.createElement('p');
  bio.innerHTML = `${data.bio}`;
  secDiv.append(bio);

  return div;
}




/*




  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
