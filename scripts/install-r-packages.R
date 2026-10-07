#!/usr/bin/env Rscript

packages <- c(
    "babelquarto",
    "yaml",
    "servr"
)

missing <- packages[!packages %in% installed.packages()[,1]]

if(length(missing))
    install.packages(
        missing,
        repos = c('https://ropensci.r-universe.dev','https://cloud.r-project.org')
    )
