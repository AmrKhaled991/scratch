import re
import urllib.request
import urllib.parse
import os
import json

products = [
    {"id": "1", "name": "panadol extra"},
    {"id": "2", "name": "brufen 400"},
    {"id": "3", "name": "voltaren emulgel"},
    {"id": "4", "name": "augmentin"},
    {"id": "5", "name": "amoxil"},
    {"id": "6", "name": "centrum"},
    {"id": "7", "name": "vitamin d3"},
    {"id": "8", "name": "omega 3 plus"},
    {"id": "9", "name": "nexium 20"},
    {"id": "10", "name": "gaviscon"},
    {"id": "11", "name": "betadine"},
    {"id": "12", "name": "sensodyne"},
    {"id": "13", "name": "listerine"},
    {"id": "14", "name": "nizoral"},
    {"id": "15", "name": "hair plus back"},
    {"id": "16", "name": "bepanthen"}
]

os.makedirs("public/products", exist_ok=True)
images_map = {}

for product in products:
    search_url = f"https://api.duckduckgo.com/?q={urllib.parse.quote(product['name'] + ' medicine')}&format=json"
    try:
        req = urllib.request.Request(f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(product['name'] + ' medicine box')}", headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # Find image src
        match = re.search(r'src="//external-content\.duckduckgo\.com/iu/\?u=([^&"]+)', html)
        if match:
            img_url = urllib.parse.unquote(match.group(1))
            print(f"Found {img_url} for {product['name']}")
            img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            img_data = urllib.request.urlopen(img_req, timeout=5).read()
            with open(f"public/products/{product['id']}.jpg", "wb") as f:
                f.write(img_data)
            images_map[product['id']] = f"/products/{product['id']}.jpg"
        else:
            print(f"No image found for {product['name']}")
    except Exception as e:
        print(f"Error {product['name']}: {e}")

with open("images_map.json", "w") as f:
    json.dump(images_map, f)
