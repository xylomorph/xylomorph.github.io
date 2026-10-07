#!/usr/bin/env Rscript

library(babelquarto)

# Find all .qmd files recursively in myblog
all_qmd_files <- list.files(
    path = ".",
    pattern = "\\.qmd$",
    recursive = TRUE,
    full.names = TRUE
)

# Track created files for cleanup
created_files <- character(0)

# Filter out language-specific files (e.g., *.de.qmd) to get base files only
base_qmd_files <- all_qmd_files[!grepl("\\.[a-z]{2}\\.qmd$", all_qmd_files)]

# Check each base .qmd file for corresponding .de.qmd
for (qmd_file in base_qmd_files) {
    # Generate the .de.qmd filename
    de_qmd_file <- sub("\\.qmd$", ".de.qmd", qmd_file)
    
    # If .de.qmd doesn't exist, create it by copying
    if (!file.exists(de_qmd_file)) {
        file.copy(qmd_file, de_qmd_file)
        created_files <- c(created_files, de_qmd_file)
        message("Created: ", de_qmd_file)
    }
}

# Render the website with guaranteed cleanup
tryCatch(
    {
        render_website(
            project_path = ".",
            # preview = FALSE,
            # site_url = "https://username.github.io/repository-name/"
        )
    },
    finally = {
        # Cleanup created files
        for (file in created_files) {
            if (file.exists(file)) {
                file.remove(file)
                message("Cleaned up: ", file)
            }
        }
    }
)