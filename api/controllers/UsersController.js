/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	findUserByUsername: function(req, res) {
		var _username = req.params.id
		return Users.find().where({username: _username})
		.exec(function (err, _user){
			if (err) {
				return res.json({
					 error: err
				});
			}
			// if (_event == undefined){
			// 	return res.notFound();
			// }
			return res.json({
				user: _user
			})
		})
	}



};
