# FFXI Policy Safety Notes

## Positioning

Gaol Tactician should be positioned as an external manual memo / planning tool.

It should not be described as a gameplay automation tool, client extension, overlay, Windower/Ashita addon, or parser.

## Safe boundaries

The app must not:

- interact with the FFXI client
- interact with PlayOnline
- interact with Windower or Ashita
- read process memory
- read packets
- read logs
- read screenshots
- parse game files
- access account data
- automate gameplay
- send inputs
- modify the client
- provide in-game overlays
- use official game images/icons/logos/screenshots/assets

## README wording

Use wording like:

```text
This app is an external manual planning tool.
All information is entered manually by the user.
The app does not interact with the game client or PlayOnline.
```

Avoid wording like:

```text
assistant
automation
parser
overlay
client integration
addon
bot
memory
packet
OCR
```

unless explicitly explaining that the app does NOT do those things.
