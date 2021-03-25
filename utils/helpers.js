module.exports = {
  star_rating: (rating) => {
    let stars;
    let star = "⭐";
    for (let i = 0; i < rating; i++) {
      stars += star
    }
    return stars
  },
};
