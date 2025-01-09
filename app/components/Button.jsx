export function Button({children, ...props}){
    return <button {...props} className={'bg-red-500 text-white p-2 px-4 rounded hover:bg-red-400'}>
        {children}
    </button>
}