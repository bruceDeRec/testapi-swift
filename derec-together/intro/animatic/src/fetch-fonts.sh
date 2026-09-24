#!/usr/bin/env bash
# Downloads the brand faces (Fraunces, Atkinson Hyperlegible Next; both SIL Open Font License) into ./fonts
# and writes fonts/local.css, which render.html and board.html load.
set -euo pipefail
cd "$(dirname "$0")"; mkdir -p fonts
UA="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
curl -s -A "$UA" "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Atkinson+Hyperlegible+Next:wght@400;600;700&display=swap" > fonts/g.css
python3 - <<'PY'
import re, subprocess, os
css = open('fonts/g.css').read(); out = []
for sub, b in re.findall(r'/\*\s*([\w-]+)\s*\*/\s*@font-face\s*{([^}]*)}', css):
    if sub != 'latin': continue
    fam = re.search(r"font-family:\s*'([^']+)'", b).group(1); sty = re.search(r"font-style:\s*(\w+)", b).group(1)
    wt = re.search(r"font-weight:\s*([\d ]+)", b).group(1).strip(); url = re.search(r"url\((https://[^)]+)\)", b).group(1)
    fn = f"fonts/{fam.replace(' ', '')}-{sty}-{wt.replace(' ', '_')}.woff2"
    if not os.path.exists(fn): subprocess.run(['curl', '-s', '-o', fn, url], check=True)
    out.append(f"@font-face{{font-family:'{fam}';font-style:{sty};font-weight:{wt};font-display:block;src:url('{os.path.basename(fn)}') format('woff2');}}")
open('fonts/local.css', 'w').write("\n".join(out)); print('fonts ready')
PY
