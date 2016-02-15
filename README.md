# push-button-deploy

Trigger Jenkins CI jobs via Amazon Dash Button press.

### Initial Setup

Dash Button presses are detected by listening for network activity with the hardware address of the button. We need to determine the hardware address first.

```bash
npm run setup
```

The tool will listen for arp requests and report any hardware addresses discovered while it is running.

### Usage

```bash
HW_ADDR=$dash_mac_address node src/app.js
```
