import React, { useState } from 'react'
import './App.scss';
import { motion } from "framer-motion"
const Test = () => {

    const [open, setOpen] = useState(false)
        // 1
    // const variants = {
    //     visible: { opacity: 1, x: 800, transition: { type: "spring", stiffness: 100, damping: 100 } },
    //     hidden: { opacity: 0 }
    // }
    const variants ={
        visibile :(i)=>({
            opacity:1,
            x : 100,
            transition :{ delay : i * 0.3},
        }),
        hidden : { opacity:1}
    };


    const items = ["item1", "item2", "item3", "item4"];
    return (
        <div className='course'>
            {/* 1 */}
            {/* which type animation type there show in one box */}

            {/* <motion.div className="box"
                // initial={{ opacity: 0.5, scale: 0.5 }}
                // transition={{ duration: 2, }}
                // whileInView= {{opacity: 1, scale:2}}
                // drag
                variants={variants}
                // initial="hidden"
                // animate="visible"
                animate={open ? "visible" : "hidden"}
            >
            </motion.div> */}
            {/* <button onClick={() => setOpen(prev => !prev)}>Click</button> */}

            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((item, i) => (
                            <motion.li variants={variants} key={item} custom={i}>{item}</motion.li>
                    ))}
            </motion.ul>

        </div>
    )
}

export default Test
