import '../../styles/Host.scss'

function Host (props) {
  const infoLogement = props.children
  return (
    <div className='host'>
      <img className='host_image' src={infoLogement.host.picture} alt={infoLogement.host.name} />
      <p className='host_name'>{infoLogement.host.name}</p>
      {/* {children} */}
    </div>
  );
}

export default Host