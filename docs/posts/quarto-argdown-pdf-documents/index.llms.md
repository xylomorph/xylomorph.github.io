Argdown is great for representing argumentation structures. But what if you want to do more than represent the structure?

When analysing an argumentative text, you may want to document interpretational decisions, preserve alternative reconstructions, quote and reference the source text, and add notes explaining your analysis. And when presenting the analysis to others, you may want to combine argument maps with prose, argument reconstructions, quotations, and a larger narrative.

This is where Markdown and Quarto come in. In this post, I show how Markdown documents containing Argdown source blocks can be used to document and present argumentation analyses, and introduce a template for turning them into polished PDFs with Quarto.

[![](img/argdown-markdown-to-pdf.png)](img/argdown-markdown-to-pdf.png)

Argdown is a simple syntax used to describe arguments, their internal premise-conclusion structure and argumentative support and attack relations between arguments. Since Argdown is machine-readable, Argdown documents can easily be used to automatically generate argument maps, visualising the relationships between arguments as a graph.

[Argdown Snippet 1](#argdown-snippet-1) depicts a small Argdown snippet that describes a schematic macrostructure of four arguments. By clicking on the “map” button, you can see the argument map generated from this Argdown snippet.

``` argdown
[Main claim]: Main claim, justified or criticised by arguments. #pro
    + <1. Argument>: Argument supporting the main claim. #pro
    + <2. Argument>: Another argument supporting the main claim. #pro
    - <3. Argument (objection)>: Argument formulating an objection 
    to the main claim. #con
        - <4. Argument (rebuttal)>: Argument rebutting the objection. #pro
```

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMycHQiIGhlaWdodD0iMjI0cHQiIHZpZXdib3g9IjAuMDAgMC4wMCA2MzIuMDAgMjI0LjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGcgaWQ9ImdyYXBoMCIgY2xhc3M9ImdyYXBoIiB0cmFuc2Zvcm09InNjYWxlKDEgMSkgcm90YXRlKDApIHRyYW5zbGF0ZSg0IDIxOS43NikiPgo8dGl0bGU+QXJndW1lbnQgTWFwPC90aXRsZT4KPCEtLSBuMCAtLT4KPGcgaWQ9Im5vZGUxIiBjbGFzcz0ibm9kZSI+Cjx0aXRsZT5uMDwvdGl0bGU+CjxnIGlkPSJhX25vZGUxIj48YSB0aXRsZT0iTWFpbiBjbGFpbSwganVzdGlmaWVkIG9yIGNyaXRpY2lzZWQgYnkgYXJndW1lbnRzLiAiPgo8cGF0aCBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjYzVkZjlmIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zOTcuODQsLTIxNS43NkMzOTcuODQsLTIxNS43NiAyMjYsLTIxNS43NiAyMjYsLTIxNS43NiAyMjAsLTIxNS43NiAyMTQsLTIwOS43NiAyMTQsLTIwMy43NiAyMTQsLTIwMy43NiAyMTQsLTE3NS44NCAyMTQsLTE3NS44NCAyMTQsLTE2OS44NCAyMjAsLTE2My44NCAyMjYsLTE2My44NCAyMjYsLTE2My44NCAzOTcuODQsLTE2My44NCAzOTcuODQsLTE2My44NCA0MDMuODQsLTE2My44NCA0MDkuODQsLTE2OS44NCA0MDkuODQsLTE3NS44NCA0MDkuODQsLTE3NS44NCA0MDkuODQsLTIwMy43NiA0MDkuODQsLTIwMy43NiA0MDkuODQsLTIwOS43NiA0MDMuODQsLTIxNS43NiAzOTcuODQsLTIxNS43NiIgLz4KPHRleHQgc3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjI4Ni4zNiIgeT0iLTIwMS44IiBmb250LWZhbWlseT0iYXJpYWwiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjEwLjAwIiBmaWxsPSIjMDAwMDAwIj5NYWluIGNsYWltPC90ZXh0Pgo8dGV4dCBzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMjM0Ljk1IiB5PSItMTgzLjgiIGZvbnQtZmFtaWx5PSJhcmlhbCIgZm9udC1zaXplPSIxMC4wMCIgZmlsbD0iIzAwMDAwMCI+TWFpbiBjbGFpbSwganVzdGlmaWVkIG9yIGNyaXRpY2lzZWQgYnk8L3RleHQ+Cjx0ZXh0IHNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIyODQuMTMiIHk9Ii0xNzEuOCIgZm9udC1mYW1pbHk9ImFyaWFsIiBmb250LXNpemU9IjEwLjAwIiBmaWxsPSIjMDAwMDAwIj4gYXJndW1lbnRzLiA8L3RleHQ+CjwvYT4KPC9nPgo8L2c+CjwhLS0gbjEgLS0+CjxnIGlkPSJub2RlMiIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+bjE8L3RpdGxlPgo8ZyBpZD0iYV9ub2RlMiI+PGEgdGl0bGU9IkFyZ3VtZW50IHN1cHBvcnRpbmcgdGhlIG1haW4gY2xhaW0uICI+CjxwYXRoIGZpbGw9IiNjNWRmOWYiIHN0cm9rZT0iYmxhY2siIGQ9Ik0xODMuODQsLTEyMS44NEMxODMuODQsLTEyMS44NCAxMiwtMTIxLjg0IDEyLC0xMjEuODQgNiwtMTIxLjg0IDAsLTExNS44NCAwLC0xMDkuODQgMCwtMTA5Ljg0IDAsLTkzLjkyIDAsLTkzLjkyIDAsLTg3LjkyIDYsLTgxLjkyIDEyLC04MS45MiAxMiwtODEuOTIgMTgzLjg0LC04MS45MiAxODMuODQsLTgxLjkyIDE4OS44NCwtODEuOTIgMTk1Ljg0LC04Ny45MiAxOTUuODQsLTkzLjkyIDE5NS44NCwtOTMuOTIgMTk1Ljg0LC0xMDkuODQgMTk1Ljg0LC0xMDkuODQgMTk1Ljg0LC0xMTUuODQgMTg5Ljg0LC0xMjEuODQgMTgzLjg0LC0xMjEuODQiIC8+Cjx0ZXh0IHNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI2OC43NSIgeT0iLTEwNy44OCIgZm9udC1mYW1pbHk9ImFyaWFsIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxMC4wMCIgZmlsbD0iIzAwMDAwMCI+MS4gQXJndW1lbnQ8L3RleHQ+Cjx0ZXh0IHNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIxNS4xIiB5PSItODkuODgiIGZvbnQtZmFtaWx5PSJhcmlhbCIgZm9udC1zaXplPSIxMC4wMCIgZmlsbD0iIzAwMDAwMCI+QXJndW1lbnQgc3VwcG9ydGluZyB0aGUgbWFpbiBjbGFpbS4gPC90ZXh0Pgo8L2E+CjwvZz4KPC9nPgo8IS0tIG4xJiM0NTsmZ3Q7bjAgLS0+CjxnIGlkPSJlZGdlMSIgY2xhc3M9ImVkZ2UiPgo8dGl0bGU+bjEtJmd0O24wPC90aXRsZT4KPGcgaWQ9ImFfZWRnZTEiPjxhIHRpdGxlPSJzdXBwb3J0Ij4KPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZjAwIiBkPSJNMTQ2LjIxLC0xMjIuMjdDMTczLjM0LC0xMzMuMTYgMjA3Ljc2LC0xNDYuOTggMjM4LjE5LC0xNTkuMiIgLz4KPHBvbHlnb24gZmlsbD0iIzAwZmYwMCIgc3Ryb2tlPSIjMDBmZjAwIiBwb2ludHM9IjIzNi43OCwtMTYyLjQgMjQ3LjM3LC0xNjIuODggMjM5LjM5LC0xNTUuOTEgMjM2Ljc4LC0xNjIuNCI+PC9wb2x5Z29uPgo8L2E+CjwvZz4KPC9nPgo8IS0tIG4yIC0tPgo8ZyBpZD0ibm9kZTMiIGNsYXNzPSJub2RlIj4KPHRpdGxlPm4yPC90aXRsZT4KPGcgaWQ9ImFfbm9kZTMiPjxhIHRpdGxlPSJBbm90aGVyIGFyZ3VtZW50IHN1cHBvcnRpbmcgdGhlIG1haW4gY2xhaW0uICI+CjxwYXRoIGZpbGw9IiNjNWRmOWYiIHN0cm9rZT0iYmxhY2siIGQ9Ik0zOTcuODQsLTEyNy44NEMzOTcuODQsLTEyNy44NCAyMjYsLTEyNy44NCAyMjYsLTEyNy44NCAyMjAsLTEyNy44NCAyMTQsLTEyMS44NCAyMTQsLTExNS44NCAyMTQsLTExNS44NCAyMTQsLTg3LjkyIDIxNCwtODcuOTIgMjE0LC04MS45MiAyMjAsLTc1LjkyIDIyNiwtNzUuOTIgMjI2LC03NS45MiAzOTcuODQsLTc1LjkyIDM5Ny44NCwtNzUuOTIgNDAzLjg0LC03NS45MiA0MDkuODQsLTgxLjkyIDQwOS44NCwtODcuOTIgNDA5Ljg0LC04Ny45MiA0MDkuODQsLTExNS44NCA0MDkuODQsLTExNS44NCA0MDkuODQsLTEyMS44NCA0MDMuODQsLTEyNy44NCAzOTcuODQsLTEyNy44NCIgLz4KPHRleHQgc3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjI4Mi43NSIgeT0iLTExMy44OCIgZm9udC1mYW1pbHk9ImFyaWFsIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxMC4wMCIgZmlsbD0iIzAwMDAwMCI+Mi4gQXJndW1lbnQ8L3RleHQ+Cjx0ZXh0IHNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIyMjYuNTkiIHk9Ii05NS44OCIgZm9udC1mYW1pbHk9ImFyaWFsIiBmb250LXNpemU9IjEwLjAwIiBmaWxsPSIjMDAwMDAwIj5Bbm90aGVyIGFyZ3VtZW50IHN1cHBvcnRpbmcgdGhlIG1haW48L3RleHQ+Cjx0ZXh0IHNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIyOTYuMDkiIHk9Ii04My44OCIgZm9udC1mYW1pbHk9ImFyaWFsIiBmb250LXNpemU9IjEwLjAwIiBmaWxsPSIjMDAwMDAwIj4gY2xhaW0uIDwvdGV4dD4KPC9hPgo8L2c+CjwvZz4KPCEtLSBuMiYjNDU7Jmd0O24wIC0tPgo8ZyBpZD0iZWRnZTIiIGNsYXNzPSJlZGdlIj4KPHRpdGxlPm4yLSZndDtuMDwvdGl0bGU+CjxnIGlkPSJhX2VkZ2UyIj48YSB0aXRsZT0ic3VwcG9ydCI+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwZmYwMCIgZD0iTTMxMS45MiwtMTI4LjE5QzMxMS45MiwtMTM1LjY0IDMxMS45MiwtMTQzLjk1IDMxMS45MiwtMTUxLjk3IiAvPgo8cG9seWdvbiBmaWxsPSIjMDBmZjAwIiBzdHJva2U9IiMwMGZmMDAiIHBvaW50cz0iMzA4LjQyLC0xNTEuODYgMzExLjkyLC0xNjEuODYgMzE1LjQyLC0xNTEuODYgMzA4LjQyLC0xNTEuODYiPjwvcG9seWdvbj4KPC9hPgo8L2c+CjwvZz4KPCEtLSBuMyAtLT4KPGcgaWQ9Im5vZGU0IiBjbGFzcz0ibm9kZSI+Cjx0aXRsZT5uMzwvdGl0bGU+CjxnIGlkPSJhX25vZGU0Ij48YSB0aXRsZT0iQXJndW1lbnQgZm9ybXVsYXRpbmcgYW4gb2JqZWN0aW9uIHRvIHRoZSBtYWluIGNsYWltLiAiPgo8cGF0aCBmaWxsPSIjZmE5ZWFjIiBzdHJva2U9ImJsYWNrIiBkPSJNNjExLjg0LC0xMjcuODRDNjExLjg0LC0xMjcuODQgNDQwLC0xMjcuODQgNDQwLC0xMjcuODQgNDM0LC0xMjcuODQgNDI4LC0xMjEuODQgNDI4LC0xMTUuODQgNDI4LC0xMTUuODQgNDI4LC04Ny45MiA0MjgsLTg3LjkyIDQyOCwtODEuOTIgNDM0LC03NS45MiA0NDAsLTc1LjkyIDQ0MCwtNzUuOTIgNjExLjg0LC03NS45MiA2MTEuODQsLTc1LjkyIDYxNy44NCwtNzUuOTIgNjIzLjg0LC04MS45MiA2MjMuODQsLTg3LjkyIDYyMy44NCwtODcuOTIgNjIzLjg0LC0xMTUuODQgNjIzLjg0LC0xMTUuODQgNjIzLjg0LC0xMjEuODQgNjE3Ljg0LC0xMjcuODQgNjExLjg0LC0xMjcuODQiIC8+Cjx0ZXh0IHNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI0NjkuODEiIHk9Ii0xMTMuODgiIGZvbnQtZmFtaWx5PSJhcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTAuMDAiIGZpbGw9IiMwMDAwMDAiPjMuIEFyZ3VtZW50IChvYmplY3Rpb24pPC90ZXh0Pgo8dGV4dCBzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNDQ0LjIxIiB5PSItOTUuODgiIGZvbnQtZmFtaWx5PSJhcmlhbCIgZm9udC1zaXplPSIxMC4wMCIgZmlsbD0iIzAwMDAwMCI+QXJndW1lbnQgZm9ybXVsYXRpbmcgYW4gb2JqZWN0aW9uIHRvPC90ZXh0Pgo8dGV4dCBzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNDg5LjUyIiB5PSItODMuODgiIGZvbnQtZmFtaWx5PSJhcmlhbCIgZm9udC1zaXplPSIxMC4wMCIgZmlsbD0iIzAwMDAwMCI+IHRoZSBtYWluIGNsYWltLiA8L3RleHQ+CjwvYT4KPC9nPgo8L2c+CjwhLS0gbjMmIzQ1OyZndDtuMCAtLT4KPGcgaWQ9ImVkZ2U0IiBjbGFzcz0iZWRnZSI+Cjx0aXRsZT5uMy0mZ3Q7bjA8L3RpdGxlPgo8ZyBpZD0iYV9lZGdlNCI+PGEgdGl0bGU9ImF0dGFjayI+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmMDAwMCIgZD0iTTQ2Mi41OCwtMTI4LjMxQzQzOC40MiwtMTM4LjAxIDQxMC42OCwtMTQ5LjE1IDM4NS42NCwtMTU5LjIiIC8+Cjxwb2x5Z29uIGZpbGw9IiNmZjAwMDAiIHN0cm9rZT0iI2ZmMDAwMCIgcG9pbnRzPSIzODQuNDgsLTE1NS45IDM3Ni41LC0xNjIuODcgMzg3LjA4LC0xNjIuMzkgMzg0LjQ4LC0xNTUuOSI+PC9wb2x5Z29uPgo8L2E+CjwvZz4KPC9nPgo8IS0tIG40IC0tPgo8ZyBpZD0ibm9kZTUiIGNsYXNzPSJub2RlIj4KPHRpdGxlPm40PC90aXRsZT4KPGcgaWQ9ImFfbm9kZTUiPjxhIHRpdGxlPSJBcmd1bWVudCByZWJ1dHRpbmcgdGhlIG9iamVjdGlvbi4gIj4KPHBhdGggZmlsbD0iI2M1ZGY5ZiIgc3Ryb2tlPSJibGFjayIgZD0iTTYxMS44NCwtMzkuOTJDNjExLjg0LC0zOS45MiA0NDAsLTM5LjkyIDQ0MCwtMzkuOTIgNDM0LC0zOS45MiA0MjgsLTMzLjkyIDQyOCwtMjcuOTIgNDI4LC0yNy45MiA0MjgsLTEyIDQyOCwtMTIgNDI4LC02IDQzNCwwIDQ0MCwwIDQ0MCwwIDYxMS44NCwwIDYxMS44NCwwIDYxNy44NCwwIDYyMy44NCwtNiA2MjMuODQsLTEyIDYyMy44NCwtMTIgNjIzLjg0LC0yNy45MiA2MjMuODQsLTI3LjkyIDYyMy44NCwtMzMuOTIgNjE3Ljg0LC0zOS45MiA2MTEuODQsLTM5LjkyIiAvPgo8dGV4dCBzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNDczLjciIHk9Ii0yNS45NiIgZm9udC1mYW1pbHk9ImFyaWFsIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxMC4wMCIgZmlsbD0iIzAwMDAwMCI+NC4gQXJndW1lbnQgKHJlYnV0dGFsKTwvdGV4dD4KPHRleHQgc3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjQ1MC44NyIgeT0iLTcuOTYiIGZvbnQtZmFtaWx5PSJhcmlhbCIgZm9udC1zaXplPSIxMC4wMCIgZmlsbD0iIzAwMDAwMCI+QXJndW1lbnQgcmVidXR0aW5nIHRoZSBvYmplY3Rpb24uIDwvdGV4dD4KPC9hPgo8L2c+CjwvZz4KPCEtLSBuNCYjNDU7Jmd0O24zIC0tPgo8ZyBpZD0iZWRnZTMiIGNsYXNzPSJlZGdlIj4KPHRpdGxlPm40LSZndDtuMzwvdGl0bGU+CjxnIGlkPSJhX2VkZ2UzIj48YSB0aXRsZT0iYXR0YWNrIj4KPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmYwMDAwIiBkPSJNNTI1LjkyLC00MC4zMUM1MjUuOTIsLTQ3LjUzIDUyNS45MiwtNTUuOTkgNTI1LjkyLC02NC4yNSIgLz4KPHBvbHlnb24gZmlsbD0iI2ZmMDAwMCIgc3Ryb2tlPSIjZmYwMDAwIiBwb2ludHM9IjUyMi40MiwtNjQuMTUgNTI1LjkyLC03NC4xNSA1MjkuNDIsLTY0LjE1IDUyMi40MiwtNjQuMTUiPjwvcG9seWdvbj4KPC9hPgo8L2c+CjwvZz4KPC9nPgo8L3N2Zz4=)

