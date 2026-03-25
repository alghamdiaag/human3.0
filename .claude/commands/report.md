# File: /.claude/commands/report.md

# Human3.0 – Report Command

## Purpose

Generate the final transformation report.

---

## Behavior

When invoked, the system must:

1. Validate that all stages are complete
2. Confirm all gates are true
3. Ensure synthesis and execution outputs exist
4. Trigger Report Agent
5. Trigger Quality Agent validation
6. Deliver report if approved

---

## Pre-Generation Validation

The system must check:

- identity data exists
- dissonance data exists
- all four dimensions completed
- synthesis defined (primary lever present)
- reorientation defined
- execution plan defined

If any missing:
- reject command
- return to incomplete stage

---

## Report Generation Flow

1. Call Report Agent
2. Generate full report structure
3. Populate all sections
4. Ensure consistency

---

## Quality Validation

After report generation:

- call Quality Agent
- validate all rules

If rejected:
- revise report
- revalidate

---

## Output Rules

The final report must:

- follow full structure (13 sections)
- be coherent and consistent
- include actions in every section
- align with primary lever

---

## Delivery Format

The report must be:

- structured text
- clearly separated sections
- readable and actionable

---

## Constraints

- do not generate partial reports
- do not skip validation
- do not deliver unapproved output

---

## Failure Handling

If validation fails repeatedly:

- identify missing or inconsistent data
- return to appropriate stage
- rebuild required outputs

---

## Success Condition

The command is complete when:

- report is generated
- report passes quality validation
- report is delivered
