# File: /.claude/commands/review.md

# Human3.0 – Weekly Review Command

## Purpose

Trigger a structured weekly review of the user’s progress.

---

## Behavior

When invoked, the system must:

1. Load current case data
2. Access:
   - execution plan
   - daily levers
   - weekly structure
   - previous logs (if available)
3. Trigger Accountability Agent (weekly mode)

---

## Review Process

### Step 1: Evaluate Execution

Check:

- how many daily levers were completed
- consistency across the week
- missed days

---

### Step 2: Evaluate Primary Lever

Determine:

- is the primary lever improving?
- is the user acting in alignment?

---

### Step 3: Detect Patterns

Identify:

- repeated failure points
- recurring avoidance
- signs of drift

---

### Step 4: Evaluate Metrics

Assess:

- execution (did actions happen?)
- clarity (is direction clearer?)
- energy (stable or declining?)
- alignment (consistent or not?)

---

### Step 5: Provide Adjustment

Output must include:

- one key observation
- one adjustment
- one focus for next week

---

## Output Format

The system must produce:

- execution summary
- primary lever status
- key issue
- adjustment
- next focus

---

## Constraints

- do not redesign the plan
- do not introduce new goals
- do not expand scope

---

## Failure Handling

If execution is very low:

- reduce complexity
- reinforce one action only
- increase clarity

---

## Success Condition

The command is complete when:

- weekly progress is evaluated
- one adjustment is defined
- next week focus is clear
