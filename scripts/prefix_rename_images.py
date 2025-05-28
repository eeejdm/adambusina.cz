import os
import tkinter as tk
from tkinter import filedialog, simpledialog, messagebox

def batch_prefix_rename():
    root = tk.Tk()
    root.withdraw()  # Hide the main tkinter window

    # Ask for the directory
    directory = filedialog.askdirectory(title="Select Gallery Folder")
    if not directory:
        messagebox.showinfo("Cancelled", "Operation cancelled by user.")
        return

    # Ask for the prefix
    prefix = simpledialog.askstring("Input", "Enter the prefix to add (e.g., part1_):", parent=root)
    if not prefix:
        messagebox.showinfo("Cancelled", "No prefix entered. Operation cancelled.")
        return

    try:
        filenames = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
        if not filenames:
            messagebox.showinfo("No Files", "No files found in the selected directory.")
            return

        preview_renames = []
        for filename in filenames:
            new_filename = prefix + filename
            preview_renames.append(f"{filename}  ->  {new_filename}")

        preview_message = "The following files will be renamed:\n\n" + "\n".join(preview_renames)
        preview_message += "\n\nDo you want to proceed?"

        confirm = messagebox.askyesno("Confirm Rename", preview_message)

        if confirm:
            renamed_count = 0
            error_count = 0
            errors = []
            for filename in filenames:
                old_filepath = os.path.join(directory, filename)
                new_filename = prefix + filename
                new_filepath = os.path.join(directory, new_filename)
                
                try:
                    # Check if new file path already exists to prevent accidental overwrite
                    if os.path.exists(new_filepath):
                        errors.append(f"Error: '{new_filename}' already exists. Skipped '{filename}'.")
                        error_count += 1
                        continue
                    
                    os.rename(old_filepath, new_filepath)
                    renamed_count += 1
                except OSError as e:
                    errors.append(f"Error renaming '{filename}': {e}")
                    error_count += 1
            
            summary_message = f"Finished renaming files.\nRenamed: {renamed_count}\nErrors: {error_count}"
            if errors:
                summary_message += "\n\nError details:\n" + "\n".join(errors)
            messagebox.showinfo("Rename Summary", summary_message)
        else:
            messagebox.showinfo("Cancelled", "Rename operation cancelled by user.")

    except Exception as e:
        messagebox.showerror("Error", f"An unexpected error occurred: {e}")
    finally:
        root.destroy()

if __name__ == '__main__':
    batch_prefix_rename() 