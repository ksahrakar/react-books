import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(keywords) {
    return axios.get(BASEURL+keywords+"&printType=books&maxResults=20");
  }
};
