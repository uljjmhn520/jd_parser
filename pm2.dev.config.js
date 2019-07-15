module.exports = {
  apps: [
    {
      "name": "jd_parse",
      "script": "src/bin/www",
      "exec_mode": "cluster_mode",
      "instances": process.env.SERVER_INSTANCE_COUNT || 2,
      "log_date_format": "YYYY-MM-DD HH:mm:SS",
      "log_file": "logs/jd_parse.log",
      "error_file": "logs/jd_parse-err.log",
      "pid_file": "logs/jd_parse.pid",
      "watch": ["server", "client"],
      // Delay between restart
      watch_delay: 1000,
      ignore_watch: [
        ".git",
        ".idea",
        "public",
        "node_modules",
        "node_modules/**/node_modules"
      ],
      watch_options: {
        "followSymlinks": false
      },
      "env": {
        "NODE_ENV": "development",
        "NPM_CONFIG_LOGLEVEL": "debug",
        "TZ": "Asia/Shanghai",
      }
    }
  ]
};