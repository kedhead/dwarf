---
description: Upload the project to a new GitHub repository
---

This workflow guides you through uploading your local project to GitHub.

## Prerequisites
- You must have a GitHub account.
- You must have `git` installed (checked: yes).

## Steps

1.  **Create a New Repository on GitHub**
    - Go to [GitHub - Create New Repository](https://github.com/new).
    - **Repository Name**: `desert-dwarves` (or any name you prefer).
    - **Description**: (Optional) "A premium react website for the Desert Dwarves clan."
    - **Visibility**: Public or Private.
    - **Initialize**: Do NOT check "Add a README file", ".gitignore", or "license". Keep it empty.
    - Click **Create repository**.

2.  **Link and Push**
    - Copy the repository URL (e.g., `https://github.com/YourUsername/desert-dwarves.git`).
    - Run the following commands in your terminal:

    ```powershell
    # Replace <YOUR_REPO_URL> with the URL you copied
    git remote add origin <YOUR_REPO_URL>
    
    # Rename branch to main if you prefer, or keep master
    git branch -M main
    
    # Push your code
    git push -u origin main
    ```

3.  **Verify**
    - Refresh your GitHub repository page to see your files.
