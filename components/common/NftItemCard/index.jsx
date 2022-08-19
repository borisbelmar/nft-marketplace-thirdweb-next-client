import PropTypes from 'prop-types'
import NftItemImageOnly from './components/NftItemImageOnly'
import NftItemWithVideo from './components/NftItemWithVideo'

export default function NftItemCard ({ nft }) {
  return nft.metadata.animation_url ? (
    <NftItemWithVideo nft={nft} />
  ) : (
    <NftItemImageOnly nft={nft} />
  )
}

NftItemCard.propTypes = {
  nft: PropTypes.object.isRequired
}