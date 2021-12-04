import React from "react";

const CorouselItem = ({
  imgSrc = "https://i0.wp.com/www.jobopening.in/wp-content/uploads/2020/08/6-Month-Courses-After-12th-Science..jpg?fit=2240%2C1260&ssl=1",
  title = "",
  subtitle = "",
  description = "",
  active = false,
}) => {
  return (
    <div class={`item ${active ? 'active' : ''}`}>
      <div class="col-xs-12 col-sm-4 col-md-4 team-member">
        <img src={imgSrc} alt="team-member-img1" />
      </div>
      <div class="col-xs-12 col-sm-8 col-md-8 team-member-bio">
        <h3 class="team-member-name">{title}</h3>
        <p class="text-muted-role">{subtitle}</p>
        <p class="team-text-short">{description}</p>
      </div>
    </div>
  );
};

export default CorouselItem;
