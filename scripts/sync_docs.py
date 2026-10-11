#!/usr/bin/env python3
"""Copy user guides from the ProcFace source repository into this site."""

import argparse
from pathlib import Path

SITE = Path(__file__).resolve().parents[1]
GUIDES = ("usage", "release", "compact-wire", "i18n")


def site_content(text: str, guide: str) -> str:
    text = text.replace(".en.md)", ".md)")
    if guide == "i18n":
        text = text.replace(
            "[README](../README.md)",
            "[README](https://github.com/LiveDevLiberate/procface#readme)",
        ).replace(
            "[README](../README.en.md)",
            "[README](https://github.com/LiveDevLiberate/procface/blob/main/README.en.md)",
        )
    if guide == "usage":
        text = text.replace(
            "GET /api/v1/processes/PID/{capabilities,current,series,stream}",
            "`GET /api/v1/processes/PID/{capabilities,current,series,stream}`",
        )
    return text


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--project", type=Path, required=True, help="ProcFace source checkout")
    parser.add_argument("--check", action="store_true", help="report drift without writing")
    args = parser.parse_args()
    project = args.project.resolve()
    stale = []
    for guide in GUIDES:
        for english in (False, True):
            suffix = ".en" if english else ""
            source = project / "docs" / f"{guide}{suffix}.md"
            target = SITE / ("i18n/en/docusaurus-plugin-content-docs/current" if english else "docs") / f"{guide}.md"
            content = site_content(source.read_text(encoding="utf-8"), guide)
            if not target.exists() or target.read_text(encoding="utf-8") != content:
                stale.append(str(target.relative_to(SITE)))
                if not args.check:
                    target.parent.mkdir(parents=True, exist_ok=True)
                    target.write_text(content, encoding="utf-8")
    if stale:
        print(("Out of sync" if args.check else "Updated") + ": " + ", ".join(stale))
    else:
        print("All bilingual guides match the ProcFace source repository")
    return int(args.check and bool(stale))


if __name__ == "__main__":
    raise SystemExit(main())
