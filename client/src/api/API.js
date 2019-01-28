import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// api routes
export default {
  search: function(keywords) {
    return axios.get(BASEURL+keywords+"&printType=books&maxResults=10");
  },
  saveBook: function(oneBook){
    return axios.post("/api/saved",oneBook)
  },
  getBooks: function(){
    return axios.get("/api/saved")
  },
  deleteBook: function(id){
    return axios.delete("/api/saved/"+id)
  }
};