Argdown Snippet 1: Simple macrostructure of four arguments and their relationships.

In this way, Argdown files can represent both the internal structure of individual arguments and the argumentative relations between them.

However, the mere argumentation structure is often only one piece within the larger context of how that structure serves a specific end. Two very important and connected use cases are the following:

1.  **Process of argumentation analysis:** Suppose you want to understand the argumentation in an argumentative text better. Using tools from logic and argumentation theory, you reconstruct the arguments you identified in the text in their premise-conclusion structure and analyse their relationships. Argumentation analysis is rarely a matter of simply identifying a fixed structure that is already apparent in the text. It is an interpretative process that often involves competing reconstructions, revision cycles, and decisions that are not self-explanatory. Accordingly, it is advisable to document your analysis in a way that is easy to share with others and that allows you to update your analysis as you revise your understanding of the text. To that end, you should explain your interpretational decisions, take notes about alternative interpretations, document references to the text, provide textual evidence and so on.
2.  **Presenting analyses of argumentation:** Suppose you want to present your analysis of an argumentative text to others, for instance, to share your insights or to support your own claims based on your analysis. Simply providing the audience with the result of your analysis, that is, the resulting argumentation structure (either as an Argdown file or as an argument map), is usually not enough. While an argument map shows the argumentation structure, it does not necessarily explain why the analysis takes this form. You want to present your analysis in a way that is easy to understand, and that allows the audience to follow your reasoning. This usually requires a combination of text, argument reconstructions and argument maps. For instance, you might want to add explanatory comments on specific arguments by, for instance, explaining the relevance of a specific premise, or you might want to add a summary of some arguments and their role, or you might even want to embed the analysed argumentation in a larger narrative.

