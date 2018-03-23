import React from 'react'
import Slider from 'react-slick'

class HomeSlider extends React.Component {
    render () {
      var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
      };
      return (
        <Slider {...settings}>
          <div><img src="https://images.unsplash.com/reserve/u8GBf8bBSGy3YCIhyZeI_IMG_8737.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=521aff4cf3f077468191334e38e1e34c&auto=format&fit=crop&w=750&q=80" height="400" width="800"/></div>
          <div><img src="https://images.unsplash.com/photo-1515022376298-7333f33e704b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f19787ca05dc27cf621e01657abfe897&auto=format&fit=crop&w=751&q=80" height="400" width="800"/></div>
          <div><img src="https://images.unsplash.com/photo-1507529763579-34d571f1fbb4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bc2abffaf49f6776c4f2ac9b37ccc1c&auto=format&fit=crop&w=750&q=80" height="400" width="800"/></div>
          <div><img src="https://images.unsplash.com/photo-1510001618818-4b4e3d86bf0f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac3cfd6009a469e331bc67e0dba35c3a&auto=format&fit=crop&w=750&q=80" height="400" width="800"/></div>
          <div><img src="https://images.unsplash.com/photo-1463319611694-4bf9eb5a6e72?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e943caf37db69ac7babc7465013aee9&auto=format&fit=crop&w=750&q=80" height="400" width="800"/></div>
          <div><img src="https://images.unsplash.com/photo-1518879776099-fec4ea3edc5b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=711417f8aba4969d390a66599c0e77c5&auto=format&fit=crop&w=890&q=80" height="400" width="800"/></div>
        </Slider>
      );
    }
  }

  export default HomeSlider;