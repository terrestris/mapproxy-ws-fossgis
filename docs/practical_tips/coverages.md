---
id: coverages
title: Coverages
sidebar_label: Coverages
---

## Tipp

- Coverages nicht dezentral in Sources, Caches und Seeds definieren.
- Sondern zentral in einem Geopackage als eigene Layer.

**Beispiel für Seed Config:**

```yaml
coverages:
  bb_teile:
    datasource: /etc/mapproxy/conf/coverages/coverages.gpkg
    where: 'select * from bdom_cache'
```
