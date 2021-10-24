import styled from 'styled-components'
import Account from './Account'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: space-between;
`

const Column = styled.div`
  flex: 1;
`

const Body = () => {
  return (
    <Container>
      <Column>
        <Account
          title="Salary account"
          accountAddress="0x5C577ff40872E7D1F34159f294b51b9AafD4EeB3"
        />
      </Column>
      <Column>
        <Account
          title="Saving account for taxes"
          accountAddress="0x97eDF2CD501671Bae364B027e3A0A06BA98fB76d"
        />
      </Column>
    </Container>
  )
}

export default Body
