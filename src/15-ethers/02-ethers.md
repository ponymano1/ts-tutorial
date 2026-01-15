# 创建provider和钱包

```typescript
const provider = new JsonRpcProvider(process.env.RPC_URL)
const wallet = new Wallet(process.env.PRIVATE_KEY!, provider)
```

# 绑定signer

`const contractWithSigner = contract.connect(wallet)`

# gas

## 估算gas

```typescript
const gas = await contractWithSigner.transfer.estimateGas(to, amount)
```

## 指定gas

```typescript
await contractWithSigner.transfer(to, amount, {
  gasLimit: 100_000n,
})
```

# 发送transaction 方法

## 直接调用

```typescript
new Contract().methed()
//写入
const tx = await contract.connect(wallet).func(to, amount)
await tx.wait()
```

## 手动calldata

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

## populateTransaction（可控 ✅）

- 先生成tx,再发送

```typescript
const txRequest = await contract.transfer.populateTransaction(to, amount)

txRequest.gasLimit = 100_000n

const tx = await wallet.sendTransaction(txRequest)
await tx.wait()
```

## staticCall模拟调用

- 预执行
- 预测返回值

```typescript
const result = await contract.transfer.staticCall(to, amount)
```

## estimateGas (gas估算)

```typescript
const result = await contract.transfer.staticCall(to, amount)
```
