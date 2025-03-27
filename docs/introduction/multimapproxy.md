# MultiMapProxy

## Ein MapProxy, mehrere Dienste


### Anwendungsfall:
- Große Anzahl an Layern aus unterschiedlichen Themen (z.B. DOP, Historische Karten, Verkehr, Basemaps etc.)

### Vorteile:
    - Übersichtlicher (Aufteilung in mehrere Konfigurationsdateien)
    - Wartbarkeit
    - Vererbeung von Konfigurationsblöcken (`globals`, `grids`)

`projects/dop.yaml ➝ mapproxy/dop/service?`  
`projects/basiskarten.yaml ➝ mapproxy/basiskarten/service?`

```py
# WSGI module for use with Apache mod_wsgi or uwsgi 
# # uncomment the following lines for logging
# # create a log.ini with `mapproxy-util create -t log-ini`
from logging.config import fileConfig
import os.path
fileConfig(r'/opt/mapproxy/log.ini', {'here': os.path.dirname(__file__)})

from mapproxy.multiapp import make_wsgi_app
application = make_wsgi_app('/opt/mapproxy/projects', allow_listing=True)
```
