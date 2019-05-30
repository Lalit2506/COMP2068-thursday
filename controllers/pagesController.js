exports.show =  (req, res) => {
  const path = (req.path === '/') ? `/home` : req.path;

  //Render the path
  res.render(`pages${path}`); // views/pages/about

};