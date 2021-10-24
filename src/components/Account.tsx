import {
  Card,
  EthHashInfo,
  Text,
  Title
} from '@gnosis.pm/safe-react-components'
import { ethers } from 'ethers'
import styled from 'styled-components'
import useGetBalance from '../hooks/Balance'

const SCard = styled(Card)`
  margin-top: 30px;
`

const Balance = styled.div`
  padding-left: 40px;
`

interface SavingsAccountProps {
  title: string
  accountAddress: string
}

const Account = ({ title, accountAddress }: SavingsAccountProps) => {
  const { accountBalance } = useGetBalance(accountAddress, 'rinkeby', 10000)

  return (
    <SCard>
      <Title size="sm" withoutMargin strong>
        {title}
      </Title>
      <EthHashInfo
        hash={accountAddress}
        textSize="xl"
        shortenHash={4}
        showIdenticon
        showCopyBtn
      />
      <Balance>
        <Text size="xl" color="placeHolder">
          {accountBalance ? ethers.utils.formatEther(accountBalance) : '0'} ETH
        </Text>
      </Balance>
    </SCard>
  )
}

export default Account
