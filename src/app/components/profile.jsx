export default function Profile({name, lastName, id, img, comments}) {
    return (
        <div className="flex flex-col bg-cyan-300 p-2 max-w-32 rounded text-black shadow-2xs">
            <img  className="rounded-full mb-2" src={img} alt="" />
            <h4 className="mr-2">{name}</h4>
            <p>{lastName}</p>
            <p>{id}</p>
            <div className="flex flex-col w-full min-h-11 bg-white">
                
            </div>
            {comments && comments.length > 0 ? (
                    <ul>
                        {comments.map((comentario, idx) => (
                            <li key={idx} className="text-sm text-gray-700 p-1 border-b">{comentario}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500 p-1">No hay comentarios</p>
                )}
        </div>
    )
}