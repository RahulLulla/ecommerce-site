-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    user_id integer NOT NULL DEFAULT nextval('users_user_id_seq'::regclass),
    username character varying COLLATE pg_catalog."default",
    password character varying COLLATE pg_catalog."default",
    is_active boolean DEFAULT true,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (user_id),
    CONSTRAINT users_email_key UNIQUE (email),
    CONSTRAINT users_username_key UNIQUE (username)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;

    
-- Table: public.products

-- DROP TABLE IF EXISTS public.products;

CREATE TABLE IF NOT EXISTS public.products
(
    product_id integer NOT NULL DEFAULT nextval('products_product_id_seq'::regclass),
    price numeric,
    product_name character varying COLLATE pg_catalog."default",
    description character varying COLLATE pg_catalog."default",
    category character varying COLLATE pg_catalog."default",
    stock integer,
    CONSTRAINT products_pkey PRIMARY KEY (product_id),
    CONSTRAINT products_price_check CHECK (price > 0::numeric)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.products
    OWNER to postgres;


-- Table: public.orders

-- DROP TABLE IF EXISTS public.orders;

CREATE TABLE IF NOT EXISTS public.orders
(
    order_id integer NOT NULL DEFAULT nextval('orders_order_id_seq'::regclass),
    user_id integer,
    order_date timestamp without time zone,
    order_amount numeric,
    CONSTRAINT orders_pkey PRIMARY KEY (order_id),
    CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT orders_order_amount_check CHECK (order_amount > 0::numeric)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.orders
    OWNER to postgres;


-- Table: public.order_items

-- DROP TABLE IF EXISTS public.order_items;

CREATE TABLE IF NOT EXISTS public.order_items
(
    order_items_id integer NOT NULL DEFAULT nextval('order_items_order_items_id_seq'::regclass),
    order_id integer,
    product_id integer,
    quantity integer,
    CONSTRAINT order_items_pkey PRIMARY KEY (order_items_id),
    CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id)
        REFERENCES public.orders (order_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id)
        REFERENCES public.products (product_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT order_items_quantity_check CHECK (quantity > 0)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.order_items
    OWNER to postgres;

-- Table: public.carts

-- DROP TABLE IF EXISTS public.carts;

CREATE TABLE IF NOT EXISTS public.carts
(
    cart_id integer NOT NULL DEFAULT nextval('carts_cart_id_seq'::regclass),
    user_id integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT carts_pkey PRIMARY KEY (cart_id),
    CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.carts
    OWNER to postgres;

-- Table: public.cart_items

-- DROP TABLE IF EXISTS public.cart_items;

CREATE TABLE IF NOT EXISTS public.cart_items
(
    cart_item_id integer NOT NULL DEFAULT nextval('cart_items_cart_item_id_seq'::regclass),
    cart_id integer,
    product_id integer,
    quantity integer,
    CONSTRAINT cart_items_pkey PRIMARY KEY (cart_item_id),
    CONSTRAINT cart_items_cart_id_fkey FOREIGN KEY (cart_id)
        REFERENCES public.carts (cart_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT cart_items_product_id_fkey FOREIGN KEY (product_id)
        REFERENCES public.products (product_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.cart_items
    OWNER to postgres;