{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": {
          "type": "datasource",
          "uid": "grafana"
        },
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "target": {
          "limit": 100,
          "matchAny": false,
          "tags": [],
          "type": "dashboard"
        },
        "type": "dashboard"
      }
    ]
  },
  "description": "The Dashboard display Visualization Data from MySQL Exporter configured with Prometheus Database",
  "editable": true,
  "fiscalYearStartMonth": 0,
  "graphTooltip": 0,
  "id": 10,
  "links": [],
  "panels": [
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 0
      },
      "id": 16,
      "panels": [],
      "title": "Overall MySQL Server Status",
      "type": "row"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "decimals": 0,
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green"
              },
              {
                "color": "red",
                "value": 90
              },
              {
                "color": "#EAB839",
                "value": 120
              },
              {
                "color": "#6ED0E0",
                "value": 600
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 6,
        "w": 6,
        "x": 0,
        "y": 1
      },
      "id": 8,
      "links": [
        {
          "title": "Tuning the InnoDB Buffer Pool Size",
          "url": "https://www.percona.com/blog/2015/06/02/80-ram-tune-innodb_buffer_pool_size/"
        }
      ],
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "percentChangeColorMode": "standard",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "showPercentChange": false,
        "text": {},
        "textMode": "auto",
        "wideLayout": true
      },
      "pluginVersion": "12.0.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "(mysql_global_variables_innodb_buffer_pool_size{instance=\"$host\"} * 100) / on (instance) node_memory_MemTotal_bytes{instance=\"$host\"}",
          "interval": "5m",
          "legendFormat": "",
          "refId": "A"
        }
      ],
      "title": "Buffer Pool Size of Total RAM",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "description": "MySQL Server Uptime - The time elapsed since the last restart of the MySQL server.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green"
              },
              {
                "color": "green",
                "value": 300
              },
              {
                "color": "blue",
                "value": 900
              }
            ]
          },
          "unit": "s"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 6,
        "x": 6,
        "y": 1
      },
      "id": 2,
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "percentChangeColorMode": "standard",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "showPercentChange": false,
        "text": {},
        "textMode": "auto",
        "wideLayout": true
      },
      "pluginVersion": "12.0.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "mysql_global_status_uptime{instance=\"$host\"}",
          "interval": "5m",
          "legendFormat": "",
          "refId": "A"
        }
      ],
      "title": "MySQL Uptime",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "description": "InnoDB Storage Engine Buffer Pool Size - InnoDB maintains a storage area called the buffer pool for caching data and indexes in memory.  Knowing how the InnoDB buffer pool works, and taking advantage of it to keep frequently accessed data in memory, is one of the most important aspects of MySQL tuning. The goal is to keep the working set in memory. In most cases, this should be between 60%-90% of available memory on a dedicated database host, but depends on many factors.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "decimals": 0,
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green"
              },
              {
                "color": "red",
                "value": 300
              },
              {
                "color": "#EAB839",
                "value": 600
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 5,
        "x": 12,
        "y": 1
      },
      "id": 6,
      "links": [
        {
          "title": "Tuning the InnoDB Buffer Pool Size",
          "url": "https://www.skillpedia.co"
        }
      ],
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "percentChangeColorMode": "standard",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "showPercentChange": false,
        "text": {},
        "textMode": "auto",
        "wideLayout": true
      },
      "pluginVersion": "12.0.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "mysql_global_variables_innodb_buffer_pool_size{instance=\"$host\"}",
          "interval": "$interval",
          "legendFormat": "",
          "refId": "A"
        }
      ],
      "title": "InnoDB Buffer Pool Size",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "description": "Queries Processed By Server Per Second\nBased on the queries reported by MySQL's ``SHOW STATUS`` command, it is the number of statements executed by the server within the last second. This variable includes statements executed within stored programs, unlike the Questions variable. It does not count \n``COM_PING`` or ``COM_STATISTICS`` commands.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "decimals": 2,
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green"
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 6,
        "x": 17,
        "y": 1
      },
      "id": 4,
      "links": [
        {
          "title": "Learn more on MySQL at ",
          "url": "https://www.theskillpedia.com"
        }
      ],
      "options": {
        "minVizHeight": 75,
        "minVizWidth": 75,
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "showThresholdLabels": false,
        "showThresholdMarkers": true,
        "sizing": "auto",
        "text": {}
      },
      "pluginVersion": "12.0.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "rate(mysql_global_status_queries{instance=\"$host\"}[$interval]) or irate(mysql_global_status_queries{instance=\"$host\"}[5m])",
          "interval": "$interval",
          "legendFormat": "",
          "refId": "A"
        }
      ],
      "title": "Current Query/Sec",
      "type": "gauge"
    },
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 8
      },
      "id": 14,
      "panels": [],
      "title": "Connections",
      "type": "row"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "description": "Max Clients Connections - Max Connections is the maximum permitted number of simultaneous client connections. By default, this is 151. Increasing this value increases the number of file descriptors that mysqld requires. If the required number of descriptors are not available, the server reduces the value of Max Connections. \nmysqld actually permits Max Connections + 1 clients to connect. The extra connection is reserved for use by accounts that have the SUPER privilege, such as root.\nMax Used Connections is the maximum number of connections that have been in use simultaneously since the server started.\nConnections is the number of connection attempts to the MySQL server.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisBorderShow": false,
            "axisCenteredZero": false,
            "axisColorMode": "text",
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "barWidthFactor": 0.6,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "insertNulls": false,
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "never",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green"
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "short"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 0,
        "y": 9
      },
      "id": 10,
      "links": [
        {
          "title": "MySQL Server System Variable",
          "url": "MySQL Server System Variables\r\nhttps://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_connections"
        }
      ],
      "options": {
        "legend": {
          "calcs": [
            "mean",
            "max",
            "min"
          ],
          "displayMode": "list",
          "placement": "bottom",
          "showLegend": true
        },
        "tooltip": {
          "hideZeros": false,
          "mode": "multi",
          "sort": "none"
        }
      },
      "pluginVersion": "12.0.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "max(max_over_time(mysql_global_status_threads_connected{instance=\"$host\"}[$interval])  or mysql_global_status_threads_connected{instance=\"$host\"} )",
          "interval": "$interval",
          "legendFormat": "Connections",
          "refId": "A"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "mysql_global_status_max_used_connections{instance=\"$host\"}",
          "hide": false,
          "interval": "$interval",
          "legendFormat": "Max Used Connections",
          "refId": "B"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "mysql_global_variables_max_connections{instance=\"$host\"}",
          "hide": false,
          "interval": "$interval",
          "legendFormat": "Max Connections",
          "refId": "C"
        }
      ],
      "title": "Clinets Connections",
      "type": "timeseries"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "description": "Description: MySQL Active Threads - Threads Connected is the number of open connections, while Threads Running is the number of threads not sleeping.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisBorderShow": false,
            "axisCenteredZero": false,
            "axisColorMode": "text",
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "barWidthFactor": 0.6,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "insertNulls": false,
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "never",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green"
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "short"
        },
        "overrides": [
          {
            "matcher": {
              "id": "byName",
              "options": "Peak Threads Running"
            },
            "properties": [
              {
                "id": "color",
                "value": {
                  "fixedColor": "#5794F2",
                  "mode": "fixed"
                }
              },
              {
                "id": "custom.lineWidth",
                "value": 0
              },
              {
                "id": "custom.pointSize",
                "value": 6
              },
              {
                "id": "custom.showPoints",
                "value": "always"
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "Avg Threads Running"
            },
            "properties": [
              {
                "id": "color",
                "value": {
                  "fixedColor": "#FADE2A",
                  "mode": "fixed"
                }
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 12,
        "y": 9
      },
      "id": 12,
      "options": {
        "legend": {
          "calcs": [
            "mean",
            "lastNotNull",
            "max",
            "min"
          ],
          "displayMode": "table",
          "placement": "bottom",
          "showLegend": true
        },
        "tooltip": {
          "hideZeros": false,
          "mode": "multi",
          "sort": "none"
        }
      },
      "pluginVersion": "12.0.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "max_over_time(mysql_global_status_threads_connected{instance=\"$host\"}[$interval]) or\r\nmax_over_time(mysql_global_status_threads_connected{instance=\"$host\"}[5m])",
          "interval": "$interval",
          "legendFormat": "Peak Threads Connected",
          "refId": "A"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "max_over_time(mysql_global_status_threads_running{instance=\"$host\"}[$interval]) or\r\nmax_over_time(mysql_global_status_threads_running{instance=\"$host\"}[5m])",
          "hide": false,
          "interval": "",
          "legendFormat": "Peak Threads Running",
          "refId": "B"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "avg_over_time(mysql_global_status_threads_running{instance=\"$host\"}[$interval]) or \r\navg_over_time(mysql_global_status_threads_running{instance=\"$host\"}[5m])",
          "hide": false,
          "interval": "$interval",
          "legendFormat": "Avg Threads Running",
          "refId": "C"
        }
      ],
      "title": "MySQL Client Thread Activity",
      "type": "timeseries"
    },
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 17
      },
      "id": 18,
      "panels": [],
      "title": "Processes, Commands and Handlers",
      "type": "row"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "description": "Top Command Counters - The Com_{{xxx}} statement counter variables indicate the number of times each xxx statement has been executed. There is one status variable for each type of statement. For example, Com_delete and Com_update count [``DELETE``](https://dev.mysql.com/doc/refman/5.7/en/delete.html) and [``UPDATE``](https://dev.mysql.com/doc/refman/5.7/en/update.html) statements, respectively. Com_delete_multi and Com_update_multi are similar but apply to [``DELETE``](https://dev.mysql.com/doc/refman/5.7/en/delete.html) and [``UPDATE``](https://dev.mysql.com/doc/refman/5.7/en/update.html) statements that use multiple-table syntax.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisBorderShow": false,
            "axisCenteredZero": false,
            "axisColorMode": "text",
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "barWidthFactor": 0.6,
            "drawStyle": "line",
            "fillOpacity": 20,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "insertNulls": false,
            "lineInterpolation": "linear",
            "lineWidth": 2,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "never",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green"
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "short"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 0,
        "y": 18
      },
      "id": 20,
      "links": [
        {
          "title": "Server Status Variables Call me at +91 9312406920",
          "url": "https://www.rnsangwan.com"
        }
      ],
      "options": {
        "legend": {
          "calcs": [
            "mean",
            "max",
            "min"
          ],
          "displayMode": "list",
          "placement": "bottom",
          "showLegend": true
        },
        "tooltip": {
          "hideZeros": false,
          "mode": "multi",
          "sort": "none"
        }
      },
      "pluginVersion": "12.0.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "topk(5, rate(mysql_global_status_commands_total{instance=\"$host\"}[$interval])>0) or topk(5, irate(mysql_global_status_commands_total{instance=\"$host\"}[5m])>0)",
          "interval": "$interval",
          "legendFormat": "Com_{{ command }}",
          "refId": "A"
        }
      ],
      "title": "Top Command Counters",
      "type": "timeseries"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "description": "Top Command Counters - The Com_{{xxx}} statement counter variables indicate the number of times each xxx statement has been executed. There is one status variable for each type of statement. For example, Com_delete and Com_update count [``DELETE``](https://dev.mysql.com/doc/refman/5.7/en/delete.html) and [``UPDATE``](https://dev.mysql.com/doc/refman/5.7/en/update.html) statements, respectively. Com_delete_multi and Com_update_multi are similar but apply to [``DELETE``](https://dev.mysql.com/doc/refman/5.7/en/delete.html) and [``UPDATE``](https://dev.mysql.com/doc/refman/5.7/en/update.html) statements that use multiple-table syntax.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisBorderShow": false,
            "axisCenteredZero": false,
            "axisColorMode": "text",
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "barWidthFactor": 0.6,
            "drawStyle": "bars",
            "fillOpacity": 100,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "insertNulls": false,
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "never",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "normal"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green"
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "short"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 12,
        "y": 18
      },
      "id": 22,
      "links": [
        {
          "title": "Server Status Variables",
          "url": "https://dev.mysql.com/doc/refman/5.7/en/server-status-variables.html#statvar_Com_xxx"
        }
      ],
      "options": {
        "alertThreshold": true,
        "legend": {
          "calcs": [
            "mean",
            "lastNotNull",
            "max",
            "min"
          ],
          "displayMode": "table",
          "placement": "right",
          "showLegend": true
        },
        "tooltip": {
          "hideZeros": false,
          "mode": "multi",
          "sort": "none"
        }
      },
      "pluginVersion": "12.0.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "topk(5, increase(mysql_global_status_commands_total{instance=\"$host\"}[1h])>0)",
          "interval": "15m",
          "legendFormat": "Com_{{ command }}",
          "refId": "A"
        }
      ],
      "title": "Top Command Counters",
      "type": "timeseries"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "description": "Handler statistics are internal statistics on how MySQL is selecting, updating, inserting, and modifying rows, tables, and indexes.\nThis is in fact the layer between the Storage Engine and MySQL.\n* `read_rnd_next` is incremented when the server performs a full table scan and this is a counter you don't really want to see with a high value.\n* `read_key` is incremented when a read is done with an index.\n* `read_next` is incremented when the storage engine is asked to 'read the next index entry'. A high value means a lot of index scans are being done.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 20,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 2,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "never",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green"
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "short"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 0,
        "y": 26
      },
      "id": 24,
      "options": {
        "legend": {
          "calcs": [
            "mean",
            "max",
            "min"
          ],
          "displayMode": "table",
          "placement": "right",
          "showLegend": true
        },
        "tooltip": {
          "mode": "multi",
          "sort": "none"
        }
      },
      "pluginVersion": "8.5.11",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "rate(mysql_global_status_handlers_total{instance=\"$host\", handler!~\"commit|rollback|savepoint.*|prepare\"}[$interval]) or irate(mysql_global_status_handlers_total{instance=\"$host\", handler!~\"commit|rollback|savepoint.*|prepare\"}[5m])",
          "interval": "$interval",
          "legendFormat": "{{ handler }}",
          "refId": "A"
        }
      ],
      "title": "MySQL Handlers",
      "type": "timeseries"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "description": "",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 20,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 2,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "never",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green"
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "short"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 12,
        "y": 26
      },
      "id": 26,
      "options": {
        "legend": {
          "calcs": [
            "mean",
            "max",
            "min"
          ],
          "displayMode": "table",
          "placement": "right",
          "showLegend": true
        },
        "tooltip": {
          "mode": "multi",
          "sort": "none"
        }
      },
      "pluginVersion": "8.5.11",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "rate(mysql_global_status_handlers_total{instance=\"$host\", handler=~\"commit|rollback|savepoint.*|prepare\"}[$interval]) or irate(mysql_global_status_handlers_total{instance=\"$host\", handler=~\"commit|rollback|savepoint.*|prepare\"}[5m])\r",
          "interval": "$interval",
          "legendFormat": "{{ handler }}",
          "refId": "A"
        }
      ],
      "title": "MySQL Transaction Handlers",
      "type": "timeseries"
    },
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 34
      },
      "id": 28,
      "panels": [],
      "title": "Memory Utilization",
      "type": "row"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "description": "***System Memory***: Total Memory for the system.\\\n***InnoDB Buffer Pool Data***: InnoDB maintains a storage area called the buffer pool for caching data and indexes in memory.\\\n***TokuDB Cache Size***: Similar in function to the InnoDB Buffer Pool,  TokuDB will allocate 50% of the installed RAM for its own cache.\\\n***Key Buffer Size***: Index blocks for MYISAM tables are buffered and are shared by all threads. key_buffer_size is the size of the buffer used for index blocks.\\\n***Adaptive Hash Index Size***: When InnoDB notices that some index values are being accessed very frequently, it builds a hash index for them in memory on top of B-Tree indexes.\\\n ***Query Cache Size***: The query cache stores the text of a SELECT statement together with the corresponding result that was sent to the client. The query cache has huge scalability problems in that only one thread can do an operation in the query cache at the same time.\\\n***InnoDB Dictionary Size***: The data dictionary is InnoDB ‘s internal catalog of tables. InnoDB stores the data dictionary on disk, and loads entries into memory while the server is running.\\\n***InnoDB Log Buffer Size***: The MySQL InnoDB log buffer allows transactions to run without having to write the log to disk before the transactions commit.\n",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 60,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 2,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "never",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "normal"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green"
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "bytes"
        },
        "overrides": [
          {
            "matcher": {
              "id": "byName",
              "options": "System Memory"
            },
            "properties": [
              {
                "id": "custom.fillOpacity",
                "value": 0
              },
              {
                "id": "custom.stacking",
                "value": {
                  "group": false,
                  "mode": "normal"
                }
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 9,
        "w": 24,
        "x": 0,
        "y": 35
      },
      "id": 30,
      "links": [
        {
          "title": "Detailed descriptions about metrics",
          "url": "https://www.percona.com/doc/percona-monitoring-and-management/dashboard.mysql-overview.html#mysql-internal-memory-overview"
        }
      ],
      "options": {
        "legend": {
          "calcs": [
            "mean",
            "max",
            "min"
          ],
          "displayMode": "table",
          "placement": "right",
          "showLegend": true
        },
        "tooltip": {
          "mode": "multi",
          "sort": "none"
        }
      },
      "pluginVersion": "8.5.11",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "mysql_global_status_innodb_page_size{instance=\"$host\"} * on (instance) mysql_global_status_buffer_pool_pages{instance=\"$host\",state=\"data\"}",
          "interval": "",
          "legendFormat": "InnoDB Buffer Pool Data",
          "refId": "A"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "node_memory_MemTotal_bytes{instance=\"$host\"}",
          "hide": false,
          "interval": "$interval",
          "intervalFactor": 2,
          "legendFormat": "System Memory",
          "refId": "B"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "mysql_global_variables_innodb_log_buffer_size{instance=\"$host\"}",
          "hide": false,
          "interval": "$interval",
          "legendFormat": "InnoDB Log Buffer Size",
          "refId": "C"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "mysql_global_variables_innodb_additional_mem_pool_size{instance=\"$host\"}",
          "hide": false,
          "interval": "$interval",
          "intervalFactor": 2,
          "legendFormat": "InnoDB Additional Memory Pool Size",
          "refId": "D"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "mysql_global_status_innodb_mem_dictionary{instance=\"$host\"}",
          "hide": false,
          "interval": "$interval",
          "legendFormat": "InnoDB Dictionary Size",
          "refId": "E"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "mysql_global_variables_key_buffer_size{instance=\"$host\"}",
          "hide": false,
          "interval": "$interval",
          "legendFormat": "Key Buffer Size",
          "refId": "F"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "mysql_global_status_innodb_mem_adaptive_hash{instance=\"$host\"}",
          "hide": false,
          "interval": "$interval",
          "legendFormat": "Adaptive Hash Index Size",
          "refId": "G"
        }
      ],
      "title": "MySQL Internal Memory Overview",
      "type": "timeseries"
    },
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 44
      },
      "id": 36,
      "panels": [],
      "title": "MySQL Network Traffic",
      "type": "row"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "description": "MySQL Network Traffic\nMySQL Network Traffic - Here we can see how much network traffic is generated by MySQL. Outbound is network traffic sent from MySQL and Inbound is network traffic MySQL has received.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 60,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 2,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "never",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "normal"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green"
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "decbytes"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 0,
        "y": 45
      },
      "id": 32,
      "options": {
        "legend": {
          "calcs": [
            "mean",
            "max",
            "min"
          ],
          "displayMode": "table",
          "placement": "bottom",
          "showLegend": true
        },
        "tooltip": {
          "mode": "multi",
          "sort": "none"
        }
      },
      "pluginVersion": "8.5.11",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "rate(mysql_global_status_bytes_received{instance=\"$host\"}[$interval]) or irate(mysql_global_status_bytes_received{instance=\"$host\"}[5m])",
          "interval": "$interval",
          "legendFormat": "Inbound",
          "refId": "A"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "rate(mysql_global_status_bytes_sent{instance=\"$host\"}[$interval]) or irate(mysql_global_status_bytes_sent{instance=\"$host\"}[5m])",
          "hide": false,
          "interval": "$interval",
          "legendFormat": "Outbound",
          "refId": "B"
        }
      ],
      "title": "MySQL Network Traffic",
      "type": "timeseries"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "P1809F7CD0C75ACF3"
      },
      "description": "MySQL Network Usage Hourly\nMySQL Network Usage Hourly - Here we can see how much network traffic is generated by MySQL per hour. You can use the bar graph to compare data sent by MySQL and data received by MySQL.",
      "fieldConfig": {
        "defaults": {},
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 12,
        "y": 45
      },
      "id": 34,
      "options": {
        "alertThreshold": true
      },
      "pluginVersion": "8.5.11",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "increase(mysql_global_status_bytes_received{instance=\"$host\"}[1h])",
          "interval": "30m",
          "legendFormat": "Received",
          "refId": "A"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "P1809F7CD0C75ACF3"
          },
          "expr": "increase(mysql_global_status_bytes_sent{instance=\"$host\"}[1h])",
          "hide": false,
          "interval": "30m",
          "legendFormat": "Sent",
          "refId": "B"
        }
      ],
      "title": "MySQL Network Usage Hourly",
      "type": "timeseries"
    }
  ],
  "preload": false,
  "refresh": "",
  "schemaVersion": 41,
  "tags": [],
  "templating": {
    "list": [
      {
        "auto": false,
        "auto_count": 30,
        "auto_min": "10s",
        "current": {
          "text": "1m",
          "value": "1m"
        },
        "description": "Interval for refreshing the visualization of Graphs",
        "label": "Interval",
        "name": "interval",
        "options": [
          {
            "selected": false,
            "text": "1s",
            "value": "1s"
          },
          {
            "selected": false,
            "text": "5s",
            "value": "5s"
          },
          {
            "selected": true,
            "text": "1m",
            "value": "1m"
          },
          {
            "selected": false,
            "text": "10m",
            "value": "10m"
          },
          {
            "selected": false,
            "text": "30m",
            "value": "30m"
          },
          {
            "selected": false,
            "text": "1h",
            "value": "1h"
          },
          {
            "selected": false,
            "text": "6h",
            "value": "6h"
          },
          {
            "selected": false,
            "text": "12h",
            "value": "12h"
          }
        ],
        "query": "1s,5s,1m,10m,30m,1h,6h,12h",
        "refresh": 2,
        "type": "interval"
      },
      {
        "current": {
          "text": "130.193.59.248:9104",
          "value": "130.193.59.248:9104"
        },
        "datasource": {
          "type": "prometheus",
          "uid": "P1809F7CD0C75ACF3"
        },
        "definition": "label_values(mysql_up, instance)",
        "description": "Server to Monitor",
        "includeAll": false,
        "label": "Server",
        "name": "host",
        "options": [],
        "query": {
          "query": "label_values(mysql_up, instance)",
          "refId": "StandardVariableQuery"
        },
        "refresh": 1,
        "regex": "",
        "type": "query"
      }
    ]
  },
  "time": {
    "from": "now-5m",
    "to": "now"
  },
  "timepicker": {},
  "timezone": "",
  "title": "MySQL Dashboard W",
  "uid": "r4uc0hUGkk",
  "version": 1
}