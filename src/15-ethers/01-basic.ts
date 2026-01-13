import 'dotenv/config'
import { JsonRpcProvider, Wallet, Contract, parseEther, formatEther } from 'ethers'

const provider = new JsonRpcProvider(process.env.RPC_URL)
const wallet = new Wallet(process.env.PRIVATE_KEY!, provider)

const abi = [
  'function balanceOf(address) view returns (uint256)',
  'function transfer(address,uint256)',
]

const usdt = new Contract(process.env.USDT_ADDRESS!, abi, provider)

const balance = await usdt.balanceOf!(wallet.address)
console.log('balance:', formatEther(balance))

const tx = await usdt.connect(wallet).transfer(process.env.TO!, parseEther('1'))

await tx.wait()
console.log('✅ transfer done')
