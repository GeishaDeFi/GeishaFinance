import {MenuEntry} from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.defizens.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.defizens.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'TakoyakiIcon',
    href: '/restaurants',
  },
  {
    label: 'Ponds',
    icon: 'PoolIcon',
    href: '/stands',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
            href: 'https://pancakeswap.info/token/0x190E475Bc30a35F4Ef207EdE136c951D7995b2f3',
      },
      //  {
      //  label: 'BscScan',
      //  href: 'https://bscscan.com/address/',
      //  },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/goose-finance',
      // },
      // // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/ZENSDefi/',
      },
      
    ],
  },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  ]

export default config
