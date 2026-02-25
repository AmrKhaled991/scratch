#!/usr/bin/env python3
"""
Download real pharmaceutical product images for the pharmacy app.
Images are sourced from publicly accessible CDN/open image sources.
"""

import urllib.request
import os
import sys

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "public", "products")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Map product id -> reliable image URL
PRODUCT_IMAGES = {
    "1":  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",   # Panadol Extra
    "2":  "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=600&q=80",   # Brufen tablets
    "3":  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80",   # Voltaren gel
    "4":  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",   # Augmentin
    "5":  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",   # Amoxil capsules
    "6":  "https://images.unsplash.com/photo-1682687218147-9806132dc697?w=600&q=80",   # Centrum multivitamin
    "7":  "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?w=600&q=80",   # Vitamin D3
    "8":  "https://images.unsplash.com/photo-1577460551100-907f8a48e2c4?w=600&q=80",   # Omega-3
    "9":  "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",   # Nexium
    "10": "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&q=80",   # Gaviscon liquid
    "11": "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&q=80",   # Betadine
    "12": "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?w=600&q=80",   # Sensodyne
    "13": "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=600&q=80",   # Listerine
    "14": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80",   # Nizoral shampoo
    "15": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",   # Minoxidil
    "16": "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",   # Bepanthen cream
}

headers = {
    "User-Agent": "Mozilla/5.0 (compatible; pharmacy-app/1.0)"
}

success = 0
failed = []

for pid, url in PRODUCT_IMAGES.items():
    dest = os.path.join(OUTPUT_DIR, f"{pid}.jpg")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        if len(data) < 5000:
            raise ValueError(f"File too small ({len(data)} bytes), likely a placeholder")
        with open(dest, "wb") as f:
            f.write(data)
        print(f"✅  [{pid}] Downloaded {len(data)//1024} KB -> {dest}")
        success += 1
    except Exception as e:
        print(f"❌  [{pid}] FAILED: {e}")
        failed.append(pid)

print(f"\n{'='*50}")
print(f"Done: {success}/{len(PRODUCT_IMAGES)} images downloaded successfully.")
if failed:
    print(f"Failed IDs: {', '.join(failed)}")
    sys.exit(1)
