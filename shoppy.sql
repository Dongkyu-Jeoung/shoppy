use shoppy;
show tables;
select * from information_schema.views where table_schema = 'shoppy';

select pid, name, price, info, rate, image, img_list from product;

show tables;
desc product;
select * from product_detailinfo;

-- img, name, info, rate, pid, detailInfo, imgList

select concat('/images/', image) as image, name, info, rate, p.pid, img_list imgList, json_object("title_en",title_en, "title_ko",title_ko, "list",list)
from product p, product_detailinfo pd
where p.pid = pd.pid;

