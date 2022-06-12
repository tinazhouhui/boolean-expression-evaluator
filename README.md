# Boolean expression evaluator

## Assumptions
- can only add to the tree, cannot edit once node was placed, only delete
- argument names are unique

## Observations
- AddNode has to be on the leaf of constant
  - cannot throw an error and catch it otherwise any missing value will result in initial state
  

## Design decisions
### Two trees
- one tree to represent the evaluator classes that hold the methods to evaluate
- a second tree to just render the components based on the real tree

benefits 
- major benefits of then allowing for multiple implementation of the evaluator tree - show a diagram e.g.
- allows for partial calculation and evaluation

### Class components rather than functional
- started with functional but wanted to use useContext to pass the evaluator tree
- however, all hooks are dependent on call order, and having conditional rendering did not allow that
- since this is a hook problem, implementing Context in classes solves this issue

### Violating the immutability of state
- since the state of the evaluator classes is passed in context holding pointers to different parts of the tree, 
by calling the getParent we are able to access the exact place and replace it in the whole tree.
- it is a calculated risk as right after we are creating a deep copy of the state and setting the state 
to rerender.

Benefits
- allows for not traversing through the whole tree
