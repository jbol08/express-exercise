const express = require("express");
const ExpressError = require("./expressError");
const app = express();
const { mean,median,mode} = require('./equations')


app.use(express.json());

app.get('/mean', function (req, res, next) {
    try {
        if (!req.query.numbers)
            throw new ExpressError('Must use numbers separated by commas', 400)
        let result = {
            operation: "mean",
            result: mean(nums)
        }       
        return res.send(result)
        
    } catch (error) {
        return next(error)
    }   
});

app.get('/median', function (req, res, next) {
    try {
        if (!req.query.numbers)
            throw new ExpressError('Must use numbers separated by commas', 400)
        let result = {
            operation: 'median',
            result: median(numbers)
        }
        return res.send(result)
    } catch (error) {
        return next(error)
    }
});

app.get('/mode', function (req, res, next) {
    try {
        if (!req.query.numbers)
            throw new ExpressError('Must use numbers separated by commas', 400)
        let result = {
            operation: 'mode',
            result: mode(numbers)
        }
        return res.send(result)
    } catch (error) {
        return next(error)
    }
        
});


app.use((req, res, next) => {
	const custom404 = new ExpressError('Not Found', 404);
	return next(custom404);
});

app.use((err, req, res, next) => {
	// the default status is 500 Internal Server Error
	let status = err.status || 500;
	let message = err.message;

	return res.status(status).json({
		error : { message, status }
	});
});

app.listen(3000, function() {
	console.log('Server started on port 3000');
});