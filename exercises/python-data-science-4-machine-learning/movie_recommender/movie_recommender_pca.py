import pandas as pd
import numpy as np
import sklearn.decomposition

N_COMPONENTS = 25
RATINGS_URL = "./ml-100k/u.data"
# RATINGS_URL = "https://files.grouplens.org/datasets/movielens/ml-100k/u.data"
TITLES_URL = "./ml-100k/u.item"
# TITLES_URL = "https://files.grouplens.org/datasets/movielens/ml-100k/u.item"


class MovieRecommender:
    def load_data(self):
        # import ratings with 0-based indexing
        ratings = pd.read_csv(
            RATINGS_URL,
            sep="\t",
            header=None,
            usecols=[0, 1, 2],
            names=["user_id", "movie_id", "rating"],
        )

        ratings["user_id"] = ratings["user_id"] - 1
        ratings["movie_id"] = ratings["movie_id"] - 1

        ratings["liked"] = ratings["rating"] >= 4

        self._ratings = ratings

        ratings_train = ratings[ratings["user_id"] % 3 != 0]
        self._ratings_train = ratings_train
        ratings_test = ratings[ratings["user_id"] % 3 == 0]

        self._ratings_train = ratings_train
        self._ratings_test = ratings_test

        # import titles with 0-based indexing
        movie_titles = pd.read_csv(
            TITLES_URL,
            sep="|",
            header=None,
            encoding="latin1",
            usecols=[0, 1],
            names=["movie_id", "title"],
        )
        movie_titles["movie_id"] -= 1
        self._movie_titles = movie_titles

        self._num_movies = self._ratings["movie_id"].nunique()
        self._num_users = self._ratings["user_id"].nunique()

        # matrix that signifies whether a user liked a specific movie
        positive_ratings = ratings[ratings["rating"] >= 4]

        liked_matrix = np.full((self._num_users, self._num_movies), False)
        liked_matrix[positive_ratings["user_id"], positive_ratings["movie_id"]] = True

        self._liked_matrix = liked_matrix

    def fit(self):
        positive_ratings_train = self._ratings_train[self._ratings_train["rating"] >= 4]

        liked_matrix_train = np.full((self._num_users, self._num_movies), False)
        liked_matrix_train[
            positive_ratings_train["user_id"], positive_ratings_train["movie_id"]
        ] = True

        self._pca = sklearn.decomposition.PCA(n_components=N_COMPONENTS)
        self._pca.fit(liked_matrix_train)

    def predict_one(self, likes):
        """
        likes: iterable of booleans

        returns a numpy array
        """
        array_2d = np.array([likes])
        return self.predict(array_2d)[0, :]

    def predict(self, likes):
        """
        likes: 2-d array or DataFrame

        returns a 2-d numpy array
        """
        likes_simplified = self._pca.transform(likes)
        likes_extrapolated = self._pca.inverse_transform(likes_simplified)
        return likes_extrapolated

    def accuracy_score(self):
        correct = 0
        incorrect = 0

        for index, rating in self._ratings_test.iterrows():
            user_id = rating["user_id"]
            movie_id = rating["movie_id"]

            user_features = self._liked_matrix[user_id : user_id + 1, :].copy()
            user_features[0, movie_id] = False
            user_features_simplified = self._pca.transform(user_features)
            user_features_extrapolated = self._pca.inverse_transform(
                user_features_simplified
            )

            predicted_like = user_features_extrapolated[0, rating["movie_id"]]

            if (
                predicted_like >= 0.1
                and rating["rating"] >= 4
                or predicted_like < 0.1
                and rating["rating"] < 4
            ):
                correct += 1
            else:
                incorrect += 1

        return correct / (correct + incorrect)

    def recommend_similar(self, titles):
        movie_ids = []
        for title in titles:
            movie = self._movie_titles[self._movie_titles["title"] == title].iloc[0]
            movie_id = movie["movie_id"]
            movie_ids.append(movie_id)
        liked_movies = np.full((self._num_movies,), False)
        liked_movies[movie_ids] = True
        predicted_likes = self.predict_one(liked_movies)
        ranks = np.argsort(-predicted_likes)
        return self._movie_titles.iloc[ranks[:20]]
