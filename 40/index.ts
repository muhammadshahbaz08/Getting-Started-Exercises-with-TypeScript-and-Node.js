/** Question 40
 * Album: Write a function called make_album() that builds a Object describing a music album. 
 * The function should take in an artist name and an album title, and it should return a Object containing 
 * these two pieces of information. 
 * Use the function to make three dictionaries representing different albums. 
 * Print each return value to show that Objects are storing the album information correctly. 
 * Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
 * If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
 * Make at least one new function call that includes the number of tracks on an album.

 */
type Album = {
  artistName: string;
  albumTitle: string;
  numberOfTracks?: number;
};

function make_album(
  artistName: string,
  albumTitle: string,
  numberOfTracks?: number
): Album {
  const albumReturn: Album = {
    artistName: artistName,
    albumTitle: albumTitle,
  };

  if (numberOfTracks) {
    albumReturn.numberOfTracks = numberOfTracks;
  }

  return albumReturn;
}

const album1 = make_album("Artist Alpha", "Title Abc");
const album2 = make_album("Artist Beta", "Title yzn");
const album3 = make_album("Artist Gamma", "Title yzn", 10);

console.log(album1);
console.log(album2);
console.log(album3);
