---
id: commands
title: Commands
sidebar_label: Commands
---

### Autoconfig erstellen

**Ziel:** Erstellen einer mapproxy config auf Basis eines Capabilities Dokuments

`mapproxy-util autoconfig --capabilities "https://geoserver.stuttgart.de/geoserver/ows?service=wms&request=GetCapabilities" > stuttgart.yaml`

### Grid Infos

`mapproxy-util grids -f conf/mapproxy.yaml`

cf. https://mapproxy.github.io/mapproxy/latest/mapproxy_util.html#grids

### Dev-Server starten

cf. https://mapproxy.github.io/mapproxy/latest/mapproxy_util.html#serve-develop

`mapproxy-util serve-develop ./mapproxy.yaml`

### Beispiel config erstellen

```
mapproxy-util create -t base-config mapproxy
```

### Beispiel wsgi server script erstellen

```
mapproxy-util create -t wsgi-app -f mapproxy.yaml app.py
```

### Beispiel log config erstellen

```
mapproxy-util create -t log-ini log.ini
```

### Seed Job starten (Beispiel)

```
-s seed file
-f config file
-c number of parallel seed processes
--seed name of seed task that should be seeded
--log-ini path to log.ini for logging config
-n dry run
--summary print summary of seed tasks
```

- `mapproxy-seed -s seed.yaml -f mapproxy.yaml -c 1 --seed basemap_25832_seed &> "log_$(date +%Y-%m-%d).log"`

Vollständige Liste: `mapproxy-seed --help`
1301798127  !ORIS789456liari
