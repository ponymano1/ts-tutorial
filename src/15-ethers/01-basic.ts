import 'dotenv/config'
import { JsonRpcProvider, Wallet, Contract, BrowserProvider, parseEther, formatEther } from 'ethers'

const abi = [
  'function balanceOf(address) view returns (uint256)',
  'function transfer(address,uint256)',
]

// ========== 函数封装版本 ==========

// 创建 RPC Provider
function createProvider() {
  return new JsonRpcProvider(process.env.RPC_URL)
}

// 创建 Wallet Signer (私钥方式)
function createWalletSigner(provider: JsonRpcProvider) {
  return new Wallet(process.env.PRIVATE_KEY!, provider)
}

// 创建浏览器钱包 Signer (MetaMask 等)
async function createBrowserSigner() {
  const globalWithEthereum = globalThis as typeof globalThis & { ethereum?: unknown }
  if (!globalWithEthereum.ethereum) {
    throw new Error('No browser wallet found')
  }
  const provider = new BrowserProvider(globalWithEthereum.ethereum as any)
  return await provider.getSigner()
}

// 创建合约实例
function createContract(address: string, provider: JsonRpcProvider) {
  return new Contract(address, abi, provider)
}

// 查询余额
async function getBalance(contract: Contract, address: string) {
  const balance = await contract.balanceOf?.(address)
  return formatEther(balance)
}

// 转账
async function transfer(contract: Contract, signer: Wallet, to: string, amount: string) {
  const contractWithSigner = contract.connect(signer)
  const tx = await contractWithSigner.transfer(to, parseEther(amount))
  await tx.wait()
  return tx.hash
}

// ========== 使用示例 ==========

async function main() {
  const provider = createProvider()
  const signer = createWalletSigner(provider)
  const contract = createContract(process.env.USDT_ADDRESS!, provider)

  const balance = await getBalance(contract, signer.address)
  console.log('Balance:', balance)

  const txHash = await transfer(contract, signer, process.env.TO!, '1')
  console.log('✅ Transfer done:', txHash)
}

main()

// ========== 直接写到底版本（不封装）==========

// 1. 私钥方式
const provider2 = new JsonRpcProvider(process.env.RPC_URL)
const signer2 = new Wallet(process.env.PRIVATE_KEY!, provider2)
const contract2 = new Contract(process.env.USDT_ADDRESS!, abi, provider2)

const balance2 = await contract2.balanceOf(signer2.address)
console.log('Balance:', formatEther(balance2))

const contractWithSigner2 = contract2.connect(signer2)
const tx2 = await contractWithSigner2.transfer(process.env.TO!, parseEther('1'))
await tx2.wait()
console.log('✅ Transfer done')

// 2. 浏览器钱包方式 (MetaMask)
const browserProvider = new BrowserProvider((globalThis as any).ethereum)
const browserSigner = await browserProvider.getSigner()
const contractWithBrowserSigner = contract2.connect(browserSigner)

const tx3 = await contractWithBrowserSigner.transfer(process.env.TO!, parseEther('1'))
await tx3.wait()
console.log('✅ Browser wallet transfer done')
