# Human3.0 Screen Inventory

## Purpose

This document defines all screens in the Human3.0 system.

Each screen is treated as a controlled cognitive state, not just a UI page.

This is the reference used to:
- map UI to system logic
- extract reusable components
- maintain consistency across the product

---

# 1. Entry Screen

## Name
Start Protocol

## Purpose
Introduce the system and initiate the experience

## Key Elements
- Main headline (protocol identity)
- Short explanation
- Expected outcome
- Start button

## Primary Action
Start

## Notes
This screen must feel decisive and minimal

---

# 2. Framing Screen

## Name
System Framing

## Purpose
Explain how the system works before interaction begins

## Key Elements
- Explanation of the process
- Stage overview (grid or structure)
- System philosophy
- Continue / Skip

## Primary Action
Continue

## Secondary Action
Skip

---

# 3. Question Screen

## Name
Cognitive Input

## Purpose
Collect structured user input

## Key Elements
- Question (main focus)
- Example (clarification)
- Context / reason
- Large text input area
- Status indicator (system listening)

## Primary Action
Continue

## Rules
- No multiple questions
- No distractions
- Must require input before continuing

---

# 4. Reflection Screen

## Name
Pattern Reflection

## Purpose
Show system understanding and extracted insights

## Key Elements
- Insight list (2–3 max)
- Confidence indicator
- Pattern recognition

## Primary Action
Confirm

## Secondary Action
Adjust

---

# 5. Conflict Screen

## Name
Decision Conflict

## Purpose
Force resolution of contradiction

## Key Elements
- Conflict explanation
- Two or more choices
- Direct comparison

## Primary Action
Select one option

## Rules
- No skipping
- No free text
- Must resolve before continuing

---

# 6. Conclusion Screen

## Name
Stage Conclusion

## Purpose
Close current stage and transition

## Key Elements
- Summary of findings
- Why it matters
- Next stage introduction

## Primary Action
Continue to next stage

---

# 7. Synthesis Screen

## Name
Identity Construction

## Purpose
Combine insights into a structured identity

## Key Elements
- Persona / identity
- Traits
- Key findings
- Metrics (confidence, stability, etc.)
- Recommendation

## Primary Action
Continue

---

# 8. Report Screen

## Name
Final Output

## Purpose
Deliver final result

## Key Elements
- Report summary
- Key insights
- Downloadable file (PDF or similar)

## Primary Action
Download report

---

# 9. Post-Protocol Screen

## Name
Review Loop

## Purpose
Re-evaluate decisions over time

## Key Elements
- Recall previous decision
- Compare plan vs execution
- Reflection input
- System feedback

## Primary Action
Submit reflection

---

# Flow Order

The system must always follow this sequence:

1. Entry
2. Framing
3. Question
4. Reflection (optional)
5. Conflict (if needed)
6. Conclusion
7. Synthesis
8. Report
9. Post-Protocol

---

# Rules

- Each screen represents one cognitive state only
- No mixing of multiple states in one screen
- No skipping mandatory states (especially conflict)
- The system controls progression, not the user
