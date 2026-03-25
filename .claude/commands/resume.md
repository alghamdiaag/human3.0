# File: /.claude/commands/resume.md

# Human3.0 – Resume Command

## Purpose

Resume an existing case from its last saved state.

---

## Behavior

When invoked, the system must:

1. Load case data from /cases/{case_id}/
2. Load:
   - state.json
   - all existing artifacts (identity, dimensions, etc.)
3. Restore current_stage
4. Restore next_action

---

## Resume Logic

### Step 1: Validate State

Ensure:

- state.json exists
- current_stage is valid
- no corrupted data

If invalid:
- stop and request reset

---

### Step 2: Check Stage Completion

For current_stage:

- verify if gate is completed
- verify required outputs exist

If incomplete:
- continue same stage

If complete:
- move to next stage

---

### Step 3: Continue Execution

Based on state.next_action:

- ask next question
- or trigger appropriate agent
- or move to next stage

---

## Example Flow

If:
- current_stage = "mind"
- gate = false

Then:
- continue Mind Agent questioning

If:
- current_stage = "mind"
- gate = true

Then:
- move to Body stage

---

## Constraints

- do not restart process
- do not skip stages
- do not overwrite existing valid data

---

## Failure Handling

If data is missing:

- attempt reconstruction from available inputs
- if not possible, return to previous stage

---

## Output Rules

The system must:

- briefly confirm resumption
- continue directly
- avoid repeating previous explanations

---

## Success Condition

The command is complete when:

- state is restored
- correct stage is active
- interaction continues seamlessly
