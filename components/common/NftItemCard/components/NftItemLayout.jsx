import PropTypes from 'prop-types'

export default function NftItemLayout ({ children, onVideoPlay, onVideoPause }) {
  return (
    <li
      className="group bg-gray-900 p-2 rounded-md"
      onMouseEnter={onVideoPlay}
      onMouseLeave={onVideoPause}
    >
      {children}
    </li>
  )
}

NftItemLayout.propTypes = {
  children: PropTypes.node.isRequired,
  onVideoPlay: PropTypes.func,
  onVideoPause: PropTypes.func
}