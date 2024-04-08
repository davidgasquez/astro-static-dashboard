# 📊 Serverless Dashboard

Prototyping how serverless dashboards could work.

Some of the reasons I'm going with this raw approach are:

- Is quite minimal and can be heavily optimized/customized
- It gives me more flexibility. E.g: using duckdb, wasm, Python, js, ...
- I learn frontend
- I can do parametrized endpoints (`example.com/user?id=david`)
- I can do custom endpoints like `example.com/explore` where a fully fledged WASM environment pops (e.g: a duckdb shell with a rath style explorer)
