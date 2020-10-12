const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const compression = require("compression");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const key =
  "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";

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        "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",
    },
  })
);
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr",
    description: "Software development services",
  };

  stripe.charges.create(body, (stripeError, stripeRes) => {
    if (stripeError) {
      console.log("Stripe Error", stripeError);
      res.status(500).send({ error: stripeError });
    } else {
      res.status(200).send({ success: stripeRes });
      transporter
        .sendMail({
          to: "gaurav.sharma@waybus.in",
          from: "noreply@shoptrendz<gauravsharma1997100@gmail.com>",
          subject: "Order Received",
          html: "<h1>Your order is received successfully</h1>",
        })
        .then(() => console.log("Email Sent"))
        .catch((error) => console.log("Error in sending mail"));
    }
  });
});

app.post("/contact", (req, res) => {
        const {email} = req.body
        transporter
          .sendMail({
            to: email,
            from: "noreply@shoptrendz<gauravsharma1997100@gmail.com>",
            subject: "Query  Received",
            html: "<h1>Your Query  has been received successfully</h1>",
          })
          .then(() =>{ console.log("Email Sent");res.status(200).send({ success: "success" })})
          .catch((error) => console.log("Error in sending mail"));
      }
)
  

app.listen(port, (error) => {
  if (error) console.log(error);
  console.log("Server is running on port " + port);
});
