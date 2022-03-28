// img
import DownloadDataPic from '../../assets/img/jeremy-bezanger-Ro38zH1CRUY-unsplash.jpg';
import DataBrokersPic from '../../assets/img/annie-spratt-t859lVr8KY0-unsplash.jpg';
import InferredDataPic from '../../assets/img/thisisengineering-raeng-8hgmG03spF4-unsplash-520x245.jpg';
import RiskLocDataPic from '../../assets/img/donald-giannatti-Wj1D-qiOseE-unsplash.jpg';
import DeleteDataPic from '../../assets/img/sara-kurfess-6lcT2kRPvnI-unsplash.jpg';

//utils
import styled from 'styled-components';

// Contains each link infomations
const educLinks = [
  {
    img: DownloadDataPic,
    title: 'How to download my data ?',
    link:'#'
  },
  {
    img: DataBrokersPic,
    title: 'How to remove access to Data Brokers ?',
    link:'#'
  },
  {
    img: InferredDataPic,
    title: 'What is inferred data ?',
    link:'#'
  },
  {
    img: RiskLocDataPic,
    title: 'What is the risk of sharing locational data ?',
    link:'#'
  },
  {
    img:DeleteDataPic,
    title:'How to delete data from my applications ?',
    link:'#'
  }
];

// Styled-components
const Article = styled.article`
  background-color: var(--clr-lightest);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const LinkList = styled.ul`
list-style-type: none;
border-radius:0.5rem;`;

const LinkItem = styled.li`
display:grid;
  grid-template-columns:20% 80%;
  grid-column-gap:0.5rem;
  align-items: center;
  margin: 0.5rem 0.25rem;
  border-radius: 0.5rem;
  padding:1rem 1rem 1rem 2rem;
  font-weight: 200;


& > img {
    width:100%;
    height:2.5rem;
    border-radius:0.5rem;
}`;

export default function EducLinkList() {
  return (
    <Article>
        <h2>Education</h2>
      <LinkList>
        {/* Mapping link array to display each element */}
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {educLinks.map((elt, index) => (
          <LinkItem key={index} >
       <img src={elt.img} alt={elt.title} />
              <a href={elt.link}>{elt.title}</a>
          </LinkItem>
        ))}
      </LinkList>
    </Article>
  );
}