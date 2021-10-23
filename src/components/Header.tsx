import { Link, Text, Title } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
  return (
    <Container>
      <TitleWrapper>
        <div>
          <Title size="xl" withoutMargin strong>
            Autotax
          </Title>
          <Text size="xl">
            Powered by{' '}
            <Link
              href="https://www.gnosis-safe.io/"
              target="_blank"
              size="xl"
            >
              Safe
            </Link>
            {' '}and{' '}
            <Link
              href="https://www.gelato.network/"
              target="_blank"
              size="xl"
            >
              Gelato
            </Link>
          </Text>
        </div>
      </TitleWrapper>
    </Container>
  )
}

export default Header
