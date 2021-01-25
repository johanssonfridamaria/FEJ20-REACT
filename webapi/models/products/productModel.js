const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.getProducts = (req, res) => {
    Product.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to get products',
        error: err
    }))
}

exports.getOneProduct = (req, res) => {
    Product.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to get product',
        error: err
    }))
}

exports.createProduct = (req, res) => {
    Product.find({ name: req.body.name })
    .then(exists => {
        if(exists.length > 0) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'A product by that name already exists, please update product instead'
            })
        }

        const product = new Product({
            name: req.body.name,
            short: req.body.short,
            desc: req.body.desc,
            price: req.body.price,
            image: req.body.image,
        })
        product.save()
        .then(() => {
            res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'Product created'
            })
        })
        .catch(() => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create product'
            })
        })
    })
}

exports.updateProduct = (req, res) => {
    Product.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
        Product.updateOne({ _id: req.params.id }, { $set: { modified: Date.now()}})
        .then(() => {
            res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Product updated'
            })
        })
    })
    .catch(() => {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to update product'
        })
    })
}

exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Product deleted!'
        })
    })
    .catch(() => {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to delete product'
        })
    })
}