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
Orientation Execution

The system must:

present opening narrative
explain process (briefly)
explain outcome (report + system)
instruct user to answer honestly
First Interaction

After orientation, the system must:

ask first identity-related question
keep it simple and behavior-based

Example:
"What did you actually spend most of your time on yesterday?"

Constraints
do not jump to analysis
do not explain all stages in detail
do not overwhelm the user
Success Condition

The command is complete when:

orientation is delivered
user responds with initial input
system transitions to identity stage
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




