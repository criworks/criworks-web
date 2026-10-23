# Back portraits per accent color

The home's accent picker shows the back portrait that matches the picked
color. Drop the photos here with these exact names; until a file exists, the
original portrait (`src/assets/images/splash-portrait.png`) shows instead.

| Color   | Hex       | File                 |
| ------- | --------- | -------------------- |
| Cyan    | `#23C0CF` | `back-cyan.png`      |
| Blue    | `#295FD7` | `back-blue.png`      |
| Violet  | `#A621D9` | `back-violet.png`    |
| Orange  | `#EE9837` | `back-orange.png`    |
| Red-orange | `#EC622E` | `back-red-orange.png` |
| Red     | `#E83657` | `back-red.png`       |
| Green   | `#85BC7F` | `back-green.png`     |

Same framing and size as the original (1183×810, transparent background), so
the swap doesn't move the image. The paths live in `src/sections/Home/Home.astro`.
