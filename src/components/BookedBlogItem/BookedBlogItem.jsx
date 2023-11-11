const bookMarkStyle = {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
    border:"1px solid gray",
    fontSize:'1.2rem'
}


const BookedBlogItem = ({bookedItem}) => {
  return(
    <div style={bookMarkStyle}>
    <h5>{bookedItem.BlogName}</h5>
  </div>
  )
};
export default BookedBlogItem;
