import PropTypes from 'prop-types'

export default function NftItemMetadata ({ nft }) {

  return (
    <div className="mb-1 mt-2">
      <h3 className="font-bold mb-1 text-sm">{nft.metadata.name}</h3>
      <span className="border border-cyan-500 text-cyan-500 font-bold text-xs p-1 rounded">
        10.4 MATIC
      </span>
    </div>
  )
}

NftItemMetadata.propTypes = {
  nft: PropTypes.object.isRequired
}