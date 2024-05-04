import cover from '../../Assets/cover.png'
import '../../styles/cover.scss'
function Cover() {
    return (
        <div className='Cover' >
            <h1 className='Cover_Title'>Chez vous, partout et ailleurs</h1>
            <img className="Cover_image" src={cover} alt="cover" />
        </div>
    )
}

export default Cover