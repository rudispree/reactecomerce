import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppURL';
import axios from 'axios';

class ReviewList extends Component {
  constructor() {
    super();
    this.state = {
      ReviewData: [],
    };
  }

  componentDidMount() {
    let code = this.props.code;

    axios.get(AppURL.ReviewList(code)).then(response => {
      this.setState({ ReviewData: response.data });
    }).catch(error => {
      console.error("Error fetching review data:", error);
    });
  }

  render() {
    const MyList = this.state.ReviewData;
    let MyView = null;
    if (MyList.length > 0) {
      MyView = MyList.map((ReviewList, i) => {
        let starIcons = [];
        for (let j = 0; j < parseInt(ReviewList.reviewer_rating); j++) {
          starIcons.push(<i key={j} className="fa fa-star"></i>);
        }
        return (
          <div key={i}>
            <p className="p-0 m-0">
              <span className="Review-Title">{ReviewList.reviewer_name}</span>
              <span className="text-success">
                {starIcons}
              </span>
            </p>
            <p>{ReviewList.reviewer_comments}</p>
          </div>
        );
      });
    } else {
      // Handle case when there are no reviews
      MyView = <p>Tidak ada ulasan tersedia.</p>;
    }

    return (
      <div>
        {MyView}
      </div>
    );
  }
}

export default ReviewList;
