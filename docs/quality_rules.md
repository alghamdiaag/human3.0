# File: /docs/quality_rules.md

# Human3.0 – Quality & Transparency Rules

## 1. Purpose

This document defines the rules used by the Quality & Transparency Agent.

The agent is responsible for:
- validating all outputs
- ensuring logical consistency
- preventing hallucination
- enforcing system standards

No report or output is considered valid unless it passes these rules.

---

## 2. Core Principle

All outputs must be:

- grounded in user data
- logically consistent
- minimal and precise
- actionable

If any output violates these principles, it must be rejected.

---

## 3. Validation Layers

The Quality Agent validates across four layers:

1. Data Integrity
2. Logical Consistency
3. Structural Completeness
4. Action Validity

All layers must pass.

---

## 4. Data Integrity Rules

### Rule 1: No Fabrication

The system must not:
- invent user behavior
- assume intent without evidence
- create patterns without repetition

If a conclusion cannot be traced to input:
- it must be rejected

---

### Rule 2: Evidence Linking

Each major insight must be linked to:
- a specific answer
- or repeated behavioral signal

If no link exists:
- mark as invalid

---

### Rule 3: Uncertainty Disclosure

If confidence is low:
- the system must state uncertainty
- not hide it

---

## 5. Logical Consistency Rules

### Rule 1: No Contradictory Outputs

The report must not contain:
- conflicting interpretations
- opposing recommendations

If contradiction exists:
- resolve or reject

---

### Rule 2: Single Primary Lever

The system must enforce:
- exactly one primary lever
- at most one supporting lever

If multiple primary levers exist:
- reject output

---

### Rule 3: Cross-Dimension Alignment

The system must verify:
- dimension findings support the selected lever
- no dimension contradicts synthesis

If misalignment exists:
- reject output

---

## 6. Structural Completeness Rules

Each section must contain:

- signals (what is happening)
- contradictions (what does not align)
- impact (why it matters)
- one correction (what to do)

If any component is missing:
- section is incomplete
- report must be rejected

---

## 7. Action Validity Rules

### Rule 1: Action Must Be Executable

Each action must be:
- clear
- specific
- possible immediately

Invalid actions include:
- vague suggestions
- long-term abstractions
- undefined behaviors

---

### Rule 2: Minimalism Enforcement

The system must ensure:
- no more than 3 daily levers
- no unnecessary steps

If the plan is complex:
- simplify or reject

---

### Rule 3: No Generic Advice

Reject if the report includes:
- “be consistent”
- “stay motivated”
- “work harder”
- any non-specific instruction

---

## 8. Red Flag Detection

The Quality Agent must flag:

- overuse of abstract language
- repetition of ideas
- lack of specificity
- emotional exaggeration
- ungrounded conclusions

If any are present:
- revise or reject

---

## 9. Report Rejection Conditions

The report must be rejected if:

- no clear primary lever
- contradictions unresolved
- actions not defined
- sections incomplete
- insights not evidence-based

---

## 10. Approval Criteria

The report is approved only if:

- all rules pass
- logic is consistent
- actions are clear
- user can act immediately

---

## 11. Transparency Requirement

The system must:

- avoid false certainty
- avoid hidden assumptions
- avoid inflated claims

If the system does not know:
- it must state it clearly

---

## 12. Final Responsibility

The Quality Agent is the final gate.

If the Quality Agent rejects the output:
- it must not be delivered

No exceptions.
