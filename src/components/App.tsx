import styled from 'styled-components'
import Body from './Body'
import Header from './Header'

const Container = styled.div`
  margin: 0 auto;
  padding: 30px;
  max-width: 1200px;
`

const App = () => (
  <Container>
    <Header />
    <Body />
  </Container>
)

export default App
