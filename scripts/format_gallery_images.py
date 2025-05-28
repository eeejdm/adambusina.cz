import tkinter as tk
from tkinter import filedialog
import os

def format_image_for_astro(image_path, gallery_folder_name):
    base_name = os.path.basename(image_path)
    # Construct the public path Astro will use
    astro_path = f"/galleries/{gallery_folder_name}/{base_name}"
    # Simple alt text based on filename (you can customize this)
    alt_text = os.path.splitext(base_name)[0].replace('_', ' ').replace('-', ' ').capitalize()
    return f"  - image: \"{astro_path}\"\n    alt: \"{alt_text}\""

def main():
    root = tk.Tk()
    root.withdraw()  # Hide the main tkinter window

    print("Spouštím skript pro formátování obrázků pro Astro galerii...")

    # Ask user for the gallery identifier (folder name in public/galleries)
    gallery_folder_name = input("Zadejte název složky galerie (např. 'moje-nova-galerie'): ")
    if not gallery_folder_name:
        print("Název složky galerie je vyžadován. Ukončuji skript.")
        return

    # Ask user to select image files
    # You might want to pre-select the directory based on gallery_folder_name if possible
    # initial_dir = os.path.join("public", "galleries", gallery_folder_name) # This needs to be relative to workspace
    # For simplicity, we'll let the user navigate
    print(f"Vyberte obrázky pro galerii '{gallery_folder_name}'...")
    image_paths = filedialog.askopenfilenames(
        title=f"Vyberte obrázky pro galerii '{gallery_folder_name}'",
        filetypes=(("Image files", "*.jpg *.jpeg *.png *.gif *.webp"), ("All files", "*.*"))
    )

    if not image_paths:
        print("Nebyly vybrány žádné obrázky. Ukončuji skript.")
        return

    print("\n--- Zkopírujte následující YAML do .md souboru vaší galerie pod klíč 'images:' ---")
    for path in image_paths:
        print(format_image_for_astro(path, gallery_folder_name))
    print("--- Konec YAML ---\n")

    # Keep console open until user presses Enter (optional)
    input("Stiskněte Enter pro ukončení skriptu...")

if __name__ == "__main__":
    main() 