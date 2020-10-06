const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,'client/build')))

    app.get('*',function(req,res){
        res.sendFile(path.join(__dirname,"client/build",'index.html'))
    })
}

app.post('/payment',(req,res)=> {
    const body = {
        source : req.body.token.id,
        amount : req.body.amount,
        currency : 'inr',
        description: 'Software development services'
    }

    stripe.charges.create(body,(stripeError,stripeRes)=>
    {
        if(stripeError)
        {
            console.log("Stripe Error",stripeError)
            res.status(500).send({error:stripeError})
        }
        else{
            res.status(200).send({success:stripeRes})
        }

    })
})

app.listen(port,error => {
    if(error) console.log(error);
    console.log('Server is running on port '+port)
})