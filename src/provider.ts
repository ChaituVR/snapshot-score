import { StaticJsonRpcProvider } from '@ethersproject/providers';
import networks from '@snapshot-labs/snapshot.js/src/networks.json';

networks['100'].rpc[0] = 'https://gno.getblock.io/mainnet/?api_key=6c1d1e6e-75d9-452f-a863-a694bff93d5c';

const providers = {};

export default function getProvider(network: string) {
  const url: any = networks[network].rpc[0];
  const connectionInfo = typeof url === 'object' ? { ...url, timeout: 25000 } : { url, timeout: 25000 };
  if (!providers[network]) providers[network] = new StaticJsonRpcProvider(connectionInfo);
  return providers[network];
}
