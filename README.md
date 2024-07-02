# 📊 Serverless Dashboard

Prototyping how serverless dashboards could work.

### Why not use Evidence / Quarto / Observable Framework?

- Is quite minimal and can be heavily optimized/customized
- It gives me more flexibility. E.g: using duckdb, wasm, Python, js, ...
- I learn frontend
- I can do parametrized endpoints (`example.com/user?id=david`)
- I can do custom endpoints like `example.com/explore` where a fully fledged WASM environment pops (e.g: a duckdb shell with a rath style explorer)
- These framework don't expose a way serve pre-rendered charts and ignore the DuckDB WASM payload with  each request
