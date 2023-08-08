import React, {useEffect, useRef, useState} from 'react';
import Draggable from "react-draggable"

const ModalCard = ({setIsOpened, children, data}) => {
    const wrapperRef = useRef()
    const [positionY, setPositionY] = useState(720);
    const handleClick = (event) => {
        if (wrapperRef.current && wrapperRef.current === event.target) {
            setIsOpened(false);
        }
    };

    const handleDrag = (e, data) => {
        if (data.y >= (data.node.clientHeight / 2)) {
            setPositionY(data.node.clientHeight)
            setTimeout(() => {
                setIsOpened(false)
            }, 300)
        }
    };

    useEffect(() => {
        if (wrapperRef.current) {
            setPositionY(document.querySelector('.react-draggable').getBoundingClientRect().height)
            setTimeout(() => {
                setPositionY(0)
            }, 100)
        }
    }, [])

    return (
        <div onClick={(e) => handleClick(e)} ref={wrapperRef} className="modal__bg">
            <Draggable
                axis="y"
                onStop={handleDrag}
                position={{x:0, y: positionY}}
                bounds={{top: 0}}
                cancel=".no-drag"
            >
                {children}
            </Draggable>
        </div>
    );
};

export default ModalCard;