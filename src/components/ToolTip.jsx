import React from 'react'

const ToolTip = ( {position="bottom", colors=['bg-red-700', 'bg-green-700', 'bg-blue-700' ]}) => {

    const positionClasses = {
        bottom: {
            tooltip: 'bottom-full space-x-1 left-1/2 transform -translate-x-1/2 mb-3',
            arrow: 'left-1/2 transform -translate-1/2 -bottom-3 border-t'
        },
        top: {
            tooltip: 'top-full space-x-1 left-1/2 transform -translate-x-1/2 mt-3',
            arrow: 'left-1/2 transform -translate-1/2 -top-1 border-t'
        },
    }
  return (
        <div className=' relative group'>
                <button className=' relative p-4 bg-white/25 rounded-full border-2 text-xl '>
                    <div 
                    className= {`hidden absolute  p-2 rounded-lg bg-white/25 shadow-md group-hover:flex 
                    ${positionClasses[position].tooltip}`
                    }>

                        {
                            colors.map((c, i) => (
                                <div key={i} className={`size-4 ${c} border border-white rounded-full`}></div>
                            ))
                        }

                        {/* tooltip arrow */}
                        <div className= {`
                            ${positionClasses[position].arrow}
                            absolute  w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35`}></div>
                    </div>
                </button>
            </div>
  )
}

export default ToolTip