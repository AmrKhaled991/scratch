#!/usr/bin/env python3
"""Fix the 3 failed product image downloads."""

import urllib.request
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "public", "products")

# Replacement URLs for failed products
FIXES = {
    "2":  "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&q=80",  # Ibuprofen tablets
    "7":  "https://images.unsplash.com/photo-1535224206242-487f7090b5bb?w=600&q=80",  # Vitamin D supplement
    "8":  "https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=600&q=80",  # Fish oil capsules
}

headers = {"User-Agent": "Mozilla/5.0 (compatible; pharmacy-app/1.0)"}

for pid, url in FIXES.items():
    dest = os.path.join(OUTPUT_DIR, f"{pid}.jpg")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        if len(data) < 5000:
            raise ValueError(f"Too small: {len(data)} bytes")
        with open(dest, "wb") as f:
            f.write(data)
        print(f"✅  [{pid}] Downloaded {len(data)//1024} KB -> {dest}")
    except Exception as e:
        print(f"❌  [{pid}] FAILED: {e}")
        # Try a simple fallback: generate solid-color placeholder via placehold.co
        try:
            fallback = f"https://placehold.co/600x600/1a1a2e/ffffff/png?text=Product+{pid}"
            req2 = urllib.request.Request(fallback, headers=headers)
            with urllib.request.urlopen(req2, timeout=15) as resp2:
                data2 = resp2.read()
            with open(dest, "wb") as f:
                f.write(data2)
            print(f"   ↩  [{pid}] Used placeholder fallback ({len(data2)} bytes)")
        except Exception as e2:
            print(f"   ❌  [{pid}] Fallback also failed: {e2}")

print("Done.")
