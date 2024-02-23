import React from 'react';

const PlaceholderItem = () => (
  <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
    <a href="" className="card image-box h-100  w-100">
      <div className="ph-picture"></div>
      <div className="ph-item">
        <div className="ph-col-12">
          <div className="ph-row">
            <div className="ph-col-12 small" />
            <div className="ph-col-12 small" />
          </div>
        </div>
      </div>
    </a>
  </div>
);

const CategoryLoading = ({ isLoading }) => (
  <div className={isLoading}>
    <div className="row">
      {[...Array(6)].map((_, index) => (
        <PlaceholderItem key={index} />
      ))}
    </div>
  </div>
);

export default CategoryLoading;
