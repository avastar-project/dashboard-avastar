/**
 * UsersReviewSection is a component that represents the section of the Homepage page regarding the user's reviews.
 */

//utils
import styled from 'styled-components';

// Img
import DanielProfil from '../../assets/daniel-review.png';
import BernardProfil from '../../assets/bernard-review.png';
import LeaProfil from '../../assets/lea-review.png';

import { Box, Grid, Typography } from '@mui/material';

// Typescript types
interface ReviewsCard {
  user: string;
  content: string;
  picture: string;
}

// Contains each review's card infomations
const reviewsCard: ReviewsCard[] = [
  {
    user: 'Daniel',
    content: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."`,
    picture: DanielProfil,
  },
  {
    user: 'Bernard',
    content: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."`,
    picture: BernardProfil,
  },
  {
    user: 'Lea',
    content: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."`,
    picture: LeaProfil,
  },
];

const StyledReviews = styled(Box)`
  padding: 2.009rem 4.851rem 3.25rem 4.851rem;
`;

const ReviewList = styled.ul`
  display: flex;
  gap: 5%;
  list-style: none;
`;

const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap:1rem;
  border:2px solid var(--clr-light);
  border-radius:10px;
  padding:1rem 2rem;

`;

const Title = styled(Typography)`
padding-bottom:2rem;`;

const ImgContainer = styled(Box)`
  & > img {
    border-radius: 50%;
  }
`;

export default function UsersReview() {
  return (
    <StyledReviews>
      <Title variant="h4">What our users say</Title>
      <Grid>
        <ReviewList>
          {/* Mapping reviews array to display each element */}
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
          {reviewsCard.map((reviewsCard: ReviewsCard, index: number) => (
            <ReviewItem key={index}>
              <Box display="flex" alignItems="center" gap={2}>
                <ImgContainer>
                  <img
                    src={reviewsCard.picture}
                    alt={`${reviewsCard.picture}`}
                  />
                </ImgContainer>
                <Typography>{reviewsCard.user}</Typography>
              </Box>
              <Typography>{reviewsCard.content}</Typography>
            </ReviewItem>
          ))}
        </ReviewList>
      </Grid>
    </StyledReviews>
  );
}
