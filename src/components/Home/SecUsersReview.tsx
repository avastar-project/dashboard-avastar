//utils
import styled from 'styled-components';

// Icons
import UserIcon from '../../assets/icons/user-header-24.png';

// Contains each card infomations
const reviews = [
    {
      user: 'Daniel',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
      ,
      icon: UserIcon,
    },
    {
        user: 'Bernard',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
        ,
        icon: UserIcon,
      },
      {
        user: 'Lea',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
        ,
        icon: UserIcon,
      },
  ];

  const StyledReviews = styled.div`
  padding:2rem 4rem;`;

  const ReviewList = styled.ul`
  display:flex;
  justify-content:flex-start;
  gap:14rem;
  list-style:none;
  padding:2rem 0;
`;

  const ReviewItem = styled.li`
  display:flex;
  flex-direction:column;
  gap:2rem;
  border:2px solid var(--clr-light);
  border-radius:10px;
  padding:2rem 1rem;
  width:19%;
  
  & > div {
      display:flex;
      align-items: center;
      gap:1rem;
      & > img {
          width:20%;
      }
  };
  `;

export default function SecUsersReview() {
    return (
      <StyledReviews>
          <h1>What our users say</h1>
        <ReviewList>
          {/* Mapping review array to display each element */}
            {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
          {reviews.map((elt, index) => (
            <ReviewItem key={index}>
            <div>
                <img src={elt.icon} alt={`${elt.icon}-icon`} />
                <span>{elt.user}</span>
            </div>
            <p>{elt.content}</p>
            </ReviewItem>
          ))}
        </ReviewList>
      </StyledReviews>
    );
  }