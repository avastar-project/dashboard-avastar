/**
 * UsersReviewSection is a component that represents the section of the Homepage page regarding the user's reviews.
 */

//utils
import styled from 'styled-components';

// Img
import DanielProfil from '../../assets/daniel-review.png';
import BernardProfil from '../../assets/bernard-review.png';
import LeaProfil from '../../assets/lea-review.png';

// Typescript types
interface ReviewsCard {
  user: string;
  content: string;
  picture: string;
}

// Contains each review's card infomations
const reviewsCard : ReviewsCard[] =
[
    {
      user: 'Daniel',
      content: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."`
      ,
      picture: DanielProfil,
    },
    {
        user: 'Bernard',
        content: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."`
        ,
        picture: BernardProfil,
      },
      {
        user: 'Lea',
        content: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."`
        ,
        picture: LeaProfil,
      },
  ];

  const StyledReviews = styled.div`
  padding:2rem 4rem;`;

  const ReviewList = styled.ul`
  display:flex;
  justify-content:flex-start;
  gap:15%;
  list-style:none;
  padding:2rem 0;
  width:100rem;
  height:20rem;
`;

  const ReviewItem = styled.li`
  display:flex;
  flex-direction:column;
  gap:2rem;
  border:2px solid var(--clr-light);
  border-radius:10px;
  padding:1rem;
  width:19%;

  & > div {
      display:flex;
      align-items: center;
      gap:5%;

      & > img {
          width:20%;
          border-radius: 50%;
      }
  };
  `;

export default function UsersReview() {
    return (
      <StyledReviews>
          <h1>What our users say</h1>
        <ReviewList>
          {/* Mapping reviews array to display each element */}
            {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
          {reviewsCard.map((reviewsCard:ReviewsCard, index:number) => (
            <ReviewItem key={index}>
            <div>
                <img src={reviewsCard.picture} alt={`${reviewsCard.picture}`} />
                <span>{reviewsCard.user}</span>
            </div>
            <p>{reviewsCard.content}</p>
            </ReviewItem>
          ))}
        </ReviewList>
      </StyledReviews>
    );
  }