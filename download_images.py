import os
import requests
from duckduckgo_search import DDGS
from time import sleep

products = [
    {"id": "1", "name": "Panadol Extra egypt medicine"},
    {"id": "2", "name": "Brufen 400mg egypt pharmacy box"},
    {"id": "3", "name": "Voltaren Emulgel 1% egypt pharmacy"},
    {"id": "4", "name": "Augmentin 625mg egypt pharmacy"},
    {"id": "5", "name": "Amoxil 500mg egypt pharmacy"},
    {"id": "6", "name": "Centrum Adults Multivitamin bottle"},
    {"id": "7", "name": "Vitamin D3 1000 IU Pharma-D egypt"},
    {"id": "8", "name": "Omega-3 Fish Oil 1000mg Mega We Care egypt"},
    {"id": "9", "name": "Nexium 20mg egypt box"},
    {"id": "10", "name": "Gaviscon Liquid egypt bottle"},
    {"id": "11", "name": "Betadine Antiseptic Solution egypt"},
    {"id": "12", "name": "Sensodyne Toothpaste egypt"},
    {"id": "13", "name": "Listerine Cool Mint egypt"},
    {"id": "14", "name": "Nizoral Shampoo 2%"},
    {"id": "15", "name": "Minoxidil 5% Solution hair-plus back egypt"},
    {"id": "16", "name": "Bepanthen Cream bayer egypt"}
]

os.makedirs("public/products", exist_ok=True)

with DDGS() as ddgs:
    for product in products:
        q = product["name"]
        print(f"Searching for {q}...")
        results = list(ddgs.images(q, max_results=5, type_image="photo"))
        downloaded = False
        for res in results:
            url = res.get("image")
            print(f"Trying url: {url}")
            try:
                r = requests.get(url, timeout=5)
                if r.status_code == 200:
                    with open(f"public/products/{product['id']}.jpg", "wb") as f:
                        f.write(r.content)
                    print(f"Success for {product['id']}")
                    downloaded = True
                    break
            except Exception as e:
                print(f"Failed {url}: {e}")
        if not downloaded:
            print(f"Failed to download any image for {product['name']}")
        sleep(0.5)
