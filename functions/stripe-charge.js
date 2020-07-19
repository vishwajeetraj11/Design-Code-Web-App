const stripe = require('stripe')('sk_test_51H6W1PAOe9uG4XYqRiQdWVR4MeavUR7zP6FK1GA8Q3SISNK8AcGGaxC3wbiU7bemzQRzBOZ1liwHARQGny72FIiR00U4asj4kv')

exports.handler = async function(event) {
    const {
        tokenId, 
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'inr'
    })
}