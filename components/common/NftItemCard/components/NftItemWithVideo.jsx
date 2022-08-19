import useAnimatedNft from '@hooks/useAnimatedNft'
import PropTypes from 'prop-types'
import NftItemLayout from './NftItemLayout'
import NftItemMetadata from './NftItemMetadata'
import NftItemVideoImage from './NftItemVideoImage'

export default function NftItemWithVideo ({ nft }) {
  const {
    videoRef,
    videoShow,
    handleVideoPause,
    handleVideoPlay,
    needAction
  } = useAnimatedNft()

  return (
    <NftItemLayout
      onVideoPlay={handleVideoPlay}
      onVideoPause={handleVideoPause}
    >
      <NftItemVideoImage
        ref={videoRef}
        nft={nft}
        showVideo={videoShow}
        onPlay={handleVideoPlay}
        needAction={needAction}
      />
      <NftItemMetadata nft={nft} />
    </NftItemLayout>
  )
}

NftItemWithVideo.propTypes = {
  nft: PropTypes.object.isRequired
}