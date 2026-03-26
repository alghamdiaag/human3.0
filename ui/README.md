# Human3.0 UI Layer

This folder contains the MVP frontend for Human3.0.

## Purpose

The UI layer is separate from the engine layer.

- `prompts/` contains prompting logic
- `schemas/` contains structured data models
- `docs/` contains design and UX references
- `ui/` contains the frontend application

## Rules

1. Do not place frontend files in the project root.
2. Do not mix UI code with prompts or schemas.
3. Keep the UI consistent with the design system documented in `docs/design/`.
4. Build reusable components instead of page-specific duplicated code.

## Initial Scope

The MVP UI will include these screens:

1. Start
2. Framing
3. Question
4. Reflection
5. Conflict
6. Conclusion
7. Identity / Synthesis
8. Report
9. Review

## Notes

This folder is intentionally separated so the frontend can evolve without breaking the Human3.0 engine.
