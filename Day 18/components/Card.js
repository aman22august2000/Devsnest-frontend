import ButtonField
const Card =({title}) => {
    const styleForButton = {
        backgroundColor:'green',
        color: 'aqua',
        padding:'10px'
    }
    return {
        <div className={title =='Title 1' ? 'title 1' : 'title 2'}>
        <div className="card">
        <img scr ="https://picsum.photos/200/300" height="200" width="200" alt=
        <div>Title {title || 'Random picture'} </div>
        <button style ={color: { title =='Title 3' ? 'magenta' : 'aqua'}} >Download</button>}
        <ButtonField title={title}/>
        </div>
        </div>
    }
}
export default Card;