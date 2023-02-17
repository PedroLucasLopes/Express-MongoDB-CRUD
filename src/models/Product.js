import mongoose from 'mongoose';


// Product Schema for define required parameters to POST a new Product
const productSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true }
    }
);

const products = mongoose.model('products', productSchema);

export default products;