module.exports = {
    apps : [
        {
            "name": "jd_parse",
            "script": "src/bin/www",
            "exec_mode": "cluster_mode",
            "instances": process.env.SERVER_INSTANCE_COUNT || 2,
            "log_date_format": "YYYY-MM-DD HH:mm:SS",
            "log_file": "logs/jd_parse.log",
            "error_file": "logs/jd_parse-err.log",
            "pid_file": "logs/jd_parse.pid",
            "watch": false,
            "env": {
                "NODE_ENV": "production",
                "NPM_CONFIG_LOGLEVEL": "error",
                "RUNTIME_USER": "node",
                "RUNTIME_GROUP": "node",
                "TZ": "Asia/Shanghai",
            }
        }
    ]
};