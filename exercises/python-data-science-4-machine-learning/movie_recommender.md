# Movie Recommender

Based on data from the grouplens database, build a recommender that recommends users films based on films that they have liked

For this purpose, use pre-existing ratings of users and films. Simplify the data by using dimensionality reduction.

example program run:

```py
mr = MovieRecommender()

mr.load_data()
mr.fit()
print(mr.accuracy_score())

print(
    mr.recommend_similar(
        [
            "North by Northwest (1959)",
            "Benny & Joon (1993)",
            "Last Man Standing (1996)",
            "Third Man, The (1949)",
            "Othello (1995)",
        ]
    )
)
```

see also:

<https://www.kaggle.com/rounakbanik/the-movies-dataset/code?datasetId=3405&sortBy=voteCount>
