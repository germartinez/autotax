import { BigNumber, ethers, providers } from 'ethers'
import { useEffect, useState } from 'react'

const useGetBalance = (
  accountAddress: string,
  network: string,
  milliseconds: number
) => {
  const [accountBalance, setAccountBalance] = useState<BigNumber>()

  useEffect(() => {
    setInterval(async () => {
      const provider = providers.getDefaultProvider(network)
      const balance = await provider.getBalance(accountAddress)
      setAccountBalance(balance)
      console.log(accountAddress, ethers.utils.formatEther(balance))
    }, milliseconds)
  }, [])

  return { accountBalance }
}

export default useGetBalance
