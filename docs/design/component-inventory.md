# Human3.0 Component Inventory

## Purpose

This document defines the reusable UI components extracted from the Human3.0 design files.

It exists to prevent duplicated page-specific implementation.

All future frontend work should use these components as the base layer.

---

# 1. App Shell

## Name
AppShell

## Purpose
Provide the persistent structural frame for protocol screens

## Includes
- top app bar
- optional side navigation
- optional bottom navigation
- progress thread
- main content container

## Notes
This is the outer wrapper for most screens

---

# 2. Top App Bar

## Name
TopAppBar

## Purpose
Maintain system identity and protocol context at the top of the screen

## Includes
- system title
- stage label or current section
- utility actions
- progress thread anchored at bottom

## Reused In
- start
- framing
- question
- reflection
- conclusion
- synthesis
- report
- review

---

# 3. Side Navigation

## Name
SideNav

## Purpose
Provide structural orientation on larger screens

## Includes
- workspace
- knowledge base
- task flow
- archive
- current active area

## Notes
Should not distract from the main cognitive flow

---

# 4. Bottom Navigation

## Name
BottomNav

## Purpose
Provide mobile-first or fixed action navigation

## Includes
- previous
- execute / continue
- next

## Notes
Use only where the screen design supports persistent bottom actions

---

# 5. Progress Thread

## Name
ProgressThread

## Purpose
Show protocol progress as a thin visual line

## Includes
- total width track
- current progress fill

## Notes
This is a structural signal, not a large progress widget

---

# 6. Stage Header

## Name
StageHeader

## Purpose
Display current stage identity and page title

## Includes
- stage number or status
- title
- optional supporting label
- optional progress percentage

---

# 7. Metadata Block

## Name
MetadataBlock

## Purpose
Display supporting protocol information in a secondary position

## Examples
- confidence
- report metadata
- mapped entities
- consistency
- archived session info

## Notes
Usually used in side columns or asymmetric support zones

---

# 8. Info Card

## Name
InfoCard

## Purpose
Display supporting explanatory content

## Examples
- curator note
- methodology
- explanation
- system note

## Notes
Use this for context, not for primary actions

---

# 9. Question Block

## Name
QuestionBlock

## Purpose
Display one core question with supporting context

## Includes
- main question
- example or clarifying context
- reason or note

## Rules
- one question only
- question must remain the dominant element on screen

---

# 10. Text Response Area

## Name
TextResponseArea

## Purpose
Collect reflective written input

## Includes
- large textarea
- placeholder
- optional system listening indicator
- optional instruction hint

## Notes
This is not a standard form input.
It is a cognitive writing zone.

---

# 11. Reflection Block

## Name
ReflectionBlock

## Purpose
Show intermediate synthesis of the user's input

## Includes
- insight items
- pattern statements
- confidence signal
- confirmation / adjustment action

---

# 12. Conflict Block

## Name
ConflictBlock

## Purpose
Present a contradiction that must be resolved

## Includes
- contradiction title
- explanation
- option comparison
- forced choice actions

## Rules
- cannot be skipped
- must drive one explicit decision

---

# 13. Conclusion Block

## Name
ConclusionBlock

## Purpose
Summarize a completed stage and introduce the next one

## Includes
- completed findings
- significance
- next stage preview

---

# 14. Identity Block

## Name
IdentityBlock

## Purpose
Present the synthesized identity or persona

## Includes
- persona title
- summary paragraph
- dominant traits
- leverage point

---

# 15. Metrics Block

## Name
MetricsBlock

## Purpose
Present structured numeric outputs

## Examples
- confidence
- stability
- mapped entities
- consistency
- efficiency
- accuracy

## Notes
Metrics should support the synthesis, not dominate the screen

---

# 16. Insight List

## Name
InsightList

## Purpose
Display multiple structured insights in editorial form

## Includes
- leading bullet or marker
- insight title
- short explanation

---

# 17. Report Card

## Name
ReportCard

## Purpose
Represent the downloadable final output

## Includes
- file identity
- short file description
- download action

---

# 18. Action Bar

## Name
ActionBar

## Purpose
Contain the main screen action(s)

## Includes
- one primary button
- optional secondary button

## Rules
- primary action must be visually dominant
- avoid multiple competing buttons

---

# 19. Primary Button

## Name
PrimaryButton

## Purpose
Trigger the main action of the screen

## Examples
- start protocol
- continue
- confirm
- generate report
- download report
- submit reflection

---

# 20. Secondary Button

## Name
SecondaryButton

## Purpose
Trigger a secondary action without competing with the primary one

## Examples
- go back
- adjust
- skip intro

---

# 21. Visual Anchor

## Name
VisualAnchor

## Purpose
Provide one atmospheric visual element supporting the page tone

## Examples
- abstract image
- report preview visual
- neural map visual

## Notes
This must never compete with the primary cognitive action

---

# 22. Chart / Comparison Block

## Name
ComparisonBlock

## Purpose
Show simple structured comparisons

## Examples
- plan vs execution
- projected vs actual
- option A vs option B

## Notes
Use only when it supports decision-making or reflection

---

# Rules

- Build components from repeated design patterns, not from individual pages
- Prefer reusable structure over page-specific custom code
- Preserve the asymmetrical editorial layout style
- Do not create generic dashboard components outside this inventory without need
