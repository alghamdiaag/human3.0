# Human3.0 UX Flow System

## Purpose

This document defines how the user moves through the Human3.0 system.

It connects:
- screens
- components
- interaction rules
- system behavior

This is the operational UX layer of the product.

---

# Core Principle

Human3.0 is a guided system.

The user does not navigate freely.

The system controls:
- sequence
- progression
- state transitions

---

# Flow Overview

The experience follows a strict linear protocol:

1. Entry
2. Framing
3. Question Loop
4. Reflection (conditional)
5. Conflict (conditional)
6. Conclusion
7. Synthesis
8. Report
9. Post-Protocol Loop

---

# 1. Entry → Framing

## Trigger
User clicks "Start"

## Behavior
- move to system explanation
- introduce structure and expectations

---

# 2. Framing → Question

## Trigger
User clicks "Continue"

## Behavior
- load first question
- initialize session context

---

# 3. Question Loop

## Structure
This is the core interaction loop.

### Each cycle:
1. Show QuestionBlock
2. Collect input via TextResponseArea
3. Submit input
4. System evaluates response
5. Decide next state

---

# Decision Logic (High-Level)

After each answer, the system evaluates:

- Is input sufficient?
- Are patterns forming?
- Is there contradiction?
- Is stage complete?

---

# 4. Reflection (Conditional)

## Trigger
- enough data collected
- early pattern detection

## Behavior
- show ReflectionBlock
- user confirms or adjusts

## Next
- return to Question
OR
- move forward

---

# 5. Conflict (Conditional)

## Trigger
- contradiction detected in user responses

## Behavior
- show ConflictBlock
- force decision

## Rules
- cannot skip
- must select one option

## Next
- continue Question Loop

---

# 6. Conclusion

## Trigger
- stage completion reached

## Behavior
- show ConclusionBlock
- summarize findings
- introduce next stage

## Next
- move to next stage Question

---

# 7. Synthesis

## Trigger
- all stages completed

## Behavior
- combine insights
- construct identity
- show IdentityBlock
- show MetricsBlock

---

# 8. Report

## Trigger
- synthesis confirmed

## Behavior
- show ReportCard
- allow download

---

# 9. Post-Protocol Loop

## Trigger
- after report delivery

## Behavior
- recall key decision
- compare plan vs execution
- collect new reflection

## Output
- adjustment
- next action

---

# State Priority

The system must always resolve states in this order:

1. Conflict
2. Reflection
3. Conclusion
4. Question
5. Synthesis
6. Report
7. Post-Protocol

---

# Interaction Rules

## Input Rule
User must provide input before progressing from Question

## Single Focus Rule
Each screen has one main action

## No Skip Rule
Critical states cannot be skipped:
- conflict
- required questions

## Controlled Navigation
User does not jump between stages

---

# Transition Rules

- Always show Conclusion before moving to next stage
- Never skip stages
- Never jump directly to report

---

# Feedback Loop

The system is not one-time.

After report:
- user returns
- re-evaluates decisions
- continues loop

---

# UX Feel

The user must feel:

- guided
- focused
- progressing
- challenged when needed
- understood by the system

---

# Summary

Human3.0 UX is:

- linear
- state-driven
- decision-oriented
- structured
- controlled

It is not:

- free navigation
- dashboard browsing
- multi-task UI
