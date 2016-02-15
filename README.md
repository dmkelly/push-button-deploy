# push-button-deploy

Trigger Jenkins CI jobs via Amazon Dash Button press.

### Setup

Dash Button presses are detected by listening for network activity with the hardware address of the button. We need to determine the hardware address first.

```bash
npm run setup
```

The tool will listen for arp requests and report any hardware addresses discovered while it is running.

### Usage

This app needs to be provided with the hardware address of the button discovered during the setup process via the environment. An optional `.env` file can be added to the base directory of this project to pass environment variables to the script.

```bash
HW_ADDR=$dash_mac_address node src/app.js
```
