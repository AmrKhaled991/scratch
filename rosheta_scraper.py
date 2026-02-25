import requests
from bs4 import BeautifulSoup
import os
import urllib.parse
import json

products = [
    {"id": "1", "name": "panadol extra"},
    {"id": "2", "name": "brufen 400"},
    {"id": "3", "name": "voltaren"},
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

for p in products:
    try:
        url = f"https://www.rosheta.com/en/search/medications?keyword={urllib.parse.quote(p['name'])}"
        headers = {'User-Agent': 'Mozilla/5.0'}
        r = requests.get(url, headers=headers, timeout=5)
        soup = BeautifulSoup(r.text, 'html.parser')
        
        img = soup.find('img', class_='product-image')
        if not img:
            img = soup.select_one('.medication-item img')
        if not img:
            img = soup.select_one('img') # fallback
            
        img_src = None
        if img:
            img_src = img.get('src') or img.get('data-src')
            if img_src and not img_src.startswith('http'):
                img_src = 'https://www.rosheta.com' + img_src
                
        if img_src and 'logo' not in img_src.lower():
            print(f"Found {img_src} for {p['name']}")
            img_r = requests.get(img_src, headers=headers, timeout=5)
            with open(f"public/products/{p['id']}.jpg", "wb") as f:
                f.write(img_r.content)
            images_map[p['id']] = f"/products/{p['id']}.jpg"
        else:
            print(f"Failed to find image for {p['name']}")
    except Exception as e:
        print(f"Error for {p['name']}: {e}")

with open("images_map.json", "w") as f:
    json.dump(images_map, f)
