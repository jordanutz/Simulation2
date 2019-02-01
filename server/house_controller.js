module.exports = {
  getListings: (req, res) => {
    console.log('hit')
    const db = req.app.get('db')
    console.log('hit')
    db.get_listings()
    .then(listing => res.status(200).send(listing))
    .catch(error => console.log(error))
  },

  createListing: (req, res) => {
    console.log('hit')
    const db = req.app.get('db')
    const {name, address, city, state, zip} = req.body
    db.create_listing(name, address, city, state, zip)
    .then(listings => res.status(200).send(listings))
    .catch(error => console.log(error))
  }
}
