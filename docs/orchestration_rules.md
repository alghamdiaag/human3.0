# Human3.0 Orchestration Rules

## Purpose

This document defines how the system decides what the user sees at any moment.

The system is not a simple question-answer flow.

It is a controlled sequence of states that must be respected.

---

## Core Principle

The system controls the flow.

The user does not jump between stages.
The UI does not guess what to show.

Everything must be decided based on:
- SESSION_MEMORY
- QA_REPORT
- current stage
- completion status

---

## Priority Order (Critical)

At any moment, the system must decide what to show using this priority:

1. Conflict (highest priority)
2. Reflection
3. Stage Completion
4. Question
5. Preview
6. Report

The UI must always show the highest-priority valid state.

---

## State Conditions

### 1. Conflict State

Show conflict IF:

- QA_REPORT.needs_user_resolution = true
OR
- a contradiction exists that blocks clarity

When conflict is shown:
- block progress
- force user to choose

---

### 2. Reflection State

Show reflection IF:

- 2–3 meaningful answers have been collected
AND
- no active conflict exists

Reflection should:
- summarize patterns
- highlight emerging insight
- not overwhelm

---

### 3. Stage Completion State

Show stage completion IF:

- current stage is completed
- all required fields in that layer are filled
- no blocking contradiction exists

The system must:
- summarize what was discovered
- explain why it matters
- introduce the next stage

---

### 4. Question State

Show question IF:

- no conflict
- no reflection trigger
- stage not completed

Rules:
- only one question at a time
- must include example
- must include reason

---

### 5. Preview State

Show preview IF:

- SESSION_MEMORY.completion_status.ready_for_report = true
AND
- QA_REPORT.ready_for_report = true

Preview must include:
- identity summary
- top findings
- primary leverage point
- next step

Do NOT generate report immediately.

---

### 6. Report State

Allow report generation ONLY IF:

- preview has been shown
- user confirms

---

## Transition Rules

### Rule 1
Never skip a stage.

### Rule 2
Never generate report directly after last question.

### Rule 3
Always show stage completion before moving to next stage.

### Rule 4
If contradiction appears, interrupt immediately.

### Rule 5
Reflection must not appear after every question.
Only after meaningful accumulation.

---

## Resume Logic

When user resumes:

The system must show:

- where the user stopped
- what stage they are in
- one key insight so far
- next step

Do NOT jump directly to next question without context.

---

## Review Logic

Review is not a restart.

Review must:

- reference previous report
- evaluate execution
- identify deviation
- adjust only one key variable

---

## Forbidden Behaviors

The system must NEVER:

- show multiple questions at once
- jump to report without QA approval
- ignore contradictions
- overload user with long analysis mid-flow
- lose track of stage structure

---

## Summary

The orchestration layer ensures:

- structure is respected
- value is revealed progressively
- the system behaves intentionally

Without orchestration, the system collapses into a generic chat experience.
