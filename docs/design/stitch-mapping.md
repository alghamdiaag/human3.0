# Human3.0 Stitch Mapping

## Purpose

This document maps the original design files (Stitch HTML screens)
to the Human3.0 design system.

It connects:
- raw UI screens
- defined screens
- reusable components

This is the bridge between design and implementation.

---

# Mapping Strategy

Each original screen is broken into:

1. Screen identity
2. Purpose
3. Extracted components
4. Implementation notes

---

# 1. Start Protocol Screen

## System Name
Entry Screen

## Purpose
Start the experience and establish tone

## Extracted Components
- AppShell
- TopAppBar
- StageHeader
- InfoCard
- PrimaryButton
- VisualAnchor

## Notes
- hero layout
- strong central focus
- minimal interaction

---

# 2. Framing Screen

## System Name
Framing

## Purpose
Explain system structure

## Extracted Components
- AppShell
- TopAppBar
- StageHeader
- InfoCard
- InsightList
- PrimaryButton
- SecondaryButton

## Notes
- contains stage overview grid
- includes system explanation

---

# 3. Question Screen

## System Name
Question

## Purpose
Collect user input

## Extracted Components
- AppShell
- TopAppBar
- StageHeader
- QuestionBlock
- TextResponseArea
- ActionBar
- PrimaryButton

## Notes
- main cognitive interaction
- must remain minimal

---

# 4. Reflection Screen

## System Name
Reflection

## Purpose
Display system interpretation

## Extracted Components
- AppShell
- TopAppBar
- StageHeader
- ReflectionBlock
- ActionBar
- PrimaryButton
- SecondaryButton

## Notes
- insight-focused
- limited to few insights

---

# 5. Conflict Screen

## System Name
Conflict

## Purpose
Resolve contradiction

## Extracted Components
- AppShell
- TopAppBar
- StageHeader
- ConflictBlock
- ActionBar
- PrimaryButton

## Notes
- no skip allowed
- decision must be forced

---

# 6. Conclusion Screen

## System Name
Conclusion

## Purpose
Close stage and transition

## Extracted Components
- AppShell
- TopAppBar
- StageHeader
- ConclusionBlock
- PrimaryButton

## Notes
- introduces next stage

---

# 7. Synthesis Screen

## System Name
Identity / Synthesis

## Purpose
Construct identity

## Extracted Components
- AppShell
- TopAppBar
- StageHeader
- IdentityBlock
- MetricsBlock
- InsightList
- PrimaryButton

## Notes
- combines all previous inputs

---

# 8. Report Screen

## System Name
Report

## Purpose
Deliver final output

## Extracted Components
- AppShell
- TopAppBar
- StageHeader
- ReportCard
- MetadataBlock
- PrimaryButton

## Notes
- includes downloadable asset

---

# 9. Post-Protocol Screen

## System Name
Review

## Purpose
Evaluate execution after decision

## Extracted Components
- AppShell
- TopAppBar
- StageHeader
- MetadataBlock
- ComparisonBlock
- TextResponseArea
- PrimaryButton

## Notes
- includes plan vs execution
- includes recall of decision

---

# Implementation Rule

When building UI:

- do NOT copy entire HTML screens
- extract components based on this mapping
- build reusable components first
- then compose screens

---

# Critical Rule

This document overrides raw design files.

If a Stitch file conflicts with this mapping:
- follow this mapping
- not the raw HTML

---

# Summary

This mapping converts:

Design → System → Components → Code

It is the foundation for building the Human3.0 UI layer.
