# File: /cases/README.md

# Cases Directory

This folder stores runtime user data.

Each case will include:

- state.json
- identity.json
- dimension outputs
- synthesis.json
- execution.json
- report.md

---

## Important

- This folder should NOT be committed to version control
- It contains dynamic user data
- Each case is isolated by case_id

---

## Example Structure

cases/
  └── case_001/
        ├── state.json
        ├── identity.json
        ├── mind.json
        ├── body.json
        ├── spirit.json
        ├── vocation.json
        ├── synthesis.json
        ├── execution.json
        └── report.md
