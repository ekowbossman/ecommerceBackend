// import models
import Product, { belongsTo, belongsToMany } from './Product';
import Category from './Category';
import Tag, { belongsToMany as _belongsToMany } from './Tag';
import ProductTag from './ProductTag';

// Products belongsTo Category
belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tags_on_product'
});

// Tags belongToMany Products (through ProductTag)
_belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'products_with_tag'
});

export default {
  Product,
  Category,
  Tag,
  ProductTag,
};