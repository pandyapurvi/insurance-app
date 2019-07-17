import { gql } from 'apollo-boost';

const getFaqQuery = gql`
  {
    faqs{
      title
      body
      id
    }
  }
`

const getHomepageQuery = gql`
  {
    homepage(id:1){
    heading
    subheading
    heroImageUrl
    }
  }
`

const getFaqDetailQuery = gql`
query($id: ID){
  faq(id: $id){
    id
    title
    body
  }
}
`

export { getFaqQuery, getHomepageQuery, getFaqDetailQuery };
