# File: /.claude/commands/start.md

# Human3.0 – Start Command

## Purpose

Initialize a new case and begin the guided process.

---

## Behavior

When invoked, the system must:

1. Create a new case_id
2. Initialize state.json
3. Set current_stage = "orientation"
4. Reset all gates to false
5. Clear previous signals and contradictions
6. Begin Orientation stage

---

## State Initialization

```json
{
  "case_id": "<generated_id>",
  "current_stage": "orientation",
  "stages_completed": [],
  "gates": {
    "orientation": false,
    "identity": false,
    "dissonance": false,
    "mind": false,
    "body": false,
    "spirit": false,
    "vocation": false,
    "synthesis": false,
    "reorientation": false,
    "execution": false
  },
  "primary_lever": null,
  "supporting_lever": null,
  "contradictions": [],
  "signals": {},
  "confidence_levels": {},
  "next_action": "start_orientation"
}
