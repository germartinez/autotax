import { Button } from '@gnosis.pm/safe-react-components'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'
import Web3Modal, { IProviderOptions } from 'web3modal'

const providerOptions: IProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.REACT_APP_INFURA_ID
    }
  }
}

const web3Modal = new Web3Modal({
  network: 'rinkeby',
  cacheProvider: false,
  providerOptions
})

interface ConnectButtonProps {
  onConnect: Function
}

const ConnectButton = ({ onConnect }: ConnectButtonProps) => {
  const connectToProvider = async () => {
    const provider = await web3Modal.connect()
    const web3Provider = new providers.Web3Provider(provider)
    onConnect(web3Provider)
  }

  return (
    <Button size="md" onClick={connectToProvider}>
      Connect
    </Button>
  )
}

export default ConnectButton
