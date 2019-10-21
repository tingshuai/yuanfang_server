var testPaper = require('../models/testPaper');

var async = require('async');

exports.getTestPaper = function(req, res) {   
    
    async.parallel({
        testPaper: function(callback) {
            testPaper.find({}, callback); // Pass an empty object as match condition to find all documents of this collection
        }
    }, function(err, results) {
        res.json( err ? err : results );
    });
};
