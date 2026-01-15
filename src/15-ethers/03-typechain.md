# 安装

```shell
pnpm add -D typechain @typechain/ethers-v6
pnpm add ethers
```

- 准备好abi \*.json

## 生成 typeChain代码

```bash
pnpm exec typechain \
  --target ethers-v6 \
  --out-dir src/types \
  abi/*.json
```

```text
src/types/
├── ERC20.ts
├── factories/
│   └── ERC20__factory.ts
└── index.ts
```

## 连接合约

```typesript
import { ERC20__factory } from './types'

const erc20 = ERC20__factory.connect(
  '0xTokenAddress',
  wallet // 读用 provider，写用 wallet
)
```

## 调用合约方法

```typescript
const balance = await erc20.balanceOf(wallet.address)
// balance 是 bigint ✅

const tx = await erc20.transfer('0xTo', 1_000_000n)

await tx.wait()
```
