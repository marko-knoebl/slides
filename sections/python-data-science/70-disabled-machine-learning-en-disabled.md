# Machine learning

## Categories of methods

- supervised learning
- unsupervised learning
- reinforcement learning

## Example tasks

- classification (assigning labels to points in n-dimensional space)  
  input: existing points with labels
- regression (assigning values to points in n-dimensional space)  
  input: existing points with values
- clustering (clustering points in n-dimensional space)  
  input: existing points
- dimensionality reduction (mapping points in n-dimensional space to points in m-dimensional space (m << n, mapping is mostly reversible))

## Real-world tasks

- _classification_: spam detection based on a number of words / phrases (2x "nigerian prince", 1x "viagra")
- _regression_: estimation of distance of galaxy based on its redshift
- _clustering_ recognizing reoccuring elements in computer vision

## Example: linear regression

Tim buys 1 liter of milk and 1 kg of bread for 4.48€
Sue buys 2 liters of milk and 3 kg of bread for 13.40€
Claudia buys 3 liters of milk and 2 kg of bread for 10.98€

They all buy at different shops.

What would be an appropriate estimate for the price of 1 liter of milk / 1 kg of bread?

If another shopper buys 2 liters of milk and 2 kg of bread, what could we expect they will pay?
