/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	findEventByCreatorId: function(req, res) {
		var _id = req.params.id
		return Events.find().where({creatorId: _id})
		.exec(function (err, _event){
			if (err) {
			  return res.json({
					 error: err
			 	});
	 		}
			// if (_event == undefined){
			// 	return res.notFound();
			// }
			return res.json({
				eventData: _event
			})
		})
	}

	//
	// findEventByCreatorId: function(req, res) {
	// 	var _creatorId = req.param('creatorId');
	// 	Events.findOne({ creatorId: _creatorId })
	// 			.exec(function(err, user) {
	// 					if (err) {
	// 							return res.json({
	// 									error: err
	// 							});
	// 					}
	// 					if (user === undefined) {
	// 							return res.notFound();
	// 					} else
	// 							return res.json({
	// 									notFound: false,
	// 									userData: user
	// 					});
	// 			});
	// 		}
	//
	//
	//




};
