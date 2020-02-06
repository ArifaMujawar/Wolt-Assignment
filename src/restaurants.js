import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./App.css";

class Restaurants extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      res: {
        restaurants: [
          {
            name: ""
          }
        ]
      },
      order: 1
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json"
    )
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState({ res: jsonResponse });
        console.log(this.state.res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  sortRestaurants = () => {
    if (this.state.order === 1) {
      this.sortRestaurantsAlphabetically();
    } else if (this.state.order === 0) {
      this.sortRestaurantsReverse();
    }
  };

  sortRestaurantsReverse = () => {
    let sortedArray;
    sortedArray = this.state.res.restaurants.sort(function(a, b) {
      if (a.name > b.name) return -1;
      else if (a.name < b.name) return 1;
      return 0;
    });
    this.setState({ res: { restaurants: sortedArray }, order: 1 });
  };

  sortRestaurantsAlphabetically = () => {
    let sortedArray;
    sortedArray = this.state.res.restaurants.sort(function(a, b) {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    });
    this.setState({ res: { restaurants: sortedArray }, order: 0 });
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <button className="button" onClick={this.sortRestaurants}>
            Sort restaurants{" "}
          </button>
        </div>
        <div className="card">
          {this.state.res.restaurants.map(function(restaurant, idx) {
            return (
              <Card key={idx}>
                <CardContent className="card-content">
                  <img
                    src={restaurant.image}
                    className="media"
                    alt="restaurant_image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {restaurant.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {restaurant.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h6"
                    >
                      {restaurant.city}
                    </Typography>
                  </CardContent>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export { Restaurants as default };
