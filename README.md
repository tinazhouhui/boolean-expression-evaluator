# Boolean expression evaluator

## Assumptions
- can only add to the tree, cannot edit once node was placed, only delete
- argument names are unique

## Observations
- AddNode has to be on the leaf of constant
  - cannot throw an error and catch it otherwise any missing value will result in initial state
