import products from '../models/Product.js';

class ProductController {

    static setHeaders = (res, method) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", method);
    }

    // List all of the products
    static getProducts = (req, res) => {
        products.find((err, products) => {
            res.status(200).json(products);
        });
        this.setHeaders(res, "GET")
    }

    // List products by Id
    static getProductById = (req, res) => {
        const { id } = req.params;
        products.findById(id, (err, product) => {
            err
                ? res.status(400).send({ message: err.message })
                : res.status(200).send(product);
        });
        this.setHeaders(res, "GET")
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
        this.setHeaders(res, "POST")
    }

    // Update a product information
    static updateProduct = (req, res) => {
        const { id } = req.params;
        products.findByIdAndUpdate(id, { $set: req.body }, err => {
            err
                ? res.status(500).send({ message: err.message })
                : res.status(200).send(`You update the product ${id} for ${req.body.name}`);
        })
        this.setHeaders(res, "PUT")
    }

    // Delete a Product
    static deleteProduct = (req, res) => {
        const { id } = req.params;
        products.findByIdAndDelete(id, err => {
            err
                ? res.status(500).send({ message: err.message })
                : res.status(200).send(`You deleted the product ${id}`);
        })
        this.setHeaders(res, "DELETE")
    }
}

export default ProductController;