import tkinter as tk
from tkinter import filedialog, messagebox
import os

def format_image_for_astro(image_path, gallery_slug_for_path):
    base_name = os.path.basename(image_path)
    # Construct the public path Astro will use, ensuring no double slashes
    astro_path = f"/galleries/{gallery_slug_for_path}/{base_name}".replace('//', '/')
    alt_text = os.path.splitext(base_name)[0].replace('_', ' ').replace('-', ' ').capitalize()
    # Return the full YAML object for an image
    return f"  - image: \"{astro_path}\"\n    alt: \"{alt_text}\""

def main():
    root = tk.Tk()
    root.withdraw()  # Hide the main tkinter window

    messagebox.showinfo("Start Script", "You will be asked to select the specific image folder for your gallery (e.g., public/galleries/MY_EVENT_FOLDER).")

    # Determine the expected base path for galleries within the project
    workspace_root = os.getcwd() # Gets current working directory
    expected_galleries_base_path = os.path.join(workspace_root, "public", "galleries")

    selected_gallery_folder_path = filedialog.askdirectory(
        title="Select the specific gallery's image folder (e.g., .../public/galleries/MyEventFolder)",
        initialdir=expected_galleries_base_path # Start in public/galleries
    )

    if not selected_gallery_folder_path:
        # messagebox.showinfo("Cancelled", "No folder selected. Exiting script.") # Optional: can be annoying
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
        # messagebox.showinfo("No Images", "No images were selected. Exiting script.") # Optional: can be annoying
        return

    yaml_output = []
    for path in image_paths:
        yaml_output.append(format_image_for_astro(path, gallery_slug_for_path))
    
    # The result text is now just the clean YAML output
    result_text = "\n".join(yaml_output)
    
    # Show result in a scrollable, copy-able text box
    show_result_dialog(result_text)

def show_result_dialog(result_text):
    dialog = tk.Tk()
    dialog.title("Generated Gallery YAML")

    # Frame for the text area and scrollbar
    text_frame = tk.Frame(dialog)
    text_frame.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)

    text_area = tk.Text(text_frame, wrap=tk.WORD, height=20, width=80)
    text_area.insert(tk.END, result_text)
    # Make the text area read-only, but still allow selection for manual copying
    text_area.configure(state='normal') 
    
    scrollbar = tk.Scrollbar(text_frame, command=text_area.yview)
    text_area['yscrollcommand'] = scrollbar.set

    scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
    text_area.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

    def restart_script():
        """Destroys the current window and restarts the main function."""
        dialog.destroy()
        main()

    def copy_to_clipboard():
        """Copies the content of the text area to the clipboard."""
        dialog.clipboard_clear()
        dialog.clipboard_append(result_text)
        # Give user feedback
        copy_button.config(text="Copied!", state="disabled")
        dialog.after(2000, lambda: copy_button.config(text="Copy to Clipboard", state="normal"))

    # Frame for the control buttons
    button_frame = tk.Frame(dialog)
    button_frame.pack(padx=10, pady=(0, 10), fill=tk.X, anchor='e') # Align frame to the east (right)

    # Add Restart and Close buttons, aligned to the right
    close_button = tk.Button(button_frame, text="Close", command=dialog.destroy)
    close_button.pack(side=tk.RIGHT)

    restart_button = tk.Button(button_frame, text="Restart", command=restart_script)
    restart_button.pack(side=tk.RIGHT, padx=5)

    copy_button = tk.Button(button_frame, text="Copy to Clipboard", command=copy_to_clipboard)
    copy_button.pack(side=tk.RIGHT)
    
    dialog.mainloop()

if __name__ == "__main__":
    main() 