In both cases, the mere argumentation structure is only one of many pieces. You need to complement the structural information with additional, often unstructured information.

There are several ways to organise this additional context information. For instance, you could create separate documents that contain this additional information and add references to your argumentation analysis. Or you can add this information directly to the Argdown file as [comments](https://argdown.org/syntax/#comments), or by using [Markdown syntax in the Argdown file](https://argdown.org/#_3-markdown-like-text-formatting), or even as [YAML data](https://argdown.org/syntax/#argument-yaml-data).

These options are useful especially for the first use case. However, it can get a little bit cumbersome if the context information is extensive. For the second use case, however, these options are usually not very suitable. In particular, Argdown files are not designed for the purpose of creating polished documents that combine text, argument reconstructions and argument maps. A much more promising approach is to use [Markdown documents that include Argdown source blocks](https://argdown.org/guide/using-argdown-in-markdown.html). In this way, you can combine the advantages of Argdown files for argumentation analysis with the advantages of Markdown documents:

- **Centralised narrative context:** combine argument reconstructions with prose explanations, quotations, notes, and references in one single file.
- **Versioning and sharing:** keep the analysis and its documentation in a plain-text file that can be easily shared and versioned (e.g., via `git`).
- **Editor independence:** use any Markdown editor of your choice to write and edit the document.
- **Separation of content and presentation:** write the analysis in Markdown syntax while leaving typography and PDF layout to rendering tools (e.g., Quarto/Pandoc).

The last point is particularly important for the second use case. While Argdown files can be rendered to HTML documents and argument maps, they are not very suitable for creating polished PDF documents. In this post, I will focus on using Quarto.

[Quarto](https://quarto.org) is a publishing system for creating reproducible documents and websites from plain-text source files. It supports multiple output formats, including HTML, PDF, and Word, and integrates naturally with Markdown, Pandoc, and computational content.

Quarto documents are written in Pandoc Markdown syntax, a Markdown flavour that has been extended with some additional features. Together with the [Argdown Pandoc filter](https://argdown.org/guide/publishing-argdown-markdown-with-pandoc.html), Quarto allows you to create documents that combine text, argument reconstructions and argument maps in a single file by using Argdown source blocks.[^1] Argument maps will be automatically generated from the Argdown source blocks and included in the rendered document. Similarly, you can include Argdown source blocks displaying, for instance, argument reconstructions that will receive syntax highlighting in the rendered document.

This is a very powerful approach ready at your fingertips. The only downside is that it requires a slightly nerdy setup. To make this workflow easier to adopt, I created a GitHub template that guides you through installation and handles most of the configuration needed to turn a Quarto document with Argdown source blocks into a polished PDF.

The template is available on GitHub at [github.com/xylomorph/argdown-quarto-pdf-template](https://github.com/xylomorph/argdown-quarto-pdf-template). There, you will find a detailed description of how to use the template and set up your environment. In a nutshell:

1.  Download the template from GitHub or use it as a template for your own repository.
2.  Install Quarto and the Argdown Pandoc filter.
3.  Create a Markdown document with Argdown source blocks and add your content.
4.  Render the document to PDF using Quarto.

The resulting workflow is therefore quite simple:

1.  Analyse in Argdown
2.  Document and explain in Markdown
3.  Render and publish with Quarto.

Back to top

## Reuse

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## Citation

BibTeX citation:

``` quarto-appendix-bibtex
@online{cacean2026,
  author = {Cacean, Sebastian},
  title = {Creating {Polished} {PDF} {Documents} {With} {Quarto} and
    {Argdown}},
  date = {2026-10-07},
  url = {https://sebastiancacean.de/posts/quarto-argdown-pdf-documents/},
  langid = {en}
}
```

For attribution, please cite this work as:

Cacean, Sebastian. 2026. “Creating Polished PDF Documents With Quarto and Argdown.” October 7. <https://sebastiancacean.de/posts/quarto-argdown-pdf-documents/>.

[^1]: You can find a schematic example of such a document in the template repository: [Example Quarto document](https://github.com/xylomorph/argdown-quarto-pdf-template/blob/main/example-doc.qmd).
