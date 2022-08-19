import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import Image from 'next/image'

const NftItemVideoImage = forwardRef(({ nft, showVideo, needAction, onPlay }, ref) => {
  return (
    <div className="relative aspect-square overflow-hidden rounded">
      {needAction && (
        <div
          className="object-cover absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10 cursor-pointer"
          onClick={onPlay}
        >
          <p>Haz clic para reproducir!</p>
        </div>
      )}
      <Image
        src={nft.metadata.image}
        width={300}
        height={300}
        layout="responsive"
        objectFit="cover"
        className="aspect-square transition duration-300 group-hover:scale-110"
        alt={nft.metadata.name}
      />
      <motion.video
        key={nft.metadata.uri}
        ref={ref}
        src={nft.metadata.animation_url}
        className="aspect-square object-cover absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: showVideo ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        loop
        controls={false}
      />
    </div>
  )
})

NftItemVideoImage.displayName = 'NftItemVideoImage'

NftItemVideoImage.propTypes = {
  nft: PropTypes.object.isRequired,
  showVideo: PropTypes.bool,
  needAction: PropTypes.bool,
  onPlay: PropTypes.func
}

export default NftItemVideoImage
