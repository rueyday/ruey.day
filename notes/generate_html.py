import csv, requests, os
from collections import defaultdict

CSV_URL = "https://docs.google.com/spreadsheets/d/1X3OYoFekroXSSxcdM0eMgiW_u3qEWUBbT5azrSiHCOQ/export?format=csv&gid=0"

# Fetch spreadsheet as CSV
r = requests.get(CSV_URL)
r.raise_for_status()

areas = defaultdict(list)
reader = csv.DictReader(r.text.splitlines())
current_area = ""
for row in reader:
    area = row["Area"].strip()
    if area != "":
        current_area = area
    else:
        area = current_area
    topic = row["Topics"].strip()
    link = row["Public note"].strip()
    areas[area].append((topic, link))

# Build HTML for spreadsheet section
section = ['<section id="SpreadsheetTopics">', "<h2>Notes</h2>"]

for area, topics in areas.items():
    section.append('<div class="area-block">')
    section.append('<div class="area-header" onclick="this.parentElement.classList.toggle(\'open\')">')
    section.append(f"<h3>{area}</h3>")
    section.append('<button class="toggle-btn"><i class="fas fa-chevron-down"></i></button>')
    section.append("</div>")
    section.append('<ul class="topic-list">')
    for topic, link in topics:
        section.append(f'<li><a href="{link}" target="_blank">{topic}</a></li>')
    section.append("</ul>")
    section.append("</div>")

section.append("</section>")

spreadsheet_html = "\n".join(section)

# Paths
script_dir = os.path.dirname(os.path.abspath(__file__))
template_path = os.path.join(script_dir, "template.html")
output_path = os.path.join(script_dir, "index.html")

# Read template
with open(template_path, "r", encoding="utf-8") as f:
    template = f.read()

# Inject spreadsheet HTML into placeholder
if "{{SPREADSHEET_CONTENT}}" not in template:
    raise ValueError("Placeholder {{SPREADSHEET_CONTENT}} not found in template.html")

output = template.replace("{{SPREADSHEET_CONTENT}}", spreadsheet_html)

# Write output
with open(output_path, "w", encoding="utf-8") as f:
    f.write(output)

print(f"✅ index.html updated successfully at {output_path}")
