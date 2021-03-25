module.exports = {
  star_rating: (rating) => {
    let star = "⭐";
    for (let i = 0; i < rating-1; i++) {
      star += "⭐"
    }
    return star
  },
};
