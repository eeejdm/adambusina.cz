import tkinter as tk
from tkinter import filedialog, messagebox
import os

def format_image_for_astro(image_path, gallery_slug_for_path):
    base_name = os.path.basename(image_path)
    # Construct the public path Astro will use, ensuring no double slashes
    astro_path = f"/galleries/{gallery_slug_for_path}/{base_name}".replace('//', '/')
    alt_text = os.path.splitext(base_name)[0].replace('_', ' ').replace('-', ' ').capitalize()
    return f"  - image: \"{astro_path}\"\n    alt: \"{alt_text}\""

def main():
    root = tk.Tk()
    root.withdraw()  # Hide the main tkinter window

    messagebox.showinfo("Start Script", "You will be asked to select the specific image folder for your gallery (e.g., public/galleries/MY_EVENT_FOLDER).")

    # Determine the expected base path for galleries within the project
    # Assumes script is run from workspace root or can determine it.
    # For simplicity, let's assume public/galleries is directly in the workspace.
    workspace_root = os.getcwd() # Gets current working directory
    expected_galleries_base_path = os.path.join(workspace_root, "public", "galleries")

    selected_gallery_folder_path = filedialog.askdirectory(
        title="Select the specific gallery's image folder (e.g., .../public/galleries/MyEventFolder)",
        initialdir=expected_galleries_base_path # Start in public/galleries
    )

    if not selected_gallery_folder_path:
        messagebox.showinfo("Cancelled", "No folder selected. Exiting script.")
        return

    # Validate if the selected folder is within the expected structure
    if not os.path.commonpath([selected_gallery_folder_path, expected_galleries_base_path]) == expected_galleries_base_path:
        messagebox.showerror("Error", f"The selected folder '{selected_gallery_folder_path}' \
                                       is not inside the expected '{expected_galleries_base_path}' directory. \
                                       Please select a subfolder within public/galleries.")
        return
    
    # Extract the gallery-specific part of the path (e.g., "MyEventFolder")
    gallery_slug_for_path = os.path.basename(selected_gallery_folder_path)
    if not gallery_slug_for_path:
        messagebox.showerror("Error", f"Could not determine the gallery slug from path: {selected_gallery_folder_path}")
        return

    messagebox.showinfo("Select Images", f"Now, select images from the folder: '{gallery_slug_for_path}'")
    image_paths = filedialog.askopenfilenames(
        title=f"Select images from '{gallery_slug_for_path}'",
        initialdir=selected_gallery_folder_path, # Start in the folder chosen above
        filetypes=(("Image files", "*.jpg *.jpeg *.png *.gif *.webp"), ("All files", "*.*"))
    )

    if not image_paths:
        messagebox.showinfo("No Images", "No images were selected. Exiting script.")
        return

    yaml_output = []
    for path in image_paths:
        yaml_output.append(format_image_for_astro(path, gallery_slug_for_path))
    
    result_text = "\n--- Copy the following YAML into your .md file under 'images:' ---\n" + "\n".join(yaml_output) + "\n--- End YAML ---\n"
    
    # Show result in a scrollable text box (more user-friendly for many images)
    show_result_dialog(result_text)

def show_result_dialog(result_text):
    dialog = tk.Tk()
    dialog.title("Generated YAML for Gallery Images")
    text_area = tk.Text(dialog, wrap=tk.WORD, height=20, width=80)
    text_area.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)
    text_area.insert(tk.END, result_text)
    text_area.configure(state='disabled') # Make it read-only

    # Add a scrollbar
    scrollbar = tk.Scrollbar(text_area, command=text_area.yview)
    scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
    text_area['yscrollcommand'] = scrollbar.set

    # Add a close button
    close_button = tk.Button(dialog, text="Close", command=dialog.destroy)
    close_button.pack(pady=5)
    dialog.mainloop()

if __name__ == "__main__":
    main() 