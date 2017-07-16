module.exports = function(app){

 var products = require('./../controllers/products.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/products')
	.get(products.list)
	.post(users.requiresLogin, products.create);

  app.route('/api/products/:productId')
	.get(products.read)
  .delete(users.requiresLogin, products.delete);
  
  app.route('/products/edit')
	.get(products.edit);
  
  app.route('/products/list')
	.get(products.listView);
  
  app.route('/products/view')
	.get(products.view);

  
  app.route('/products/new')
	.get(products.new);
	
    

	app.route('/api/products/edit/:productId')
	.get(products.read)
	.put(users.requiresLogin, products.update);


app.param('productId', products.productByID);


}
