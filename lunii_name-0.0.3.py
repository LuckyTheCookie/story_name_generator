import tkinter as tk
from tkinter import messagebox

def on_button_click():
    age = entry_age.get()
    titre = entry_titre.get().upper().replace(" ", "_")
    auteur = entry_auteur.get()
    uuid = entry_uuid.get()
    version = entry_version.get()

    result = f"{age}+]%{titre}%[by_{auteur}-%{uuid}%_{version}]"
    clipboard_label.config(text="Le nom du pack a été copié dans votre presse-papier !")
    root.clipboard_clear()
    root.clipboard_append(result)

root = tk.Tk()
root.title("Application de création de nom de pack")
root.geometry("400x300")

label_age = tk.Label(root, text="Entrez l'âge minimum de votre histoire :")
label_age.pack()
entry_age = tk.Entry(root)
entry_age.pack()

label_titre = tk.Label(root, text="Entrez le titre :")
label_titre.pack()
entry_titre = tk.Entry(root)
entry_titre.pack()

label_auteur = tk.Label(root, text="Entrez le nom de l'auteur :")
label_auteur.pack()
entry_auteur = tk.Entry(root)
entry_auteur.pack()

label_uuid = tk.Label(root, text="Entrez l'UUID de votre pack :")
label_uuid.pack()
entry_uuid = tk.Entry(root)
entry_uuid.pack()

label_version = tk.Label(root, text="Entrez la version de votre pack :")
label_version.pack()
entry_version = tk.Entry(root)
entry_version.pack()

submit_button = tk.Button(root, text="Générer le nom du pack", command=on_button_click)
submit_button.pack()

clipboard_label = tk.Label(root, text="")
clipboard_label.pack()

root.mainloop()
