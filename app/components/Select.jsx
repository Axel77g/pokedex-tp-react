import {useEffect, useState} from "react";

export function Select({multiple, options, placeholder, onChange = null}){
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState([]);

    useEffect(()=>{
        if(onChange){
            onChange(selected)
        }
    },[selected])

    function handleOpen(){
        setOpen(!open);
    }

    function handleSelect(option){
        if(multiple){
            setSelected([...selected, option]);
        }else{
            setSelected([option]);
            setOpen(false);
        }
    }

    const label = placeholder || 'Select an option';
    return <div>
        <div className={'activitor'} onClick={handleOpen}>
            {label}
        </div>

        {open && <div className={'selectContent'}>
            <div className={'selectOptions'}>
                {options.map((option, i) => {
                    return <div key={'option-'+i} onClick={()=>handleSelect(option)}>{option.label}</div>
                })}
            </div>
        </div>}


    </div>
}