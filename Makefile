.PHONY: render preview clean

render:
	Rscript scripts/render.R

clean:
	rm -rf docs

preview:
	Rscript -e 'servr::httw("docs")' -p4000