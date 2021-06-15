
const express = require("express");
const morgan = require("morgan");
const giftsRouter = require("./routes/gift-exchange");
const { NotFoundError } = require("./Utils/errors");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use("/gift-exchange", giftsRouter);


app.get("/", async(req, res, next) => {
    res.status(200).json({ping: "pong"});
});

/**Handles all  404 errors not handled by a route (Route not set to one defined) */
// Will run if the route is not defined (notice there is no "" with text)
// This returns 'next' so the next function in the pipeline recieves the error (the next function is below)
app.use((req, res, next) => {
    console.log("not found entered")
    return next(new NotFoundError);
})

/**Generic error handler - anything that is unhandled will be handled here */
// Will run if somewhere next is used to pass on error ( next(err) ) hence the error perameter
// The final function in the pipline if nothing else has return the response yet
app.use((error, req, res, next) => {
    console.log("final function entered")
    const status = error.status || 500;  //status equals status number or 500 (500 means internal server error)
    const message = error.message;

    return res.status(status).json({
        error: {message, status}        //message: message, status: status
    });
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
