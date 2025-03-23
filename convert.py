import os
from PIL import Image

root_folder = "./images"
max_size_kb = 200

def compress_and_replace(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")  # Avoid issues with alpha/transparency

        temp_path = image_path + ".temp"
        quality = 85

        while quality >= 10:
            img.save(temp_path, "JPEG", optimize=True, quality=quality)
            size_kb = os.path.getsize(temp_path) / 1024
            if size_kb <= max_size_kb:
                os.replace(temp_path, image_path)
                print(f"✔ Compressed: {image_path} → {int(size_kb)}KB at quality {quality}")
                return
            quality -= 5

        os.remove(temp_path)
        print(f"✘ Couldn't compress: {image_path}")

    except Exception as e:
        print(f"Error with {image_path}: {e}")

for dirpath, _, filenames in os.walk(root_folder):
    for file in filenames:
        if file.lower().endswith((".jpg", ".jpeg", ".png")):
            full_path = os.path.join(dirpath, file)
            compress_and_replace(full_path)
