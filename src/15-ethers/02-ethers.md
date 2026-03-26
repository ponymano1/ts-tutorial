# Ethers.js 使用指南

## 1. 初始化

### 创建 Provider 和 Wallet

```typescript
import { JsonRpcProvider, Wallet } from 'ethers'

const provider = new JsonRpcProvider(process.env.RPC_URL)
const wallet = new Wallet(process.env.PRIVATE_KEY!, provider)
```

### 连接合约

```typescript
const contract = new Contract(address, abi, provider)
const contractWithSigner = contract.connect(wallet)
```

## 2. Gas 管理

### 估算 Gas

```typescript
const gasEstimate = await contractWithSigner.transfer.estimateGas(to, amount)
```

### 指定 Gas Limit

```typescript
await contractWithSigner.transfer(to, amount, {
  gasLimit: 100_000n,
})
```

## 3. 发送交易的方式

### 方式 1: 直接调用（最简单）

```typescript
const tx = await contractWithSigner.transfer(to, amount)
await tx.wait()
```

### 方式 2: 手动构造 Calldata

```typescript
import { Interface } from 'ethers'

const iface = new Interface(['function transfer(address,uint256)'])
const data = iface.encodeFunctionData('transfer', [to, amount])

const tx = await wallet.sendTransaction({
  to: contractAddress,
  data,
})
await tx.wait()
```

### 方式 3: populateTransaction（推荐，可控性强）

先生成交易对象，再修改参数，最后发送：

```typescript
const txRequest = await contractWithSigner.transfer.populateTransaction(to, amount)
txRequest.gasLimit = 100_000n

const tx = await wallet.sendTransaction(txRequest)
await tx.wait()
```

## 4. 模拟和预测

### staticCall - 模拟调用

不消耗 gas，预测交易结果：

```typescript
const result = await contractWithSigner.transfer.staticCall(to, amount)
```

### estimateGas - 估算 Gas

```typescript
const gasEstimate = await contractWithSigner.transfer.estimateGas(to, amount)
```
