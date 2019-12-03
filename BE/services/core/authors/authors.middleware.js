const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {	
	router.get('/authors', (req, res, next) => {
			let url_parts = url.parse(req.originalUrl, true),
				query = url_parts.query,
				queryStr = query.query,
				authors = server.db.getState().authors;
			
			if (!!query.textFragment) {
				authors = authors.filter((author) => author.name.concat(author.name).toUpperCase().indexOf(query.textFragment.toUpperCase()) >= 0);
			}
			
			res.json(authors);
	});
	return router;
};
