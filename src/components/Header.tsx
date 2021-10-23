import {
  EthHashInfo,
  Link,
  Text,
  Title
} from '@gnosis.pm/safe-react-components'
import { providers } from 'ethers'
import { useState } from 'react'
import styled from 'styled-components'
import { Line } from '../styles/commonStyles'
import ConnectButton from './ConnectButton'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SEthHashInfo = styled(EthHashInfo)`
  margin-right: 20px;
`

const Header = () => {
  const [connectedAccount, setConnectedAccount] = useState<string>()

  const onConnect = async (provider: providers.Web3Provider) => {
    const signer = provider.getSigner()
    if (!signer) {
      setConnectedAccount(undefined)
      return
    }
    const connectedOwner = await signer.getAddress()
    setConnectedAccount(connectedOwner)
  }

  return (
    <Container>
      <TitleWrapper>
        <div>
          <Title size="xl" withoutMargin strong>
            Autotax
          </Title>
          <Text size="xl">
            Powered by{' '}
            <Link href="https://www.gnosis-safe.io/" target="_blank" size="xl">
              Safe
            </Link>{' '}
            and{' '}
            <Link href="https://www.gelato.network/" target="_blank" size="xl">
              Gelato
            </Link>
          </Text>
        </div>
      </TitleWrapper>
      <Line>
        {connectedAccount && (
          <SEthHashInfo
            hash={connectedAccount}
            textSize="xl"
            shortenHash={4}
            showIdenticon
            showCopyBtn
          />
        )}
        <ConnectButton onConnect={onConnect} />
      </Line>
    </Container>
  )
}

export default Header
