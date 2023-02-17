import products from '../models/Product.js';

class ProductController {

    // List all of the products
    static getProducts = (req, res) => {
        products.find((err, products) => {
            res.status(200).json(products);
        });
    }

    // List products by Id
    static getProductById = (req, res) => {
        const { id } = req.params;
        products.findById(id, (err, product) => {
            err
                ? res.status(400).send({ message: err.message })
                : res.status(200).send(product);
        });
    }

    // Post a new product
    /**
     * 
     * To POST a product, exists 3 required parameters on the body of the requisition:
     *      - name: STRING
     *      - description: STRING
     *      - price: NUMBER
     */
    static postProduct = (req, res) => {
        let product = new products(req.body);
        product.save(err => {
            err
                ? res.status(500).send({ message: err.message })
                : res.status(201).send(product.toJSON());
        });
    }

    // Update a product information
    static updateProduct = (req, res) => {
        const { id } = req.params;
        products.findByIdAndUpdate(id, { $set: req.body }, err => {
            err
                ? res.status(500).send({ message: err.message })
                : res.status(200).send(`You update the product ${id} for ${req.body.name}`);
        })
    }

    // Delete a Product
    static deleteProduct = (req, res) => {
        const { id } = req.params;
        products.findByIdAndDelete(id, err => {
            err
                ? res.status(500).send({ message: err.message })
                : res.status(200).send(`You deleted the product ${id}`);
        })
    }
}

export default ProductController;