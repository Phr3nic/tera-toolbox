const path = require('path');
const fs = require('fs');
const ConfigFilePath = path.join(__dirname, '..', 'config.json');

let defaultConfig = {
    branch: 'master',
    uilanguage: 'en',
    updatelog: false,
    devmode: false,
    noselfupdate: false,
    noupdate: false,
    noslstags: false,
    noserverautojoin: false
};

function loadConfig() {
    let result = null;
    try {
        result = fs.readFileSync(ConfigFilePath, 'utf8');
        return JSON.parse(result);
    } catch (_) {
        return defaultConfig;
    }
}

function saveConfig(newConfig) {
    fs.writeFileSync(ConfigFilePath, JSON.stringify(newConfig, null, 4));
}

module.exports = { loadConfig, saveConfig };
