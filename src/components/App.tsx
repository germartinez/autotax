import styled from 'styled-components'
import Header from "./Header"

const Container = styled.div`
  margin: 0 auto;
  padding: 30px;
  max-width: 1200px;
`

const App = () => (
  <Container>
    <Header />
  </Container>
)

export default App
