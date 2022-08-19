import PropTypes from 'prop-types'
import NftItemLayout from './NftItemLayout'
import NftItemMetadata from './NftItemMetadata'
import NftItemVideoImage from './NftItemVideoImage'

export default function NftItemImageOnly ({ nft }) {

  return (
    <NftItemLayout>
      <NftItemVideoImage nft={nft} />
      <NftItemMetadata nft={nft} />
    </NftItemLayout>
  )
}

NftItemImageOnly.propTypes = {
  nft: PropTypes.object.isRequired
}