// Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

// Export at the end of the burger.js file.
var orm = require('../config/orm.js');

var burger = {
	
	all: function (callback) {
		orm.all('burgers', function (result) {
			callback(result);
		});
	},
	
	create: function (cols, vals, callback) {
		orm.create('burgers', cols, vals, function (result) {
			callback(result);
		});
	},
		
	update: function (objColVals, condition, callback) {
		orm.update('burgers', objColVals, condition, function (result) {
			callback(result);
		});
	},
    
	delete: function (condition, callback) {
		orm.delete('burgers', condition, function (result) {
			callback(result);
		});
	}
};

module.exports = burger;