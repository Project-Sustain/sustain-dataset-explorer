cd /s/parsons/l/sys/www/sustain/data-explorer
chmod 644 babel.config.js envoy.yaml package-lock.json package.json
chmod 644 $(find ./build ./src ./dist ./public -type f)
chmod 755 $(find . -type d)
