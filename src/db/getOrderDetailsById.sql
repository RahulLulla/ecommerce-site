select order_id, u.user_id, username, order_date, order_amount,
(
	select json_agg(
		json_build_object('product_id', p.product_id, 'product_name', product_name, 
	'price', price, 'quantity', quantity)
	) as products
	from order_items op
	join products p 
	on p.product_id = op.product_id
	where op.order_id = o.order_id
)
FROM orders o
join users u
on u.user_id = o.user_id
where o.order_id = $1