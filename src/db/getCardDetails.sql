select cart_id, u.user_id, username, 
(
	select json_agg(
		json_build_object('product_id', p.product_id, 'product_name', product_name, 
	'price', price, 'quantity', quantity)
	) as products
	from cart_items cp
	join products p 
	on p.product_id = cp.product_id
	where cp.cart_id = c.cart_id
), 
created_at, updated_at
from carts c
JOIN users u 
on c.user_id = u.user_id
where c.cart_id=$1;