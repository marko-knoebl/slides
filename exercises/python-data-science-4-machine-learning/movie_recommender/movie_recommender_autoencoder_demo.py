from movie_recommender_autoencoder import MovieRecommender

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

print(mr.recommend_similar(["Star Wars (1977)", "Alien (1979)"]))
