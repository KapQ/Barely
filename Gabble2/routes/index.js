var models = require('../models');

router.get('/', function(req, res, next){
  models.User.findAll().then(function(users){
    res.render('index', {
      title: 'MakersBnB',
      users: users
    });
  });
});

router.get('/', function(req, res){
  models.User.findAll({include: [models.Listing]}).then(function(users){
    res.render('index', {
      title: 'MakersBnB',
      users: users
    });
  });
});

module.exports = router;
